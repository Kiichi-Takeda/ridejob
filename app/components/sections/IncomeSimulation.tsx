import { cn } from "../../../lib/utils";

export default function IncomeSimulation() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="bg-blue-100/40 border border-blue-200 rounded-2xl p-8 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">月収シミュレーション</h3>
              <p className="text-muted-foreground mb-6">
                タクシードライバーとして働いた場合の収入シミュレーションです。経験や勤務形態によって異なりますが、多くのドライバーが安定した収入を得ています。
              </p>

              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4 border border-blue-100 shadow-sm">
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="font-medium">未経験者（入社1年目）</h4>
                    <span className="text-xl font-bold text-blue-600">28万円〜</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    固定給＋歩合給の組み合わせで安定収入
                  </p>
                </div>

                <div className="bg-white rounded-lg p-4 border border-blue-100 shadow-sm">
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="font-medium">経験者（入社2年目以降）</h4>
                    <span className="text-xl font-bold text-blue-600">35万円〜</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    効率的な営業ノウハウの習得で収入アップ
                  </p>
                </div>

                <div className="bg-white rounded-lg p-4 border border-blue-100 shadow-sm">
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="font-medium">ベテラン（入社3年目以降）</h4>
                    <span className="text-xl font-bold text-blue-600">45万円〜</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    顧客リピートや効率的な営業で高収入を実現
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white rounded-2xl shadow-lg p-6 relative overflow-hidden">
                <h4 className="text-lg font-semibold mb-6 text-center">月収比較グラフ</h4>
                <div className="h-64 flex items-end justify-around gap-6 pt-8">
                  {[
                    { label: "全産業平均", value: 30, color: "bg-gray-300" },
                    { label: "タクシー\n未経験", value: 28, color: "bg-blue-300" },
                    { label: "タクシー\n経験者", value: 35, color: "bg-blue-500" },
                    { label: "タクシー\nベテラン", value: 45, color: "bg-blue-700" },
                  ].map((bar, index) => (
                    <div key={index} className="flex flex-col items-center flex-1">
                      <div
                        className={cn(
                          "w-full rounded-t-lg transition-all duration-700",
                          bar.color
                        )}
                        style={{
                          height: `${(bar.value / 50) * 100}%`,
                          maxWidth: "60px",
                        }}
                      >
                        <div className="h-8 flex items-center justify-center text-white font-medium -mt-8">
                          {bar.value}万円
                        </div>
                      </div>
                      <div className="mt-2 text-xs text-center whitespace-pre-line">
                        {bar.label}
                      </div>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-muted-foreground text-center mt-6">
                  ※個人の経験や勤務状況により異なります
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}