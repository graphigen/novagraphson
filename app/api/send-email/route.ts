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
    let formDetails = '';
    
    switch (formType) {
      case 'popup':
        subject = 'Yeni Popup İletişim Formu - NovaGraph';
        thankYouSubject = 'Teşekkürler! Form Başvurunuz Alındı - NovaGraph';
        formDetails = `
          <div style="background: #f7fafc; border: 1px solid #e2e8f0; border-radius: 12px; padding: 32px; margin-bottom: 32px;">
            <h3 style="color: #2d3748; margin: 0 0 24px; font-size: 20px; font-weight: 600; display: flex; align-items: center;">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="color: #667eea; margin-right: 12px;">
                <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
              </svg>
              Form Detayları
            </h3>
            
            <div style="display: grid; gap: 20px;">
              <div style="display: flex; justify-content: space-between; padding: 16px 0; border-bottom: 1px solid #e2e8f0;">
                <span style="color: #4a5568; font-weight: 500;">Ad Soyad:</span>
                <span style="color: #1a202c; font-weight: 600;">${name}</span>
              </div>
              
              <div style="display: flex; justify-content: space-between; padding: 16px 0; border-bottom: 1px solid #e2e8f0;">
                <span style="color: #4a5568; font-weight: 500;">E-posta:</span>
                <span style="color: #1a202c; font-weight: 600;">${email}</span>
              </div>
              
              ${phone ? `
              <div style="display: flex; justify-content: space-between; padding: 16px 0; border-bottom: 1px solid #e2e8f0;">
                <span style="color: #4a5568; font-weight: 500;">Telefon:</span>
                <span style="color: #1a202c; font-weight: 600;">${phone}</span>
              </div>
              ` : ''}
              
              ${company ? `
              <div style="display: flex; justify-content: space-between; padding: 16px 0; border-bottom: 1px solid #e2e8f0;">
                <span style="color: #4a5568; font-weight: 500;">Şirket:</span>
                <span style="color: #1a202c; font-weight: 600;">${company}</span>
              </div>
              ` : ''}
              
              ${service ? `
              <div style="display: flex; justify-content: space-between; padding: 16px 0; border-bottom: 1px solid #e2e8f0;">
                <span style="color: #4a5568; font-weight: 500;">Hizmet:</span>
                <span style="color: #1a202c; font-weight: 600;">${service}</span>
              </div>
              ` : ''}
            </div>
          </div>
        `;
        break;
        
      case 'contact':
        subject = 'Yeni İletişim Formu - NovaGraph';
        thankYouSubject = 'Teşekkürler! İletişim Talebiniz Alındı - NovaGraph';
        formDetails = `
          <div style="background: #f7fafc; border: 1px solid #e2e8f0; border-radius: 12px; padding: 32px; margin-bottom: 32px;">
            <h3 style="color: #2d3748; margin: 0 0 24px; font-size: 20px; font-weight: 600; display: flex; align-items: center;">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="color: #667eea; margin-right: 12px;">
                <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
              </svg>
              Form Detayları
            </h3>
            
            <div style="display: grid; gap: 20px;">
              <div style="display: flex; justify-content: space-between; padding: 16px 0; border-bottom: 1px solid #e2e8f0;">
                <span style="color: #4a5568; font-weight: 500;">Ad Soyad:</span>
                <span style="color: #1a202c; font-weight: 600;">${name}</span>
              </div>
              
              <div style="display: flex; justify-content: space-between; padding: 16px 0; border-bottom: 1px solid #e2e8f0;">
                <span style="color: #4a5568; font-weight: 500;">E-posta:</span>
                <span style="color: #1a202c; font-weight: 600;">${email}</span>
              </div>
              
              ${phone ? `
              <div style="display: flex; justify-content: space-between; padding: 16px 0; border-bottom: 1px solid #e2e8f0;">
                <span style="color: #4a5568; font-weight: 500;">Telefon:</span>
                <span style="color: #1a202c; font-weight: 600;">${phone}</span>
              </div>
              ` : ''}
              
              ${company ? `
              <div style="display: flex; justify-content: space-between; padding: 16px 0; border-bottom: 1px solid #e2e8f0;">
                <span style="color: #4a5568; font-weight: 500;">Şirket:</span>
                <span style="color: #1a202c; font-weight: 600;">${company}</span>
              </div>
              ` : ''}
              
              ${service ? `
              <div style="display: flex; justify-content: space-between; padding: 16px 0; border-bottom: 1px solid #e2e8f0;">
                <span style="color: #4a5568; font-weight: 500;">Hizmet:</span>
                <span style="color: #1a202c; font-weight: 600;">${service}</span>
              </div>
              ` : ''}
            </div>
          </div>
        `;
        break;
        
      case 'marketing':
        subject = 'Yeni Pazarlama Strateji Başvurusu - NovaGraph';
        thankYouSubject = 'Teşekkürler! Pazarlama Strateji Başvurunuz Alındı - NovaGraph';
        formDetails = `
          <div style="background: #f7fafc; border: 1px solid #e2e8f0; border-radius: 12px; padding: 32px; margin-bottom: 32px;">
            <h3 style="color: #2d3748; margin: 0 0 24px; font-size: 20px; font-weight: 600; display: flex; align-items: center;">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="color: #667eea; margin-right: 12px;">
                <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
              </svg>
              Pazarlama Strateji Form Detayları
            </h3>
            
            <div style="display: grid; gap: 20px;">
              <!-- Kişisel Bilgiler -->
              <div style="background: #edf2f7; border-radius: 8px; padding: 20px;">
                <h4 style="color: #2d3748; margin: 0 0 16px; font-size: 16px; font-weight: 600; display: flex; align-items: center;">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="color: #667eea; margin-right: 8px;">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                    <circle cx="12" cy="7" r="4"/>
                  </svg>
                  Kişisel Bilgiler
                </h4>
                <div style="display: grid; gap: 12px;">
                  <div style="display: flex; justify-content: space-between; padding: 8px 0; border-bottom: 1px solid #cbd5e0;">
                    <span style="color: #4a5568; font-weight: 500;">Ad Soyad:</span>
                    <span style="color: #1a202c; font-weight: 600;">${name}</span>
                  </div>
                  <div style="display: flex; justify-content: space-between; padding: 8px 0; border-bottom: 1px solid #cbd5e0;">
                    <span style="color: #4a5568; font-weight: 500;">E-posta:</span>
                    <span style="color: #1a202c; font-weight: 600;">${email}</span>
                  </div>
                  ${phone ? `
                  <div style="display: flex; justify-content: space-between; padding: 8px 0; border-bottom: 1px solid #cbd5e0;">
                    <span style="color: #4a5568; font-weight: 500;">Telefon:</span>
                    <span style="color: #1a202c; font-weight: 600;">${phone}</span>
                  </div>
                  ` : ''}
                </div>
              </div>

              <!-- Şirket Bilgileri -->
              ${company ? `
              <div style="background: #edf2f7; border-radius: 8px; padding: 20px;">
                <h4 style="color: #2d3748; margin: 0 0 16px; font-size: 16px; font-weight: 600; display: flex; align-items: center;">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="color: #667eea; margin-right: 8px;">
                    <path d="M3 21h18"/>
                    <path d="M5 21V7l8-4v18"/>
                    <path d="M19 21V11l-6-4"/>
                    <path d="M9 9h.01"/>
                    <path d="M9 12h.01"/>
                    <path d="M9 15h.01"/>
                    <path d="M9 18h.01"/>
                  </svg>
                  Şirket Bilgileri
                </h4>
                <div style="display: grid; gap: 12px;">
                  <div style="display: flex; justify-content: space-between; padding: 8px 0; border-bottom: 1px solid #cbd5e0;">
                    <span style="color: #4a5568; font-weight: 500;">Şirket Adı:</span>
                    <span style="color: #1a202c; font-weight: 600;">${company}</span>
                  </div>
                </div>
              </div>
              ` : ''}

              <!-- Hizmet Bilgileri -->
              ${service ? `
              <div style="background: #edf2f7; border-radius: 8px; padding: 20px;">
                <h4 style="color: #2d3748; margin: 0 0 16px; font-size: 16px; font-weight: 600; display: flex; align-items: center;">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="color: #667eea; margin-right: 8px;">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                  Hizmet Bilgileri
                </h4>
                <div style="display: grid; gap: 12px;">
                  <div style="display: flex; justify-content: space-between; padding: 8px 0; border-bottom: 1px solid #cbd5e0;">
                    <span style="color: #4a5568; font-weight: 500;">Talep Edilen Hizmet:</span>
                    <span style="color: #1a202c; font-weight: 600;">${service}</span>
                  </div>
                </div>
              </div>
              ` : ''}
            </div>
          </div>
        `;
        break;
        
      default:
        subject = 'Yeni Form Başvurusu - NovaGraph';
        thankYouSubject = 'Teşekkürler! Form Başvurunuz Alındı - NovaGraph';
        formDetails = `
          <div style="background: #f7fafc; border: 1px solid #e2e8f0; border-radius: 12px; padding: 32px; margin-bottom: 32px;">
            <h3 style="color: #2d3748; margin: 0 0 24px; font-size: 20px; font-weight: 600; display: flex; align-items: center;">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="color: #667eea; margin-right: 12px;">
                <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
              </svg>
              Form Detayları
            </h3>
            
            <div style="display: grid; gap: 20px;">
              <div style="display: flex; justify-content: space-between; padding: 16px 0; border-bottom: 1px solid #e2e8f0;">
                <span style="color: #4a5568; font-weight: 500;">Ad Soyad:</span>
                <span style="color: #1a202c; font-weight: 600;">${name}</span>
              </div>
              
              <div style="display: flex; justify-content: space-between; padding: 16px 0; border-bottom: 1px solid #e2e8f0;">
                <span style="color: #4a5568; font-weight: 500;">E-posta:</span>
                <span style="color: #1a202c; font-weight: 600;">${email}</span>
              </div>
              
              ${phone ? `
              <div style="display: flex; justify-content: space-between; padding: 16px 0; border-bottom: 1px solid #e2e8f0;">
                <span style="color: #4a5568; font-weight: 500;">Telefon:</span>
                <span style="color: #1a202c; font-weight: 600;">${phone}</span>
              </div>
              ` : ''}
              
              ${company ? `
              <div style="display: flex; justify-content: space-between; padding: 16px 0; border-bottom: 1px solid #e2e8f0;">
                <span style="color: #4a5568; font-weight: 500;">Şirket:</span>
                <span style="color: #1a202c; font-weight: 600;">${company}</span>
              </div>
              ` : ''}
              
              ${service ? `
              <div style="display: flex; justify-content: space-between; padding: 16px 0; border-bottom: 1px solid #e2e8f0;">
                <span style="color: #4a5568; font-weight: 500;">Hizmet:</span>
                <span style="color: #1a202c; font-weight: 600;">${service}</span>
              </div>
              ` : ''}
            </div>
          </div>
        `;
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
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);">
          <!-- Header -->
          <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 48px 32px; text-align: center;">
            <div style="width: 72px; height: 72px; background: rgba(255, 255, 255, 0.15); border-radius: 16px; margin: 0 auto 24px; display: flex; align-items: center; justify-content: center; backdrop-filter: blur(10px);">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="color: white;">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
            </div>
            <h1 style="color: white; margin: 0; font-size: 32px; font-weight: 700; letter-spacing: -0.5px;">Teşekkürler!</h1>
            <p style="color: rgba(255, 255, 255, 0.9); margin: 12px 0 0; font-size: 18px; font-weight: 400;">Pazarlama Strateji Başvurunuz Alındı</p>
          </div>

          <!-- Content -->
          <div style="padding: 48px 32px;">
            <div style="text-align: center; margin-bottom: 40px;">
              <h2 style="color: #1a202c; margin: 0 0 16px; font-size: 24px; font-weight: 600;">Merhaba ${name},</h2>
              <p style="color: #4a5568; margin: 0; font-size: 16px; line-height: 1.7;">
                Pazarlama strateji başvurunuz için teşekkür ederiz. Uzman ekibimiz en kısa sürede size dönüş yapacaktır.
              </p>
            </div>

            <!-- Form Detayları -->
            ${formDetails}

            <!-- Sonraki Adımlar -->
            <div style="background: #edf2f7; border: 1px solid #cbd5e0; border-radius: 12px; padding: 32px; margin-bottom: 32px;">
              <h3 style="color: #2d3748; margin: 0 0 20px; font-size: 20px; font-weight: 600; display: flex; align-items: center;">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="color: #667eea; margin-right: 12px;">
                  <circle cx="12" cy="12" r="10"/>
                  <polyline points="12,6 12,12 16,14"/>
                </svg>
                Sonraki Adımlar
              </h3>
              <ul style="color: #4a5568; margin: 0; padding-left: 24px; line-height: 1.7;">
                <li style="margin-bottom: 12px;">Uzman ekibimiz form bilgilerinizi detaylıca inceleyecek</li>
                <li style="margin-bottom: 12px;">En geç 48 saat içinde size özel dönüş yapacağız</li>
                <li style="margin-bottom: 12px;">Gerekirse ek bilgi talep edebiliriz</li>
                <li style="margin-bottom: 0;">Size özel pazarlama stratejisi önerileri sunacağız</li>
              </ul>
            </div>

            <!-- İletişim Bilgileri -->
            <div style="background: #f7fafc; border: 1px solid #e2e8f0; border-radius: 12px; padding: 32px; text-align: center;">
              <h3 style="color: #2d3748; margin: 0 0 24px; font-size: 20px; font-weight: 600;">Hızlı İletişim</h3>
              <div style="display: flex; justify-content: center; gap: 16px; flex-wrap: wrap;">
                <a href="https://wa.me/905456642302" style="display: inline-flex; align-items: center; background: #25d366; color: white; padding: 16px 24px; border-radius: 12px; text-decoration: none; font-weight: 600; transition: all 0.3s; box-shadow: 0 4px 12px rgba(37, 211, 102, 0.3);">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="margin-right: 8px;">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                  </svg>
                  WhatsApp
                </a>
                <a href="tel:+905456642302" style="display: inline-flex; align-items: center; background: #667eea; color: white; padding: 16px 24px; border-radius: 12px; text-decoration: none; font-weight: 600; transition: all 0.3s; box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="margin-right: 8px;">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.79 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                  Hemen Ara
                </a>
              </div>
            </div>
          </div>

          <!-- Footer -->
          <div style="background: #2d3748; padding: 32px; text-align: center;">
            <div style="margin-bottom: 24px;">
              <svg width="140" height="32" viewBox="0 0 140 32" fill="none" style="margin: 0 auto;">
                <defs>
                  <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" style="stop-color:#667eea;stop-opacity:1" />
                    <stop offset="100%" style="stop-color:#764ba2;stop-opacity:1" />
                  </linearGradient>
                </defs>
                <text x="70" y="22" text-anchor="middle" font-family="Arial, sans-serif" font-size="20" font-weight="700" fill="url(#logoGradient)">NovaGraph</text>
                <text x="70" y="30" text-anchor="middle" font-family="Arial, sans-serif" font-size="8" font-weight="400" fill="#a0aec0">TEKNOLOJİ A.Ş.</text>
              </svg>
            </div>
            <p style="color: #a0aec0; margin: 0 0 12px; font-size: 14px;">
              Bu e-posta NovaGraph web sitesi üzerinden otomatik olarak gönderilmiştir.
            </p>
            <p style="color: #718096; margin: 0; font-size: 12px;">
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
