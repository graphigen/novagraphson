"use client"

import { motion } from "framer-motion"
import { Users, CheckCircle, ArrowRight, Globe, Shield, TrendingUp } from "lucide-react"
import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { useContactForm } from "@/contexts/ContactFormContext"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CTABanner } from "@/components/CTABanner"
import Link from "next/link"
import Image from "next/image"
import Head from "next/head"

export default function IsOrtaklariPage() {
  const { openForm } = useContactForm()

  const partners = [
    {
      name: "Ahrefs",
      description: "SEO ve dijital pazarlama araçları",
      logo: "/partners/ahrefs-partner.png",
      color: "blue",
      href: "/is-ortaklari/ahrefs",
      features: ["SEO Analizi", "Rakip Analizi", "Anahtar Kelime Araştırması", "Site Denetimi"]
    },
    {
      name: "Amazon AWS",
      description: "Bulut altyapısı ve web hizmetleri",
      logo: "/partners/amazon-partner.png",
      color: "orange",
      href: "/is-ortaklari/amazon-aws",
      features: ["EC2", "S3", "RDS", "CloudFront"]
    },
    {
      name: "Azure",
      description: "Microsoft bulut platformu ve hizmetleri",
      logo: "/partners/azura-partner.svg.png",
      color: "blue",
      href: "/is-ortaklari/azure",
      features: ["Virtual Machines", "App Services", "Azure SQL", "Azure Functions"]
    },
    {
      name: "Cloudflare",
      description: "Web güvenliği ve performans çözümleri",
      logo: "/partners/cloudflare-partner.svg.png",
      color: "orange",
      href: "/is-ortaklari/cloudflare",
      features: ["DDoS Koruması", "CDN", "WAF", "DNS Hizmetleri"]
    },
    {
      name: "Google Analytics",
      description: "Web sitesi analitik ve raporlama",
      logo: "/partners/google-analytics-partner.webp",
      color: "blue",
      href: "/is-ortaklari/google-analytics",
      features: ["Traffic Analizi", "Conversion Tracking", "Real-time Reports", "E-commerce Analytics"]
    },
    {
      name: "Google Cloud",
      description: "Google bulut platformu ve hizmetleri",
      logo: "/partners/googlecloud-partner.png",
      color: "blue",
      href: "/is-ortaklari/google-cloud",
      features: ["Compute Engine", "Cloud Storage", "BigQuery", "Cloud Functions"]
    },
    {
      name: "iyzico",
      description: "Türkiye'nin önde gelen ödeme çözümleri",
      logo: "/partners/iyzico-partner.svg.png",
      color: "green",
      href: "/is-ortaklari/iyzico",
      features: ["Online Ödeme", "Taksitli Ödeme", "B2B Ödeme", "Mobil Ödeme"]
    },
    {
      name: "Salesforce",
      description: "CRM ve iş uygulamaları platformu",
      logo: "/partners/saleforce-partner.png",
      color: "blue",
      href: "/is-ortaklari/salesforce",
      features: ["Sales Cloud", "Service Cloud", "Marketing Cloud", "Platform"]
    },
    {
      name: "SEMrush",
      description: "SEO ve dijital pazarlama araçları",
      logo: "/partners/semrush-partner.png",
      color: "orange",
      href: "/is-ortaklari/semrush",
      features: ["Keyword Research", "Competitive Analysis", "Site Audit", "Ranking Tracking"]
    },
    {
      name: "SimilarWeb",
      description: "Dijital istihbarat ve analitik platformu",
      logo: "/partners/smilarweb-partner.svg",
      color: "purple",
      href: "/is-ortaklari/similarweb",
      features: ["Traffic Analysis", "Competitive Intelligence", "Market Research", "Digital Insights"]
    },
    {
      name: "Stripe",
      description: "Güvenli ödeme işleme platformu",
      logo: "/partners/stripe-partner.svg.png",
      color: "purple",
      href: "/is-ortaklari/stripe",
      features: ["Payment Processing", "Subscription Billing", "Marketplace Payments", "International Payments"]
    },
    {
      name: "Unica",
      description: "Müşteri deneyimi ve pazarlama otomasyonu",
      logo: "/partners/unica-partner.png",
      color: "blue",
      href: "/is-ortaklari/unica",
      features: ["Marketing Automation", "Customer Analytics", "Personalization", "Campaign Management"]
    },
    {
      name: "Zendesk",
      description: "Müşteri hizmetleri ve destek platformu",
      logo: "/partners/zendesk-partner.png.webp",
      color: "green",
      href: "/is-ortaklari/zendesk",
      features: ["Help Desk", "Live Chat", "Customer Support", "Knowledge Base"]
    },
    {
      name: "Zoho",
      description: "İş uygulamaları ve CRM çözümleri",
      logo: "/partners/zoho-partner.svg.png",
      color: "blue",
      href: "/is-ortaklari/zoho",
      features: ["CRM", "E-posta", "Proje Yönetimi", "İş Uygulamaları"]
    },
    {
      name: "Bitrix24",
      description: "İş yönetimi ve CRM platformu",
      logo: "/partners/birtix24-partner.png",
      color: "green",
      href: "/is-ortaklari/bitrix24",
      features: ["CRM", "İletişim", "Proje Yönetimi", "Satış"]
    },
    {
      name: "JivoChat",
      description: "Canlı destek ve müşteri iletişimi",
      logo: "/partners/jivochat-parner.png",
      color: "purple",
      href: "/is-ortaklari/jivochat",
      features: ["Canlı Chat", "Telefon", "Ekip Yönetimi", "Analitik"]
    },
    {
      name: "PayPal",
      description: "Güvenli ödeme çözümleri",
      logo: "/partners/paypal-partner.png",
      color: "blue",
      href: "/is-ortaklari/paypal",
      features: ["Checkout", "Business", "Express Checkout", "Invoicing"]
    }
  ]

  const benefits = [
    {
      icon: Globe,
      title: "Global Erişim",
      description: "Dünya çapında tanınmış ve güvenilir iş ortakları"
    },
    {
      icon: Shield,
      title: "Güvenilirlik",
      description: "Endüstri standardı güvenlik ve kalite garantisi"
    },
    {
      icon: TrendingUp,
      title: "Performans",
      description: "Yüksek performanslı ve ölçeklenebilir çözümler"
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>NovaGraph - İş Ortaklarımız</title>
        <meta name="description" content="NovaGraph'ın güvenilir iş ortakları ile müşterilerinize en iyi hizmeti sunuyoruz. SEO, bulut altyapısı, ödeme çözümleri ve daha fazlası." />
        <meta name="keywords" content="iş ortakları, NovaGraph, partner, güvenilir, hizmet, çözümler" />
      </Head>
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-blue-600 to-blue-800 overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center justify-center space-x-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6 lg:mb-8 shadow-sm">
              <Users className="w-4 h-4 flex-shrink-0" />
              <span>İş Ortaklarımız</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-gray-900 mb-4 lg:mb-6 leading-tight px-4">
              Güçlü <span className="text-blue-600">İş Ortaklarımız</span> ile Hizmetinizdeyiz
            </h1>
            
            {/* Description */}
            <p className="text-lg sm:text-xl text-gray-600 mb-8 lg:mb-10 max-w-2xl mx-auto px-4">
              Dünyanın önde gelen teknoloji şirketleri ile işbirliği yaparak müşterilerimize en kaliteli 
              ve güncel çözümleri sunuyoruz.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4">
              <Button 
                size="lg" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-auto"
                onClick={() => openForm("İş Ortaklığı Hizmetleri")}
              >
                İş Ortaklığı Danışmanlığı Al
                <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              İş Ortaklarımız
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Müşterilerimizin ihtiyaçlarını karşılamak için seçtiğimiz güvenilir iş ortaklarımız.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {partners.map((partner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <Link href={partner.href}>
                  <Card className="h-full hover:shadow-xl transition-all duration-300 border-gray-200 hover:border-blue-300">
                    <CardHeader className="text-center">
                      <div className="w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                        <Image
                          src={partner.logo}
                          alt={`${partner.name} logo`}
                          width={80}
                          height={80}
                          className="object-contain max-w-full max-h-full"
                        />
                      </div>
                      <CardTitle className="text-xl font-bold text-gray-900">
                        {partner.name}
                      </CardTitle>
                      <CardDescription className="text-gray-600">
                        {partner.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <h4 className="font-semibold text-gray-900 mb-2">Öne Çıkan Özellikler</h4>
                        <ul className="space-y-2">
                          {partner.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center gap-2">
                              <CheckCircle className="w-4 h-4 text-blue-500 flex-shrink-0" />
                              <span className="text-gray-700 text-sm">{feature}</span>
                            </li>
                          ))}
                        </ul>
                        <div className="pt-4">
                          <Button 
                            variant="outline" 
                            className="w-full group-hover:bg-blue-50 group-hover:border-blue-300 transition-colors"
                          >
                            Detayları İncele
                            <ArrowRight className="ml-2 w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Neden İş Ortaklarımızı Seçiyoruz?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Müşterilerimize en iyi hizmeti sunmak için seçtiğimiz iş ortaklarımızın avantajları.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-600 transition-all duration-300 shadow-lg">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTABanner />

      <Footer />
    </div>
  )
}
