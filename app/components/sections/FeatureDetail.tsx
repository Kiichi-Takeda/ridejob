"use client";

import { Brain } from "lucide-react";
import { Container } from "@/components/ui/Container";

export default function FeatureDetail() {
  return (
    <section className="py-20 bg-background">
      <Container>
        <div className="mt-16 bg-yellow-50 border border-yellow-100 rounded-2xl p-8 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* 左側テキスト */}
            <div>
              <h3 className="text-2xl font-bold mb-4">
                AIによる最適なマッチング
              </h3>
              <p className="mb-6 leading-relaxed">
                RIDE JOBのAIマッチングシステムは、あなたの経験、スキル、働き方の希望などを総合的に分析し、最適な企業とのマッチングを実現します。
                面接の手間を減らし、あなたに合った環境をスピーディーに見つけることができます。
              </p>
              <ul className="space-y-2">
                {[
                  "希望条件に合った企業を厳選してご紹介",
                  "適性診断で自分に合った働き方を発見",
                  "面接から採用までのプロセスをスムーズに",
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full bg-yellow-100 flex items-center justify-center text-yellow-600 text-sm">
                      ✓
                    </div>
                    <span className="text-yellow-900">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* 右側アイコンカード */}
            <div className="relative">
              <div className="aspect-square bg-white rounded-2xl shadow-lg p-6 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-tr from-yellow-100 to-transparent"></div>
                <div className="relative z-10 h-full flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-32 h-32 mx-auto rounded-full bg-yellow-100 flex items-center justify-center mb-4">
                      <Brain className="w-16 h-16 text-yellow-500" />
                    </div>
                    <h4 className="text-lg font-medium text-yellow-900">
                      AIマッチングシステム
                    </h4>
                    <p className="text-sm text-yellow-700 mt-2">
                      希望条件と企業ニーズを分析
                    </p>
                  </div>
                </div>
              </div>
              {/* Connector lines 未実装 */}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}