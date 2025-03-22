"use client";

import { ArrowRight } from "lucide-react";
import Button from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export default function Hero() {
  return (
    <section className="bg-white py-24">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* 左側：テキスト */}
          <div className="max-w-xl mx-auto lg:mx-0 text-center lg:text-left">
            <div className="inline-block px-3 py-1 text-sm font-medium bg-yellow-100 text-yellow-800 rounded-full mb-4">
              AIがタクシードライバーと企業をつなぐ
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              あなたに <span className="text-yellow-400">最適な</span>
              <br />
              タクシードライバーの働き方を
            </h1>

            <p className="text-gray-600 mb-8 text-base md:text-lg">
              AIマッチング技術で、理想の勤務条件と企業をつなぎます。
              <span className="hidden md:block">
                未経験でも、あなたのペースで働ける環境が見つかります。
              </span>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg">
                今すぐ応募
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg">
                サービスの特長を見る
              </Button>
            </div>
          </div>

          {/* 右側：AI図解カード */}
          <div className="relative hidden lg:block">
            <div className="relative bg-yellow-50 p-8 rounded-2xl shadow-xl w-full aspect-[4/3]">
              <div className="absolute inset-0 bg-gradient-to-tr from-yellow-100 to-yellow-50 rounded-2xl" />
              <div className="relative z-10 flex flex-col items-center justify-center h-full text-center">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg text-yellow-500 font-bold text-2xl mb-4">
                  AI
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">AIマッチング</h3>
                <p className="text-sm text-gray-500">あなたの希望条件に最適な企業を見つけます</p>
              </div>
            </div>

            {/* 高収入バッジ */}
            <div className="absolute -left-8 top-1/3 bg-white p-4 rounded-xl shadow-md animate-pulse">
              <p className="text-sm font-medium text-gray-700">✓ 高収入</p>
            </div>

            {/* 最適なシフトバッジ */}
            <div className="absolute -right-8 top-1/4 bg-white p-4 rounded-xl shadow-md animate-pulse delay-100">
              <p className="text-sm font-medium text-gray-700">✓ 最適なシフト</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}