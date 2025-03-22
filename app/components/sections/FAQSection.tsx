"use client";

import { ArrowRight } from "lucide-react";
import Button from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

const faqs = [
  {
    question: "未経験でも応募できますか？",
    answer: "はい、未経験者も大歓迎です。充実した研修制度で安心してスタートできます。",
  },
  {
    question: "二種免許を持っていない場合はどうすればいいですか？",
    answer: "多くの企業では二種免許取得をサポートしています。取得費用の補助制度がある企業も多数あります。",
  },
  {
    question: "勤務時間や勤務形態は選べますか？",
    answer: "はい、日勤、夜勤、隔日勤務など、様々な勤務形態から選択可能です。AIマッチングにより、あなたの希望に合った企業をご紹介します。",
  },
  {
    question: "実際の収入はどれくらいですか？",
    answer: "経験や勤務形態によって異なりますが、未経験者でも月収28万円程度、経験者は35万円以上の収入を得ている方が多数です。",
  },
];

export default function FAQSection() {
  return (
    <Container>
    <div className="mt-24" id="apply">
      <div className="bg-blue-50 rounded-2xl p-8 lg:p-12 border border-blue-100">
        <div className="text-center max-w-3xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-bold mb-6">
            今すぐタクシードライバーとしての新しいキャリアをスタート
          </h3>
          <p className="text-muted-foreground mb-8">
            あなたの理想の働き方を見つけましょう。エントリーは簡単3分で完了します。
          </p>
          <Button
            size="lg"
            className="px-8 rounded-full text-base bg-primary hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all"
          >
            <span>今すぐ応募する</span>
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>

        <div className="mt-16">
          <h3 className="text-xl font-semibold mb-6 text-center">よくある質問</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 border border-border/50 shadow-sm hover:shadow-md transition-shadow"
              >
                <h4 className="font-semibold mb-2 text-gray-900">{faq.question}</h4>
                <p className="text-sm text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    </Container>
  );
}