import { Metadata } from 'next'
import BlogList from '@/components/BlogList'

export const metadata: Metadata = {
  title: 'Blog - NovaGraph | Web Tasarım, Dijital Pazarlama ve IT Çözümleri',
  description: 'Web tasarım, dijital pazarlama, SEO, bulut yedekleme ve ağ güvenliği hakkında detaylı rehberler ve makaleler.',
  keywords: 'blog, web tasarım, dijital pazarlama, SEO, bulut yedekleme, ağ güvenliği, rehber',
}

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              NovaGraph Blog
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8">
              Web tasarım, dijital pazarlama ve IT çözümleri hakkında 
              uzman rehberleri ve güncel bilgiler
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-blue-700 px-4 py-2 rounded-full text-sm">
                Web Tasarım
              </div>
              <div className="bg-blue-700 px-4 py-2 rounded-full text-sm">
                Dijital Pazarlama
              </div>
              <div className="bg-blue-700 px-4 py-2 rounded-full text-sm">
                SEO
              </div>
              <div className="bg-blue-700 px-4 py-2 rounded-full text-sm">
                IT Çözümleri
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <BlogList />
        </div>
      </section>
    </div>
  )
}
