// app/components/sections/Features.tsx
"use client";

import { features } from "@/data/features";
import { Container } from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";

export default function Features() {
  return (
    <section id="features" className="py-16 bg-white">
      <Container>
        <SectionTitle
          subtitle="サービスの特長"
          title="あなたに最適な働き方をサポートします"
          description="RIDE JOBは、AIマッチング技術を活用してタクシードライバーと企業をつなぐ、新しい形の求人マッチングサービスです。"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`rounded-xl p-6 shadow-md transition hover:shadow-lg ${feature.bgColor}`}
            >
              <div className={`text-2xl mb-4 ${feature.color}`}>
                <feature.icon />
              </div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}