"use client";

import { Container } from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";

const testimonials = [
  {
    name: "山田 太郎",
    role: "40代・未経験からの転職",
    comment:
      "未経験からのスタートでしたが、AIマッチングでぴったりの会社に出会えました。今では安心して働けています！",
  },
  {
    name: "佐藤 花子",
    role: "30代・子育て中のドライバー",
    comment:
      "時短勤務が可能な職場を紹介してもらえて、子育てと両立できています。本当に助かりました。",
  },
  {
    name: "田中 一郎",
    role: "50代・シニアドライバー",
    comment:
      "定年後も安心して働ける環境を紹介してもらえました。年齢に関係なく活躍できるのが嬉しいです。",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-background">
      <Container>
        <SectionTitle
          subtitle="利用者の声"
          title="RIDE JOBで働き方が変わった"
          description="実際にサービスを利用した方々のリアルな声をお届けします。"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-xl p-6 border border-border/50"
            >
              <p className="text-muted-foreground mb-4">“{item.comment}”</p>
              <div className="text-sm font-semibold text-gray-900">{item.name}</div>
              <div className="text-xs text-gray-500">{item.role}</div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}