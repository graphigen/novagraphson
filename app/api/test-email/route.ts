import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { mailConfig, mailRecipients } from '@/lib/environment';

// Mail transporter konfigürasyonu
const transporter = nodemailer.createTransport(mailConfig);

export async function POST(request: NextRequest) {
  try {
    // Test mail içeriği
    const mailOptions = {
      from: mailConfig.auth.user,
      to: mailRecipients.general,
      subject: 'SMTP Test Mail - NovaGraph',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2563eb; border-bottom: 2px solid #2563eb; padding-bottom: 10px;">
            SMTP Test Mail - NovaGraph
          </h2>
          
          <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #1e293b; margin-top: 0;">Test Bilgileri:</h3>
            <p><strong>Gönderen:</strong> ${mailConfig.auth.user}</p>
            <p><strong>Alıcı:</strong> ${mailRecipients.general}</p>
            <p><strong>SMTP Host:</strong> ${mailConfig.host}</p>
            <p><strong>SMTP Port:</strong> ${mailConfig.port}</p>
            <p><strong>Güvenli:</strong> ${mailConfig.secure ? 'Evet' : 'Hayır'}</p>
            <p><strong>Tarih:</strong> ${new Date().toLocaleString('tr-TR')}</p>
          </div>
          
          <div style="background: #e2e8f0; padding: 15px; border-radius: 8px; text-align: center;">
            <p style="margin: 0; color: #64748b; font-size: 14px;">
              Bu mail NovaGraph web sitesi SMTP testi için gönderilmiştir.
            </p>
          </div>
        </div>
      `
    };

    // Mail gönderme
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ 
      success: true, 
      message: 'Test mail başarıyla gönderildi',
      config: {
        host: mailConfig.host,
        port: mailConfig.port,
        secure: mailConfig.secure,
        user: mailConfig.auth.user,
        recipient: mailRecipients.general
      }
    });

  } catch (error) {
    console.error('Test mail gönderme hatası:', error);
    return NextResponse.json(
      { 
        success: false, 
        message: 'Test mail gönderilirken bir hata oluştu',
        error: error instanceof Error ? error.message : 'Bilinmeyen hata',
        config: {
          host: mailConfig.host,
          port: mailConfig.port,
          secure: mailConfig.secure,
          user: mailConfig.auth.user,
          recipient: mailRecipients.general
        }
      },
      { status: 500 }
    );
  }
}
