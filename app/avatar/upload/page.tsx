"use client"

import type { PutBlobResult } from '@vercel/blob';
import { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Upload, CheckCircle, AlertCircle } from 'lucide-react';

export default function AvatarUploadPage() {
  const inputFileRef = useRef<HTMLInputElement>(null);
  const [blob, setBlob] = useState<PutBlobResult | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const handleUpload = async (event: React.FormEvent) => {
    event.preventDefault();
    setError(null);
    setIsUploading(true);

    try {
      if (!inputFileRef.current?.files) {
        throw new Error("Dosya seçilmedi");
      }

      const file = inputFileRef.current.files[0];
      
      // File size check (4.5MB limit for server uploads)
      if (file.size > 4.5 * 1024 * 1024) {
        throw new Error("Dosya boyutu 4.5MB'dan küçük olmalıdır");
      }

      const response = await fetch(
        `/api/avatar/upload?filename=${file.name}`,
        {
          method: 'POST',
          body: file,
        },
      );

      if (!response.ok) {
        throw new Error(`Yükleme hatası: ${response.statusText}`);
      }

      const newBlob = (await response.json()) as PutBlobResult;
      setBlob(newBlob);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Bilinmeyen bir hata oluştu');
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-2xl">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Upload className="h-5 w-5" />
            Avatar Yükle
          </CardTitle>
          <CardDescription>
            Profil fotoğrafınızı yükleyin. JPEG, PNG ve WebP formatları desteklenir.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleUpload} className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="file" className="text-sm font-medium">
                Dosya Seçin
              </label>
              <Input
                id="file"
                name="file"
                ref={inputFileRef}
                type="file"
                accept="image/jpeg, image/png, image/webp"
                required
                className="cursor-pointer"
              />
              <p className="text-xs text-muted-foreground">
                Maksimum dosya boyutu: 4.5MB
              </p>
            </div>

            <Button 
              type="submit" 
              disabled={isUploading}
              className="w-full"
            >
              {isUploading ? 'Yükleniyor...' : 'Yükle'}
            </Button>
          </form>

          {error && (
            <Alert variant="destructive" className="mt-4">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          {blob && (
            <Alert className="mt-4">
              <CheckCircle className="h-4 w-4" />
              <AlertDescription>
                Dosya başarıyla yüklendi!{' '}
                <a 
                  href={blob.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  Görüntüle
                </a>
              </AlertDescription>
            </Alert>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
