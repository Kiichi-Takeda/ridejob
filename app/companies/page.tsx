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

export default function CompaniesPage() {
  const benefits = [
    {
      icon: Building,
      title: "採用コストの削減",
      description:
        "AIによる最適マッチングで採用効率を向上させ、採用コストを大幅に削減します。",
    },
    {
      icon: Shield,
      title: "定着率の向上",
      description:
        "適性と相性を重視したマッチングにより、入社後の定着率が向上します。",
    },
    {
      icon: Users,
      title: "質の高い人材確保",
      description:
        "豊富な応募者データベースから、御社に最適な人材をご紹介します。",
    },
    {
      icon: PieChart,
      title: "データに基づく採用",
      description:
        "業界特化型のデータ分析で、効果的な採用戦略を立案します。",
    },
    {
      icon: Briefcase,
      title: "採用業務の効率化",
      description:
        "応募者管理から面接調整まで、採用業務を一元管理できます。",
    },
    {
      icon: MessageSquare,
      title: "専任コンサルタント",
      description:
        "業界に精通したコンサルタントが、御社の採用活動を全面的にサポートします。",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-b from-primary/5 to-background">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                  最適なドライバーで<br />
                  <span className="text-primary">事業効率を最大化</span>
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  AIを活用したマッチング技術で、あなたの会社に最適なドライバーをご紹介します。採用コストの削減と定着率の向上を実現します。
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="rounded-full">
                    <span>無料相談を予約する</span>
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                  <Button variant="outline" size="lg" className="rounded-full">
                    サービス資料をダウンロード
                  </Button>
                </div>
              </div>
              <div className="relative rounded-2xl bg-white shadow-lg p-8 border border-border">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-background/0 rounded-2xl"></div>
                <div className="relative">
                  <h3 className="text-2xl font-bold mb-6 text-center">導入実績</h3>
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center">
                      <p className="text-4xl font-bold text-primary mb-2">150+</p>
                      <p className="text-sm text-muted-foreground">導入企業数</p>
                    </div>
                    <div className="text-center">
                      <p className="text-4xl font-bold text-primary mb-2">92%</p>
                      <p className="text-sm text-muted-foreground">採用成功率</p>
                    </div>
                    <div className="text-center">
                      <p className="text-4xl font-bold text-primary mb-2">3.5倍</p>
                      <p className="text-sm text-muted-foreground">応募数増加</p>
                    </div>
                    <div className="text-center">
                      <p className="text-4xl font-bold text-primary mb-2">85%</p>
                      <p className="text-sm text-muted-foreground">定着率</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-background">
          <Container>
            <SectionTitle
              subtitle="企業様へのメリット"
              title="RIDE JOBで採用課題を解決"
              description="タクシー業界特有の採用課題に対応した、効果的なソリューションを提供します。"
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-border/50 h-full"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <benefit.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary/5 border-y border-primary/10">
          <Container>
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                最適なドライバー採用を始めましょう
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                初回相談は無料です。RIDE JOBが御社の採用課題を解決します。
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button size="lg" className="rounded-full">
                  <span>無料相談を予約する</span>
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button variant="outline" size="lg" className="rounded-full">
                  サービス資料をダウンロード
                </Button>
              </div>
            </div>
          </Container>
        </section>
      </main>

      <Footer />
    </div>
  );
}