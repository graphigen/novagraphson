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
    switch (formType) {
      case 'popup':
        subject = 'Yeni Popup İletişim Formu - NovaGraph';
        break;
      case 'contact':
        subject = 'Yeni İletişim Formu - NovaGraph';
        break;
      case 'marketing':
        subject = 'Yeni Pazarlama Strateji Başvurusu - NovaGraph';
        break;
      default:
        subject = 'Yeni Form Başvurusu - NovaGraph';
    }

    // Mail içeriği
    const mailOptions = {
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

    // Mail gönderme
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ 
      success: true, 
      message: 'E-posta başarıyla gönderildi' 
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
