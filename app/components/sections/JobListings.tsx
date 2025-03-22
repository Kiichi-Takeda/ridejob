import { Container } from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import Button from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import {
  MapPin,
  Clock,
  Calendar,
  Banknote,
  FilterIcon,
  Users,
} from "lucide-react";
import { cn } from "../../../lib/utils";

const jobListings = [
  {
    id: 1,
    title: "タクシードライバー（日勤）",
    company: "東京交通株式会社",
    location: "東京都新宿区",
    workType: "日勤",
    salary: "月給30万円〜",
    tags: ["未経験歓迎", "社会保険完備", "研修制度あり"],
    isPromoted: true,
  },
  {
    id: 2,
    title: "タクシードライバー（夜勤）",
    company: "日本都市交通株式会社",
    location: "東京都渋谷区",
    workType: "夜勤",
    salary: "月給35万円〜",
    tags: ["経験者優遇", "高収入", "社員寮あり"],
    isPromoted: false,
  },
  {
    id: 3,
    title: "女性専用タクシー乗務員",
    company: "レディースタクシー株式会社",
    location: "東京都中央区",
    workType: "フレックス",
    salary: "月給28万円〜",
    tags: ["女性活躍中", "時短勤務可", "子育て支援"],
    isPromoted: true,
  },
  {
    id: 4,
    title: "シニア向けタクシードライバー",
    company: "シルバー交通株式会社",
    location: "東京都江東区",
    workType: "日勤",
    salary: "月給26万円〜",
    tags: ["50代以上歓迎", "定年なし", "短時間勤務可"],
    isPromoted: false,
  },
];

const locations = ["東京都", "神奈川県", "埼玉県", "千葉県"];
const workTypes = ["日勤", "夜勤", "隔日勤務", "フレックス"];
const features = ["未経験歓迎", "高収入", "女性活躍中", "社員寮あり"];

export function JobListings() {
  return (
    <section id="jobs" className="py-20 bg-background">
      <Container>
        <SectionTitle
          subtitle="求人情報"
          title="あなたにぴったりの求人を探す"
          description="全国の厳選されたタクシー会社の求人情報を多数掲載。あなたの条件に合った求人を見つけましょう。"
        />

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mt-12">
          {/* Sidebar Filters */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-sm border border-border/50 p-5 sticky top-24">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold">絞り込み検索</h3>
                <FilterIcon className="w-5 h-5 text-muted-foreground" />
              </div>

              <div className="space-y-6">
                {/* 地域 */}
                <div>
                  <h4 className="text-sm font-medium mb-2">地域</h4>
                  <div className="space-y-2">
                    {locations.map((location) => (
                      <div key={location} className="flex items-center">
                        <input
                          type="checkbox"
                          id={`location-${location}`}
                          className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                        />
                        <label htmlFor={`location-${location}`} className="ml-2 text-sm text-gray-700">
                          {location}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 勤務形態 */}
                <div>
                  <h4 className="text-sm font-medium mb-2">勤務形態</h4>
                  <div className="space-y-2">
                    {workTypes.map((type) => (
                      <div key={type} className="flex items-center">
                        <input
                          type="checkbox"
                          id={`type-${type}`}
                          className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                        />
                        <label htmlFor={`type-${type}`} className="ml-2 text-sm text-gray-700">
                          {type}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 特徴 */}
                <div>
                  <h4 className="text-sm font-medium mb-2">特徴</h4>
                  <div className="space-y-2">
                    {features.map((feature) => (
                      <div key={feature} className="flex items-center">
                        <input
                          type="checkbox"
                          id={`feature-${feature}`}
                          className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                        />
                        <label htmlFor={`feature-${feature}`} className="ml-2 text-sm text-gray-700">
                          {feature}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                <Button className="w-full">検索する</Button>
              </div>
            </div>
          </div>

          {/* Job Listings */}
          <div className="lg:col-span-3 space-y-6">
            {jobListings.map((job) => (
              <div
                key={job.id}
                className={cn(
                  "bg-white rounded-xl shadow-sm border p-6 transition-all hover:shadow-md",
                  job.isPromoted ? "border-primary/20 relative overflow-hidden" : "border-border/50"
                )}
              >
                {job.isPromoted && (
                  <>
                    <div className="absolute top-0 right-0">
                      <div className="bg-primary text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                        おすすめ
                      </div>
                    </div>
                    <div className="absolute top-0 left-0 w-full h-1 bg-primary" />
                  </>
                )}

                <div className="flex flex-col md:flex-row md:items-center justify-between">
                  <div>
                    <h3 className="text-xl font-semibold mb-2 mt-2">{job.title}</h3>
                    <p className="text-muted-foreground mb-4">{job.company}</p>

                    <div className="space-y-2">
                      <div className="flex items-center text-sm">
                        <MapPin className="w-4 h-4 mr-2 text-muted-foreground" />
                        <span>{job.location}</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <Clock className="w-4 h-4 mr-2 text-muted-foreground" />
                        <span>{job.workType}</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <Banknote className="w-4 h-4 mr-2 text-muted-foreground" />
                        <span>{job.salary}</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 md:mt-0">
                    <Button size="sm" className="w-full md:w-auto">
                      詳細を見る
                    </Button>
                  </div>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  {job.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}

            <div className="mt-8 text-center">
              <Button variant="outline" size="lg">
                もっと見る
              </Button>
            </div>

            <div className="mt-16 bg-secondary rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">特別な求人を探していますか？</h3>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                女性向け、シニア向け、外国人向けなど、あなたに最適な特化型求人も多数ご用意しています。
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <SpecialCard
                  icon={<Users className="w-6 h-6 text-pink-500" />}
                  bg="bg-pink-100"
                  title="女性ドライバー"
                  text="女性が活躍できる環境と充実したサポート体制"
                />
                <SpecialCard
                  icon={<Calendar className="w-6 h-6 text-blue-500" />}
                  bg="bg-blue-100"
                  title="シニアドライバー"
                  text="豊富な経験を活かせる、シニア歓迎の求人"
                />
                <SpecialCard
                  icon={<Globe className="w-6 h-6 text-green-500" />}
                  bg="bg-green-100"
                  title="外国人ドライバー"
                  text="多言語対応可能な方向けの特別求人"
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function SpecialCard({ icon, bg, title, text }: { icon: React.ReactNode; bg: string; title: string; text: string }) {
  return (
    <div className="bg-white rounded-xl p-6 border border-border/50">
      <div className={cn("w-12 h-12 rounded-full mx-auto mb-4 flex items-center justify-center", bg)}>
        {icon}
      </div>
      <h4 className="text-lg font-semibold mb-2">{title}</h4>
      <p className="text-sm text-muted-foreground">{text}</p>
    </div>
  );
}

function Globe(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <circle cx="12" cy="12" r="10" />
      <line x1="2" x2="22" y1="12" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  );
}
