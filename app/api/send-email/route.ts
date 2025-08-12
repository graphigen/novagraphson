import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { mailConfig, mailRecipients } from '@/lib/environment';

// Mail transporter konfigürasyonu
const transporter = nodemailer.createTransport(mailConfig);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { 
      name, 
      email, 
      phone, 
      company, 
      message, 
      service,
      formType 
    } = body;

    // Form tipine göre subject belirleme
    let subject = '';
    let thankYouSubject = '';
    switch (formType) {
      case 'popup':
        subject = 'Yeni Popup İletişim Formu - NovaGraph';
        thankYouSubject = 'Teşekkürler! Form Başvurunuz Alındı - NovaGraph';
        break;
      case 'contact':
        subject = 'Yeni İletişim Formu - NovaGraph';
        thankYouSubject = 'Teşekkürler! İletişim Talebiniz Alındı - NovaGraph';
        break;
      case 'marketing':
        subject = 'Yeni Pazarlama Strateji Başvurusu - NovaGraph';
        thankYouSubject = 'Teşekkürler! Pazarlama Strateji Başvurunuz Alındı - NovaGraph';
        break;
      default:
        subject = 'Yeni Form Başvurusu - NovaGraph';
        thankYouSubject = 'Teşekkürler! Form Başvurunuz Alındı - NovaGraph';
    }

    // Bize giden mail (mevcut)
    const companyMailOptions = {
      from: mailConfig.auth.user,
      to: mailRecipients.general,
      subject: subject,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2563eb; border-bottom: 2px solid #2563eb; padding-bottom: 10px;">
            ${subject}
          </h2>
          
          <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #1e293b; margin-top: 0;">Form Bilgileri:</h3>
            <p><strong>Form Tipi:</strong> ${formType === 'popup' ? 'Popup İletişim' : formType === 'contact' ? 'İletişim Sayfası' : 'Pazarlama Strateji Başvurusu'}</p>
            <p><strong>Ad Soyad:</strong> ${name}</p>
            <p><strong>E-posta:</strong> ${email}</p>
            <p><strong>Telefon:</strong> ${phone || 'Belirtilmemiş'}</p>
            ${company ? `<p><strong>Şirket:</strong> ${company}</p>` : ''}
            ${service ? `<p><strong>Hizmet:</strong> ${service}</p>` : ''}
          </div>
          
          <div style="background: #f1f5f9; padding: 20px; border-radius: 8px;">
            <h3 style="color: #1e293b; margin-top: 0;">Mesaj:</h3>
            <p style="line-height: 1.6; color: #334155;">${message}</p>
          </div>
          
          <div style="margin-top: 30px; padding: 15px; background: #e2e8f0; border-radius: 8px; text-align: center;">
            <p style="margin: 0; color: #64748b; font-size: 14px;">
              Bu mail NovaGraph web sitesi üzerinden otomatik olarak gönderilmiştir.
            </p>
          </div>
        </div>
      `
    };

    // Form gönderen kişiye giden teşekkür maili
    const thankYouMailOptions = {
      from: mailConfig.auth.user,
      to: email,
      subject: thankYouSubject,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
          <!-- Header -->
          <div style="background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%); padding: 40px 30px; text-align: center;">
            <div style="width: 80px; height: 80px; background: rgba(255, 255, 255, 0.2); border-radius: 50%; margin: 0 auto 20px; display: flex; align-items: center; justify-content: center;">
              <span style="font-size: 40px; color: white;">✅</span>
            </div>
            <h1 style="color: white; margin: 0; font-size: 28px; font-weight: 600;">Teşekkürler!</h1>
            <p style="color: rgba(255, 255, 255, 0.9); margin: 10px 0 0; font-size: 16px;">Form başvurunuz başarıyla alındı</p>
          </div>

          <!-- Content -->
          <div style="padding: 40px 30px;">
            <div style="text-align: center; margin-bottom: 30px;">
              <h2 style="color: #1f2937; margin: 0 0 15px; font-size: 22px; font-weight: 600;">Merhaba ${name},</h2>
              <p style="color: #6b7280; margin: 0; font-size: 16px; line-height: 1.6;">
                ${formType === 'marketing' ? 'Pazarlama strateji başvurunuz' : formType === 'contact' ? 'İletişim talebiniz' : 'Form başvurunuz'} için teşekkür ederiz. 
                Uzman ekibimiz en kısa sürede size dönüş yapacaktır.
              </p>
            </div>

            <!-- Form Özeti -->
            <div style="background: #f8fafc; border: 1px solid #e5e7eb; border-radius: 8px; padding: 25px; margin-bottom: 30px;">
              <h3 style="color: #374151; margin: 0 0 20px; font-size: 18px; font-weight: 600; display: flex; align-items: center;">
                <span style="margin-right: 8px;">📋</span>
                Form Özeti
              </h3>
              
              <div style="display: grid; gap: 15px;">
                <div style="display: flex; justify-content: space-between; padding: 12px 0; border-bottom: 1px solid #e5e7eb;">
                  <span style="color: #6b7280; font-weight: 500;">Ad Soyad:</span>
                  <span style="color: #1f2937; font-weight: 600;">${name}</span>
                </div>
                
                <div style="display: flex; justify-content: space-between; padding: 12px 0; border-bottom: 1px solid #e5e7eb;">
                  <span style="color: #6b7280; font-weight: 500;">E-posta:</span>
                  <span style="color: #1f2937; font-weight: 600;">${email}</span>
                </div>
                
                ${phone ? `
                <div style="display: flex; justify-content: space-between; padding: 12px 0; border-bottom: 1px solid #e5e7eb;">
                  <span style="color: #6b7280; font-weight: 500;">Telefon:</span>
                  <span style="color: #1f2937; font-weight: 600;">${phone}</span>
                </div>
                ` : ''}
                
                ${company ? `
                <div style="display: flex; justify-content: space-between; padding: 12px 0; border-bottom: 1px solid #e5e7eb;">
                  <span style="color: #6b7280; font-weight: 500;">Şirket:</span>
                  <span style="color: #1f2937; font-weight: 600;">${company}</span>
                </div>
                ` : ''}
                
                ${service ? `
                <div style="display: flex; justify-content: space-between; padding: 12px 0; border-bottom: 1px solid #e5e7eb;">
                  <span style="color: #6b7280; font-weight: 500;">Hizmet:</span>
                  <span style="color: #1f2937; font-weight: 600;">${service}</span>
                </div>
                ` : ''}
              </div>
            </div>

            <!-- Sonraki Adımlar -->
            <div style="background: #f0f9ff; border: 1px solid #bae6fd; border-radius: 8px; padding: 25px; margin-bottom: 30px;">
              <h3 style="color: #0369a1; margin: 0 0 15px; font-size: 18px; font-weight: 600; display: flex; align-items: center;">
                <span style="margin-right: 8px;">⏰</span>
                Sonraki Adımlar
              </h3>
              <ul style="color: #0369a1; margin: 0; padding-left: 20px; line-height: 1.6;">
                <li style="margin-bottom: 8px;">Uzman ekibimiz form bilgilerinizi inceleyecek</li>
                <li style="margin-bottom: 8px;">En geç 48 saat içinde size dönüş yapacağız</li>
                <li style="margin-bottom: 8px;">Gerekirse ek bilgi talep edebiliriz</li>
                <li style="margin-bottom: 0;">Size özel çözüm önerileri sunacağız</li>
              </ul>
            </div>

            <!-- İletişim Bilgileri -->
            <div style="background: #f3f4f6; border: 1px solid #d1d5db; border-radius: 8px; padding: 25px; text-align: center;">
              <h3 style="color: #374151; margin: 0 0 15px; font-size: 18px; font-weight: 600;">Hızlı İletişim</h3>
              <div style="display: flex; justify-content: center; gap: 20px; flex-wrap: wrap;">
                <a href="https://wa.me/905456642302" style="display: inline-flex; align-items: center; background: #25d366; color: white; padding: 12px 20px; border-radius: 8px; text-decoration: none; font-weight: 600; transition: background 0.3s;">
                  <span style="margin-right: 8px;">💬</span>
                  WhatsApp
                </a>
                <a href="tel:+905456642302" style="display: inline-flex; align-items: center; background: #3b82f6; color: white; padding: 12px 20px; border-radius: 8px; text-decoration: none; font-weight: 600; transition: background 0.3s;">
                  <span style="margin-right: 8px;">📞</span>
                  Hemen Ara
                </a>
              </div>
            </div>
          </div>

          <!-- Footer -->
          <div style="background: #f9fafb; padding: 25px 30px; text-align: center; border-top: 1px solid #e5e7eb;">
            <p style="color: #6b7280; margin: 0 0 10px; font-size: 14px;">
              Bu e-posta NovaGraph web sitesi üzerinden otomatik olarak gönderilmiştir.
            </p>
            <p style="color: #9ca3af; margin: 0; font-size: 12px;">
              © 2025 NovaGraph Teknoloji A.Ş. Tüm hakları saklıdır.
            </p>
          </div>
        </div>
      `
    };

    // Her iki maili de gönder
    await Promise.all([
      transporter.sendMail(companyMailOptions),
      transporter.sendMail(thankYouMailOptions)
    ]);

    return NextResponse.json({ 
      success: true, 
      message: 'E-postalar başarıyla gönderildi' 
    });

  } catch (error) {
    console.error('Mail gönderme hatası:', error);
    return NextResponse.json(
      { 
        success: false, 
        message: 'E-posta gönderilirken bir hata oluştu' 
      },
      { status: 500 }
    );
  }
}
