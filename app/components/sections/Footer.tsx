import { Container } from "@/components/ui/Container";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
<footer className="bg-gray-100 py-12 border-t border-border">
  <Container>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {/* ロゴ・説明 */}
      <div>
        <a href="#" className="text-xl font-bold flex items-center gap-2 mb-4">
          <span className="text-primary">RIDE</span>
          <span>JOB 🚕</span>
        </a>
        <p className="text-muted-foreground text-sm mb-6">
          AIを活用したタクシードライバーと企業のマッチングプラットフォーム。<br />
          あなたに合った働き方を見つけます。
        </p>
      </div>

      {/* サービス */}
      <div>
        <h3 className="font-bold mb-4">サービス</h3>
        <ul className="space-y-2 text-sm text-muted-foreground">
          <li><a href="#">企業向けサービス</a></li>
          <li><a href="#">ドライバー向けサービス</a></li>
          <li><a href="#">適性診断</a></li>
          <li><a href="#">研修プログラム</a></li>
          <li><a href="#">キャリア相談</a></li>
        </ul>
      </div>

      {/* お役立ち情報 */}
      <div>
        <h3 className="font-bold mb-4">お役立ち情報</h3>
        <ul className="space-y-2 text-sm text-muted-foreground">
          <li><a href="#">ブログ</a></li>
          <li><a href="#">二種免許取得ガイド</a></li>
          <li><a href="#">稼ぐコツ</a></li>
          <li><a href="#">よくある質問</a></li>
        </ul>
      </div>

          {/* お問い合わせ */}
          <div>
            <h3 className="font-bold mb-4">お問い合わせ</h3>
            <div className="bg-yellow-100 rounded-xl p-4 mb-4">
              <div className="flex items-center gap-2 mb-1 text-yellow-900 font-semibold text-sm">
                お電話でのお問い合わせ
              </div>
              <div className="text-center font-bold text-lg text-yellow-900">
                080-3558-3220
              </div>
              <p className="text-xs text-muted-foreground text-center mt-1">(平日 9:00〜18:00)</p>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground text-sm">
              info@ridejob.example.com
            </div>
          </div>
    </div>

    <div className="mt-12 pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
      <p className="mb-2 md:mb-0">© {currentYear} RIDE JOB All rights reserved.</p>
      <div className="flex space-x-4">
        <a href="#">会社概要</a>
        <a href="#">プライバシーポリシー</a>
        <a href="#">利用規約</a>
      </div>
    </div>
  </Container>
</footer>
  );
}
