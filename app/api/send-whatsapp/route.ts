import { NextRequest, NextResponse } from 'next/server';
import twilio from 'twilio';

// Twilio konfigürasyonu
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const twilioWhatsAppNumber = process.env.TWILIO_WHATSAPP_NUMBER || 'whatsapp:+14155238886'; // Default sandbox

// Twilio client oluştur
const client = twilio(accountSid, authToken);

export async function POST(request: NextRequest) {
  try {
    console.log('💬 WhatsApp mesaj gönderme API çağrıldı');
    
    const body = await request.json();
    console.log('📋 Request body:', JSON.stringify(body, null, 2));
    
    const { 
      phone, 
      name, 
      company, 
      service 
    } = body;

    // Gerekli alanları kontrol et
    if (!phone) {
      return NextResponse.json(
        { success: false, message: 'Telefon numarası gerekli' },
        { status: 400 }
      );
    }

    if (!accountSid || !authToken) {
      console.error('❌ Twilio konfigürasyonu eksik');
      return NextResponse.json(
        { success: false, message: 'WhatsApp servisi konfigürasyonu eksik' },
        { status: 500 }
      );
    }

    // Telefon numarasını WhatsApp formatına çevir
    let formattedPhone = phone.replace(/\s/g, ''); // Boşlukları kaldır
    
    // Eğer +90 ile başlamıyorsa ekle
    if (!formattedPhone.startsWith('+90')) {
      if (formattedPhone.startsWith('0')) {
        formattedPhone = '+90' + formattedPhone.substring(1);
      } else if (formattedPhone.startsWith('90')) {
        formattedPhone = '+' + formattedPhone;
      } else if (formattedPhone.startsWith('5')) {
        formattedPhone = '+90' + formattedPhone;
      } else {
        formattedPhone = '+90' + formattedPhone;
      }
    }

    // WhatsApp formatına çevir
    const whatsappPhone = `whatsapp:${formattedPhone}`;
    
    console.log('📱 Formatlanmış telefon:', formattedPhone);
    console.log('💬 WhatsApp formatı:', whatsappPhone);

    // WhatsApp mesajını hazırla (daha zengin içerik)
    const message = `🎉 *Merhaba ${name}!*

🏢 *${company}* firmasından *${service}* hizmeti için başvurunuz alınmıştır.

✅ *Sonraki Adımlar:*
• Uzman ekibimiz form bilgilerinizi inceleyecek
• En geç 48 saat içinde size dönüş yapacağız
• Size özel çözüm önerileri sunacağız

📞 *Hızlı İletişim:*
• WhatsApp: +90 545 664 23 02
• Telefon: +90 545 664 23 02

🌐 *Web Sitemiz:* https://novagraph.com.tr

*Teşekkürler!* 🚀
*NovaGraph Teknoloji A.Ş.*`;

    console.log('📤 WhatsApp mesajı gönderiliyor...');
    console.log('💬 Alıcı:', whatsappPhone);
    console.log('📝 Mesaj:', message);

    // WhatsApp mesajı gönder
    const result = await client.messages.create({
      body: message,
      from: twilioWhatsAppNumber,
      to: whatsappPhone
    });

    console.log('✅ WhatsApp mesajı gönderildi:', result.sid);
    console.log('💬 Mesaj durumu:', result.status);

    return NextResponse.json({ 
      success: true, 
      message: 'WhatsApp mesajı başarıyla gönderildi',
      sid: result.sid,
      status: result.status
    });

  } catch (error) {
    console.error('❌ WhatsApp mesaj gönderme hatası:', error);
    
    // Twilio spesifik hata kodlarını kontrol et
    if (error && typeof error === 'object' && 'code' in error) {
      const twilioError = error as any;
      
      switch (twilioError.code) {
        case 21211:
          return NextResponse.json(
            { success: false, message: 'Geçersiz telefon numarası formatı' },
            { status: 400 }
          );
        case 21608:
          return NextResponse.json(
            { success: false, message: 'Telefon numarası doğrulanmamış' },
            { status: 400 }
          );
        case 21614:
          return NextResponse.json(
            { success: false, message: 'Telefon numarası bulunamadı' },
            { status: 400 }
          );
        case 30008:
          return NextResponse.json(
            { success: false, message: 'WhatsApp mesajı gönderilemedi - kullanıcı WhatsApp\'ta değil' },
            { status: 400 }
          );
        case 30009:
          return NextResponse.json(
            { success: false, message: 'WhatsApp mesajı gönderilemedi - kullanıcı sandbox\'a katılmamış' },
            { status: 400 }
          );
        default:
          return NextResponse.json(
            { success: false, message: `WhatsApp mesajı gönderilemedi: ${twilioError.message || 'Bilinmeyen hata'}` },
            { status: 500 }
          );
      }
    }

    return NextResponse.json(
      { success: false, message: 'WhatsApp mesajı gönderilirken bir hata oluştu' },
      { status: 500 }
    );
  }
}
