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

const blogPosts = [
  {
    id: 1,
    title: "タクシードライバーに必要な二種免許の取得方法と費用",
    excerpt: "タクシードライバーになるために必要な二種免許の取得方法、費用、期間についての完全ガイド。企業による取得支援制度も紹介します。",
    category: "ガイド",
    author: "山田 健太",
    date: "2023-06-15",
    readTime: "8分",
    image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    title: "タクシードライバーの一日：ベテランドライバーの1日に密着",
    excerpt: "20年のキャリアを持つベテランタクシードライバーの1日を追跡。効率的な営業方法や顧客対応のコツを紹介します。",
    category: "インタビュー",
    author: "佐藤 美咲",
    date: "2023-05-28",
    readTime: "10分",
    image: "https://images.unsplash.com/photo-1519451241324-20b4ea2c4220?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    title: "タクシー業界の最新テクノロジー動向：AIとEVの影響",
    excerpt: "タクシー業界に変革をもたらす最新テクノロジー。自動運転、電気自動車、AIディスパッチシステムなどの最新動向を解説します。",
    category: "ニュース",
    author: "鈴木 隆",
    date: "2023-05-10",
    readTime: "7分",
    image: "https://images.unsplash.com/photo-1530949555590-c089787fdd24?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    title: "女性タクシードライバーが増加中：業界の変化と新たな可能性",
    excerpt: "増加する女性タクシードライバーの現状と課題。女性が活躍できる職場環境づくりの取り組みや実際に働く女性ドライバーの声を紹介します。",
    category: "特集",
    author: "田中 由美",
    date: "2023-04-22",
    readTime: "9分",
    image: "https://images.unsplash.com/photo-1597957602900-8964b1689b7f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 5,
    title: "タクシードライバーの収入を最大化する5つのコツ",
    excerpt: "効率的な営業方法、お客様とのコミュニケーション術、リピーター獲得方法など、収入アップにつながる実践的なテクニックを紹介します。",
    category: "アドバイス",
    author: "高橋 誠",
    date: "2023-04-05",
    readTime: "6分",
    image: "https://images.unsplash.com/photo-1580397581415-6eaaae414819?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 6,
    title: "定年後のセカンドキャリア：シニアドライバーの成功事例",
    excerpt: "定年退職後にタクシードライバーとして新たなキャリアをスタートさせた方々の体験談。年齢を強みに変える働き方を紹介します。",
    category: "ケーススタディ",
    author: "伊藤 和男",
    date: "2023-03-20",
    readTime: "8分",
    image: "https://images.unsplash.com/photo-1536321115970-5dfa13356211?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
];

const categories = [
  "すべて",
  "ガイド",
  "インタビュー",
  "ニュース",
  "特集",
  "アドバイス",
  "ケーススタディ",
];

export default function Blog() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-b from-primary/5 to-background">
          <Container>
            <SectionTitle
              subtitle="お役立ち情報"
              title="タクシードライバーのためのブログ"
              description="タクシー業界の最新情報や、ドライバーとして働くためのヒント、成功事例などを紹介します。"
            />
            
            <div className="flex flex-wrap justify-center gap-2 mt-8">
              {categories.map((category, index) => (
                <Button
                  key={index}
                  variant={index === 0 ? "default" : "outline"}
                  size="sm"
                  className="rounded-full"
                >
                  {category}
                </Button>
              ))}
            </div>
          </Container>
        </section>
        
        {/* Blog Posts */}
        <section className="py-16 bg-background">
          <Container>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <div
                  key={post.id}
                  className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-border/50 flex flex-col"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-primary/90 text-white text-xs font-medium rounded-full">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6 flex-grow">
                    <h3 className="text-xl font-semibold mb-3 hover:text-primary transition-colors">
                      <a href="#">{post.title}</a>
                    </h3>
                    <p className="text-muted-foreground mb-4 line-clamp-3">{post.excerpt}</p>
                    <div className="flex items-center text-sm text-muted-foreground mb-4">
                      <div className="flex items-center mr-4">
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center">
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </div>
                  <div className="px-6 pb-6 pt-2 border-t border-border/50 mt-auto">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold mr-2">
                          {post.author.charAt(0)}
                        </div>
                        <span className="text-sm">{post.author}</span>
                      </div>
                      <Button size="sm" className="text-primary">
                        続きを読む
                        <ArrowRight className="ml-1 h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <Button variant="outline" size="lg" className="rounded-full">
                もっと見る
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </Container>
        </section>
        
        {/* Newsletter */}
        <section className="py-16 bg-primary/5 border-y border-primary/10">
          <Container>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                最新情報をメールでお届けします
              </h2>
              <p className="text-muted-foreground mb-8">
                タクシー業界の最新ニュースや、ドライバーとして役立つ情報をいち早くお届けします。
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="メールアドレスを入力"
                  className="px-4 py-2 rounded-full border border-border bg-white flex-grow"
                />
                <Button className="rounded-full whitespace-nowrap">
                  登録する
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
