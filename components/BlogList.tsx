'use client'

import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Calendar, Clock, User } from 'lucide-react'

const blogPosts = [
  {
    id: 'web-tasarim-10-altin-kural',
    title: 'Web Tasarımda 10 Altın Kural',
    excerpt: 'Modern web tasarımında başarılı olmak için uygulamanız gereken temel prensipler ve en iyi uygulamalar.',
    category: 'Web Tasarım',
    readTime: '8 dk',
    author: 'NovaGraph Ekibi',
    date: '2024-01-15',
    image: '/blog-covers/web-tasarim-10-altin-kural.webp',
    tags: ['Web Tasarım', 'UX/UI', 'Kullanıcı Deneyimi']
  },
  {
    id: 'dijital-pazarlama-baslangic-rehberi',
    title: 'Dijital Pazarlama Başlangıç Rehberi',
    excerpt: 'Dijital pazarlamaya yeni başlayanlar için kapsamlı rehber: strateji, araçlar ve başarı hikayeleri.',
    category: 'Dijital Pazarlama',
    readTime: '12 dk',
    author: 'NovaGraph Ekibi',
    date: '2024-01-10',
    image: '/blog-covers/dijital-pazarlama-baslangic-rehberi.webp',
    tags: ['Dijital Pazarlama', 'Strateji', 'Sosyal Medya']
  },
  {
    id: 'seo-ne-kadar-etkili',
    title: 'SEO ne kadar etkili olur?',
    excerpt: 'SEO\'nun işletmeniz için gerçek değerini ve nasıl ölçülebilir sonuçlar elde edebileceğinizi keşfedin.',
    category: 'SEO',
    readTime: '10 dk',
    author: 'NovaGraph Ekibi',
    date: '2024-01-08',
    image: '/blog-covers/seo-ne-kadar-etkili.webp',
    tags: ['SEO', 'Arama Motoru', 'Dijital Pazarlama']
  },
  {
    id: 'bulut-yedekleme-nasil-yapilir',
    title: 'Bulut Yedekleme Nasıl Yapılır?',
    excerpt: 'Verilerinizi güvende tutmak için bulut yedekleme stratejileri ve en iyi uygulamalar.',
    category: 'IT Çözümleri',
    readTime: '15 dk',
    author: 'NovaGraph Ekibi',
    date: '2024-01-05',
    image: '/blog-covers/bulut-yedekleme-nasil-yapilir.webp',
    tags: ['Bulut Yedekleme', 'Veri Güvenliği', 'IT']
  },
  {
    id: 'ag-guvenligi-nasil-saglanir',
    title: 'Ağ Güvenliği Nasıl Sağlanır?',
    excerpt: 'Kurumsal ağ güvenliği için gerekli adımlar, tehditler ve korunma yöntemleri.',
    category: 'IT Çözümleri',
    readTime: '18 dk',
    author: 'NovaGraph Ekibi',
    date: '2024-01-03',
    image: '/blog-covers/ag-guvenligi-nasil-saglanir.webp',
    tags: ['Ağ Güvenliği', 'Siber Güvenlik', 'IT']
  }
]

const categoryColors = {
  'Web Tasarım': 'bg-blue-100 text-blue-800',
  'Dijital Pazarlama': 'bg-blue-100 text-blue-800',
  'SEO': 'bg-blue-100 text-blue-800',
  'IT Çözümleri': 'bg-blue-100 text-blue-800'
}

export default function BlogList() {
  return (
    <div className="max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Son Blog Yazıları
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Uzman ekibimiz tarafından hazırlanan güncel makaleler ve rehberler ile 
          dijital dünyada bir adım önde olun.
        </p>
      </div>

      {/* Blog Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <Card key={post.id} className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
            <div className="aspect-video bg-gray-200 overflow-hidden">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <CardHeader className="pb-3">
              <div className="flex items-center gap-2 mb-3">
                <Badge className={categoryColors[post.category as keyof typeof categoryColors]}>
                  {post.category}
                </Badge>
              </div>
              <CardTitle className="text-xl group-hover:text-blue-600 transition-colors duration-300">
                <Link href={`/blog/${post.id}`}>
                  {post.title}
                </Link>
              </CardTitle>
              <CardDescription className="text-gray-600 line-clamp-3">
                {post.excerpt}
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                <div className="flex items-center gap-1">
                  <User className="w-4 h-4" />
                  {post.author}
                </div>
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  {new Date(post.date).toLocaleDateString('tr-TR')}
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1 text-sm text-gray-500">
                  <Clock className="w-4 h-4" />
                  {post.readTime}
                </div>
                <Link 
                  href={`/blog/${post.id}`}
                  className="text-blue-600 hover:text-blue-800 font-medium text-sm group-hover:underline"
                >
                  Devamını Oku →
                </Link>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Newsletter Signup */}
      <div className="mt-16 bg-white rounded-2xl shadow-lg p-8 text-center">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          Güncel Kalın
        </h3>
        <p className="text-gray-600 mb-6 max-w-md mx-auto">
          En son blog yazılarımızdan ve dijital dünya güncellemelerinden haberdar olun.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <input
            type="email"
            placeholder="E-posta adresiniz"
            className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300 font-medium">
            Abone Ol
          </button>
        </div>
      </div>
    </div>
  )
}
