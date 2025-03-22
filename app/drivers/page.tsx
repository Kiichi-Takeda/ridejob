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

export default function Drivers() {
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
                  タクシードライバー専門求人サービス
                </div>
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                  あなたに合った<br />
                  <span className="text-primary">理想の働き方</span>を見つける
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  未経験OK、二種免許取得サポートあり。あなたのライフスタイルに合わせた柔軟な働き方を実現します。
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="rounded-full">
                    <span>求人を探す</span>
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                  <Button variant="outline" size="lg" className="rounded-full">
                    適性診断を受ける
                  </Button>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white rounded-xl p-6 shadow-sm border border-border/50 flex flex-col h-full">
                  <h3 className="text-xl font-semibold mb-2">高収入</h3>
                  <p className="text-muted-foreground text-sm">未経験でも月収28万円〜、経験者は35万円以上も可能</p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-sm border border-border/50 flex flex-col h-full">
                  <h3 className="text-xl font-semibold mb-2">柔軟な勤務</h3>
                  <p className="text-muted-foreground text-sm">日勤、夜勤、隔日勤務など選べる勤務形態</p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-sm border border-border/50 flex flex-col h-full">
                  <h3 className="text-xl font-semibold mb-2">資格取得支援</h3>
                  <p className="text-muted-foreground text-sm">二種免許取得費用の補助や教習所の紹介</p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-sm border border-border/50 flex flex-col h-full">
                  <Briefcase className="w-10 h-10 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">充実の福利厚生</h3>
                  <p className="text-muted-foreground text-sm">社会保険完備、有給休暇、各種手当あり</p>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Types of Jobs */}
        <section className="py-20 bg-background">
          <Container>
            <SectionTitle
              subtitle="求人種類"
              title="あなたに合った働き方を選べます"
              description="RIDE JOBでは多様な働き方に対応した求人を豊富に取り揃えています。ライフスタイルや希望に合わせて選べます。"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
              {[...jobTypes].map((jobType, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-border/50 h-full"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{jobType.title}</h3>
                  <ul className="space-y-2">
                    {jobType.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center text-primary text-xs">
                          ✓
                        </div>
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 pt-4 border-t border-border/50">
                    <Button variant="outline" className="w-full rounded-full">
                      <a href="/jobs">求人を見る</a>
                    </Button>
                  </div>
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
                新しいキャリアをスタートしませんか？
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                タクシードライバーとして、あなたらしい働き方を実現しましょう。
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button size="lg" className="rounded-full">
                  <span>今すぐ応募する</span>
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button variant="outline" size="lg" className="rounded-full">
                  詳しい情報を見る
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

const jobTypes = [
  {
    title: "日勤専属",
    features: [
      "朝〜夕方の勤務",
      "プライベートの時間を確保",
      "家族との時間を大切にしたい方に",
    ],
  },
  {
    title: "夜勤専属",
    features: [
      "夕方〜朝の勤務",
      "日中の時間を有効活用",
      "高収入を目指したい方に",
    ],
  },
  {
    title: "隔日勤務",
    features: [
      "24時間勤務・24時間休み",
      "まとまった休日を確保",
      "副業や趣味との両立に",
    ],
  },
  {
    title: "女性専用",
    icon: Briefcase,
    features: [
      "女性が働きやすい環境",
      "時短勤務・シフト制あり",
      "女性スタッフによるサポート",
    ],
  },
  {
    title: "シニア向け",
    icon: Briefcase,
    features: [
      "60代・70代活躍中",
      "体力に合わせた勤務形態",
      "経験・スキルを活かせる",
    ],
  },
  {
    title: "未経験歓迎",
    features: [
      "充実した研修制度",
      "二種免許取得サポート",
      "先輩ドライバーによる指導",
    ],
  },
];
