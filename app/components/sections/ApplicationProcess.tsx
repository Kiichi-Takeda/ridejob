"use client";

import { Container } from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import { ClipboardCheck, UserPlus, PhoneCall, Smile } from "lucide-react";

const steps = [
  {
    title: "応募",
    description: "まずは簡単なフォームから応募を行います。",
    icon: UserPlus,
  },
  {
    title: "面談日程の調整",
    description: "担当者と電話やメールで日程を調整します。",
    icon: PhoneCall,
  },
  {
    title: "面談・希望ヒアリング",
    description: "勤務条件や希望エリアなどをお伺いします。",
    icon: ClipboardCheck,
  },
  {
    title: "内定・就業開始",
    description: "条件に合った企業でスムーズに勤務開始！",
    icon: Smile,
  },
];

export default function ApplicationProcess() {
  return (
    <section className="py-20 bg-white" id="process">
      <Container>
        <SectionTitle
          subtitle="応募の流れ"
          title="はじめてでも安心のサポート体制"
          description="応募から勤務開始まで、スムーズに進められるように全力でサポートします。"
        />

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-12">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-primary/5 border border-primary/10 rounded-xl p-6 text-center hover:shadow-md transition"
            >
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <step.icon className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-semibold mb-2">{step.title}</h4>
              <p className="text-sm text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}