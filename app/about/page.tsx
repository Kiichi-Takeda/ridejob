import Header from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { Container } from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import SectionTitle from "@/components/ui/SectionTitle";
import {
  ArrowRight,
  Building,
  Shield,
  Users,
  PieChart,
  Briefcase,
  MessageSquare,
} from "lucide-react";
export default function About() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-b from-primary/5 to-background">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-block px-3 py-1 mb-6 text-xs font-medium tracking-wider text-primary uppercase rounded-full bg-primary/10">
                  会社情報
                </div>
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                  タクシー業界の<br />
                  <span className="text-primary">未来を創る</span>
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  RIDE JOBは、AIテクノロジーを活用して、タクシー業界の採用課題を解決し、ドライバーと企業をつなぐマッチングプラットフォームです。
                </p>
              </div>
              <div className="bg-white rounded-2xl shadow-lg p-8 border border-border relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 transform translate-x-16 -translate-y-16 bg-primary/10 rounded-full"></div>
                <div className="absolute bottom-0 left-0 w-40 h-40 transform -translate-x-20 translate-y-20 bg-primary/5 rounded-full"></div>
                <div className="relative">
                  <h3 className="text-2xl font-bold mb-6">企業概要</h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 mr-4">
                      </div>
                      <div>
                        <h4 className="font-medium">企業名</h4>
                        <p className="text-muted-foreground">株式会社RIDE JOB</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 mr-4">
                      </div>
                      <div>
                        <h4 className="font-medium">所在地</h4>
                        <p className="text-muted-foreground">〒150-0002 東京都渋谷区渋谷3-6-3 渋谷363ビル 10F</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 mr-4">
                      </div>
                      <div>
                        <h4 className="font-medium">設立</h4>
                        <p className="text-muted-foreground">2020年4月1日</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 mr-4">
                        <Users className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-medium">従業員数</h4>
                        <p className="text-muted-foreground">65名（2023年7月現在）</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>
        
        {/* Mission & Vision */}
        <section className="py-20 bg-background">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="grid grid-cols-2 gap-6">
                  {[
                    {
                      title: "実績",
                      value: "150+",
                      label: "導入企業数",
                    },
                    {
                      icon: Users,
                      title: "採用成功",
                      value: "2,500+",
                      label: "マッチング件数",
                    },
                    {
                      title: "効率",
                      value: "65%",
                      label: "採用コスト削減率",
                    },
                    {
                      title: "満足度",
                      value: "92%",
                      label: "顧客満足度",
                    },
                  ].map((stat, index) => (
                    <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-border/50 h-full">
                      <h3 className="text-lg font-semibold mb-1">{stat.title}</h3>
                      <p className="text-3xl font-bold text-primary mb-1">{stat.value}</p>
                      <p className="text-sm text-muted-foreground">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <SectionTitle
                  subtitle="ミッション＆ビジョン"
                  title="私たちの目指す未来"
                  description=""
                />
                
                <div className="space-y-6 mt-8">
                  <div className="bg-white rounded-xl p-6 shadow-sm border border-primary/20">
                    <h3 className="text-xl font-semibold mb-3 flex items-center">
                      ミッション
                    </h3>
                    <p className="text-muted-foreground">
                      タクシー業界における「人」と「企業」の最適なマッチングを実現し、業界全体の活性化と持続可能な成長に貢献する。
                    </p>
                  </div>
                  
                  <div className="bg-white rounded-xl p-6 shadow-sm border border-primary/20">
                    <h3 className="text-xl font-semibold mb-3 flex items-center">
                      ビジョン
                    </h3>
                    <p className="text-muted-foreground">
                      AIを活用した革新的なマッチングプラットフォームにより、タクシードライバーのキャリア満足度を高め、企業の採用課題を解決する、業界No.1のエコシステムを構築する。
                    </p>
                  </div>
                  
                  <div className="bg-white rounded-xl p-6 shadow-sm border border-primary/20">
                    <h3 className="text-xl font-semibold mb-3 flex items-center">
                      バリュー
                    </h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-center gap-2">
                        <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center text-primary text-xs">
                          ✓
                        </div>
                        <span>誠実・透明性：すべてのステークホルダーに対して正直で開かれた関係を築く</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center text-primary text-xs">
                          ✓
                        </div>
                        <span>革新・挑戦：常に新しいアイデアと技術を追求し、業界の変革を牽引する</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center text-primary text-xs">
                          ✓
                        </div>
                        <span>共創・協働：ドライバー、企業、社会との共創により、共に成長する</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>
        
        {/* Contact Section */}
        <section className="py-20 bg-primary/5 border-y border-primary/10">
          <Container>
            <SectionTitle
              subtitle="お問い合わせ"
              title="ご質問・お問い合わせはこちら"
              description="サービスについてのご質問や、導入に関するお問い合わせは、以下の連絡先までお気軽にご連絡ください。"
            />
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 max-w-4xl mx-auto">
              <div className="bg-white rounded-xl p-6 shadow-sm border border-border/50 text-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                </div>
                <h3 className="text-lg font-semibold mb-2">お電話</h3>
                <p className="text-muted-foreground">03-1234-5678</p>
                <p className="text-sm text-muted-foreground mt-1">（平日 9:00-18:00）</p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-sm border border-border/50 text-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                </div>
                <h3 className="text-lg font-semibold mb-2">メール</h3>
                <p className="text-muted-foreground">info@ridejob.example.com</p>
                <p className="text-sm text-muted-foreground mt-1">（24時間受付）</p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-sm border border-border/50 text-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                </div>
                <h3 className="text-lg font-semibold mb-2">所在地</h3>
                <p className="text-muted-foreground">渋谷区渋谷3-6-3</p>
                <p className="text-sm text-muted-foreground mt-1">渋谷363ビル 10F</p>
              </div>
            </div>
            
            <div className="mt-12 text-center">
              <Button size="lg" className="rounded-full">
                お問い合わせフォーム
              </Button>
            </div>
          </Container>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
