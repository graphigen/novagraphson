import { put } from '@vercel/blob';
import { NextResponse } from 'next/server';

export async function POST(request: Request): Promise<NextResponse> {
  try {
    const { searchParams } = new URL(request.url);
    const filename = searchParams.get('filename');

    if (!filename) {
      return NextResponse.json(
        { error: 'Dosya adı gerekli' },
        { status: 400 }
      );
    }

    // Check if request has a body
    if (!request.body) {
      return NextResponse.json(
        { error: 'Dosya içeriği gerekli' },
        { status: 400 }
      );
    }

    // Validate file extension
    const allowedExtensions = ['.jpg', '.jpeg', '.png', '.webp'];
    const fileExtension = filename.toLowerCase().substring(filename.lastIndexOf('.'));
    
    if (!allowedExtensions.includes(fileExtension)) {
      return NextResponse.json(
        { error: 'Sadece JPEG, PNG ve WebP dosyaları desteklenir' },
        { status: 400 }
      );
    }

    // Upload to Vercel Blob
    const blob = await put(filename, request.body, {
      access: 'public',
      addRandomSuffix: true, // Add random suffix to prevent filename conflicts
    });

    return NextResponse.json({
      success: true,
      ...blob,
      message: 'Dosya başarıyla yüklendi'
    });

  } catch (error) {
    console.error('Avatar upload error:', error);
    
    return NextResponse.json(
      { 
        error: 'Dosya yükleme hatası',
        details: error instanceof Error ? error.message : 'Bilinmeyen hata'
      },
      { status: 500 }
    );
  }
}

// The next lines are required for Pages API Routes only
// export const config = {
//   api: {
//     bodyParser: false,
//   },
// };
