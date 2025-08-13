import { NextRequest, NextResponse } from 'next/server';
import twilio from 'twilio';

// Twilio konfigürasyonu
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const twilioPhoneNumber = process.env.TWILIO_PHONE_NUMBER;

// Twilio client oluştur
const client = twilio(accountSid, authToken);

export async function POST(request: NextRequest) {
  try {
    console.log('📱 SMS gönderme API çağrıldı');
    
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

    if (!accountSid || !authToken || !twilioPhoneNumber) {
      console.error('❌ Twilio konfigürasyonu eksik');
      return NextResponse.json(
        { success: false, message: 'SMS servisi konfigürasyonu eksik' },
        { status: 500 }
      );
    }

    // Telefon numarasını formatla (Türkiye için)
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

    console.log('📱 Formatlanmış telefon:', formattedPhone);

    // SMS mesajını hazırla
    const message = `Merhaba ${name}! ${company} firmasından ${service} hizmeti için başvurunuz alınmıştır. En kısa sürede size dönüş yapacağız. Teşekkürler! - NovaGraph`;

    console.log('📤 SMS gönderiliyor...');
    console.log('📱 Alıcı:', formattedPhone);
    console.log('📝 Mesaj:', message);

    // SMS gönder
    const result = await client.messages.create({
      body: message,
      from: twilioPhoneNumber,
      to: formattedPhone
    });

    console.log('✅ SMS gönderildi:', result.sid);
    console.log('📱 SMS durumu:', result.status);

    return NextResponse.json({ 
      success: true, 
      message: 'SMS başarıyla gönderildi',
      sid: result.sid,
      status: result.status
    });

  } catch (error) {
    console.error('❌ SMS gönderme hatası:', error);
    
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
        default:
          return NextResponse.json(
            { success: false, message: `SMS gönderilemedi: ${twilioError.message || 'Bilinmeyen hata'}` },
            { status: 500 }
          );
      }
    }

    return NextResponse.json(
      { success: false, message: 'SMS gönderilirken bir hata oluştu' },
      { status: 500 }
    );
  }
}
