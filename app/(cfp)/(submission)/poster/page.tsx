import Countdown from "../_components/countdown";
import Timeline from "../_components/timeline";

export default function Page() {
  return (
    <div className="bg-blue py-4 font-bold text-light-brown">
      <div className="relative left-[396px] min-h-screen max-w-[840px] space-y-14">
        <h1 className="text-h1">海報徵稿</h1>

        <div className="space-y-16">
          <Countdown />
          <Timeline />

          <section className="space-y-4">
            <h2 className="text-h2 font-extrabold">投稿說明</h2>
            <p className="text-normal leading-loose">
              海報投稿以靜態海報展出學生個人或團隊專案，作品以資訊相關領域為主，不限語言，不接受一稿多投，若為延伸作品需於投稿時載明。期望透過此方式使更多學生能有展現自我的機會，同時為會眾帶來不同形式的學習與交流。
            </p>
          </section>

          <section className="space-y-12">
            <h2 className="text-h2">投稿方式</h2>
            <div className="space-y-4">
              <h3 className="text-h3">稿件資訊</h3>
              <ul className="ml-2 font-normal leading-loose [&>li]:relative [&>li]:pl-4 before:[&>li]:absolute before:[&>li]:left-0 before:[&>li]:top-[0.8em] before:[&>li]:-translate-y-[1em] before:[&>li]:text-xl before:[&>li]:content-['.']">
                <li>題目 Project Title：必填、公開。長度請自行斟酌。</li>
                <li>
                  摘要 Abstract：必填、公開。建議約 350
                  字，使用於宣傳與網站公告。
                </li>
                <li>
                  主題標籤 Labels：必填、公開。請填寫 1~3
                  個與海報內文相關的領域與知識標籤，例如：ML、Data
                  Science、資安、NLP
                  等；錄取後會與提供稿件者溝通微調後公開於官網。
                </li>
                <li>
                  研究說明 Project Content：必填。請以 PDF
                  檔案上傳，需簡要說明（一）研究動機與目的 Research Question or
                  Problem；（二）研究方法與過程
                  Methodology；（三）研究結果與討論 Results and Interpretation
                  of these results；（四）結論應用及展望 Conclusions 等，以
                  600~1500 字為限。可參考 臺灣國際科學展覽會實施要點 第 17
                  頁說明。
                </li>
                <li>
                  海報內容 Poster
                  Content：錄取後上傳、公開。以呈現研究結果為主，除題目與摘要之外，建議依序可包含前言、研究方法、結論及參考文獻等，內容請投稿作者自行斟酌，以不超過海報尺寸為限，大會方將會提供參考模板給錄取者。請以直版寬
                  841 mm、高 1189 mm （A0 大小）規格製作為 pdf
                  檔案，一篇投稿一面看板，請於收到錄取通知後，依據錄取郵件說明上傳最終版海報檔案，統一由大會進行印製與佈展。
                </li>
                <li>
                  其他說明 Additional
                  Instructions：其他以上未提及之說明，若為延續性研究作品也請在此標明。
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-h3">個人資料</h3>
              <div>
                <p className="leading-loose">
                  除了暱稱 /
                  名字、自我介紹被用於宣傳，其餘資訊僅需提供一人作為代表（當稿件同時有多位講者時），供議程組於聯絡時使用。
                </p>
                <ul className="ml-2 font-normal leading-loose [&>li]:relative [&>li]:pl-4 before:[&>li]:absolute before:[&>li]:left-0 before:[&>li]:top-[0.8em] before:[&>li]:-translate-y-[1em] before:[&>li]:text-xl before:[&>li]:content-['.']">
                  <li>
                    電子郵件
                    Email：必填。能讓大會聯絡的電子信箱。（注意：請您在大會的聯絡過程中，維持使用相同信箱）
                  </li>
                  <li>
                    暱稱 / 名字 Name：必填、公開。公開於講者海報及網站的稱呼。
                  </li>
                  <li>
                    自我介紹 Self
                    Introduction：必填、公開。公開於講者海報及網站，將有助於會眾更加了解有關你的資訊。
                  </li>
                  <li>
                    手機號碼 Phone：必填。用於大會聯絡、確認資訊用的電話號碼。
                  </li>
                  <li>
                    其他聯絡方式 Other Contact
                    Information：必填。其他任何我們能聯絡您的方式（如 Telegram
                    ID、住處電話等），以利我們在審稿時即時向您釐清投稿資訊。
                  </li>
                </ul>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-h3">海報格式參考</h3>
              <ul className="ml-2 font-normal leading-loose [&>li]:relative [&>li]:pl-4 before:[&>li]:absolute before:[&>li]:left-0 before:[&>li]:top-[0.8em] before:[&>li]:-translate-y-[1em] before:[&>li]:text-xl before:[&>li]:content-['.']">
                <li>
                  中文名稱：字體大小範圍為 70 號字〜90
                  號字，且建議最多不超過兩行，置中對齊方式。
                </li>
                <li>
                  英文名稱：字體大小範圍為 40 號字〜80
                  號字，且建議最多不超過兩行，置中對齊方式。
                </li>
                <li>
                  作者中、英文姓名：字體大小範圍 30 號字〜40
                  號字，置中對齊方式。
                </li>
                <li>海報頁面的上下側及左右邊各留至少 5 公分。</li>
                <li>
                  內文中文建議以標楷體或黑體書寫、英文以 Times New Roman 書寫。
                </li>
                <li>
                  圖表需以良好解析度呈現，可以列在文中，或列在參考文獻之後。列在文中者，請盡量靠近文中第一次提及的地方。各圖、表請備說明內容，圖的說明應置於圖的下方，而表的說明則應置於表的上方。
                </li>
              </ul>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-h2">審稿方式</h2>
            <p className="text-normal leading-loose">
              稿件均經議程組形式審查，交予該領域之審稿委員審稿。審稿委員由
              SITCON 工作人員、業界人士及學界人士組成。
              審稿委員將針對以下項目進行篩選：
            </p>
            <ul className="ml-2 font-normal leading-loose [&>li]:relative [&>li]:pl-4 before:[&>li]:absolute before:[&>li]:left-0 before:[&>li]:top-[0.8em] before:[&>li]:-translate-y-[1em] before:[&>li]:text-xl before:[&>li]:content-['.']">
              <li>
                題材創新性：研究專案內容與方法具原創與可行性，產生貢獻或影響之潛力。
              </li>
              <li>
                作品完整度：提供的資料是否具備基本學術倫理、適切性、系統性。我們偏好完整的資料，讓審稿委員更清楚了解專案細節。
              </li>
              <li>表達完整性：文句暢通，且文意清楚周全。</li>
            </ul>
            <div className="py-1" />
          </section>

          <section className="space-y-4">
            <h2 className="text-h2">CODE OF CONDUCT</h2>
            <p className="text-normal leading-loose">
              SITCON
              歡迎不同身分、來自不同背景的與會者，我們鼓勵女性、性少數與多元背景的參與者。為了讓大家都能愉快地參加
              SITCON，我們要求所有參與者閱讀年會的 行為準則（Code of
              Conduct），共同創造一個友善的環境。
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-h2">投稿注意事項</h2>
            <ul className="ml-2 font-normal leading-loose [&>li]:relative [&>li]:pl-4 before:[&>li]:absolute before:[&>li]:left-0 before:[&>li]:top-[0.8em] before:[&>li]:-translate-y-[1em] before:[&>li]:text-xl before:[&>li]:content-['.']">
              <li>
                除非內容明顯偏離講題、違反 CoC
                或不符事實，我們不會強制要求講者對演講內容進行修正。
              </li>
              <li>
                「議程題目」、「摘要」與「先備知識」將放置於官方網站與大會發行的文宣中。
              </li>
              <li>在截稿之前，投稿者可以隨時透過表單回函修改已送出的稿件。</li>
              <li>
                審稿過程不考慮稿件內容的難度。我們以稿件是否能夠吸引人、高品質、適合聽眾為考量。
              </li>
              <li>
                若 SITCON
                議程組認為您的稿件比較適合另一種形式，或者該形式的名額已經額滿、無法再增額時，我們會向您充分說明與溝通，並經您的同意後，轉換稿件類型或時間長度。
              </li>
              <li>
                SITCON 2024
                將會有多軌議程及各式場外活動同時進行，與會者可以自行決定要參與哪一場議程或活動。
              </li>
              <li>
                為鼓勵投稿，大會提供投稿者一組報名邀請碼（一稿一組，每人最多一組），可優先報名參與本年會。若您的稿件被接受，年會將頒予感謝狀以表彰您的熱情付出與貢獻，並額外提供講者身分入場，屆時您可以將年會邀請碼贈與他人使用，邀請親朋好友共襄盛舉。
              </li>
              <li>
                若同一稿件有多個講者，請在「暱稱 /
                名字」欄位標示所有講者的稱呼，並在「演講大綱」詳細說明各個講者如何分配演講內容。稿件經接受者，無論講者人數，皆只提供一組可轉贈的入場票邀請碼、一份講者識別證與一份講者專屬迎賓禮，大會方保有最終發放之權力。未佩戴識別證的講者，僅能在自己的演講時，於該議程時段進入議程所在的會議廳。
              </li>
              <li>
                若有任何問題或投稿建議，請來信 SITCON 議程組信箱
                session@sitcon.org。
              </li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-h2">授權</h2>
            <p className="text-normal leading-loose">
              投稿作者同意以 創用 CC「姓名標示」4.0
              授權大會方進行紙本印刷、宣傳、展覽、數位化、重製等審稿、佈展、官方網站上線工作必要流程。投稿作者仍擁有投稿專案著作之著作權。且擔保本著作係著作人之原創性著作，未侵害任何第三人之智慧財產權。
            </p>
            <div className="py-1" />
          </section>

          <section className="space-y-4">
            <h2 className="text-h2">試講</h2>
            <p className="text-normal leading-loose">
              請以直版寬841 mm、高 1189 mm （A0 大小）規格製作為 pdf
              檔案，一篇投稿一面看板，請於收到錄取通知後依據郵件說明上傳最終版海報檔案，統一由大會進行印製與佈展。
              佈展方式與地點：地點於 2 樓梯廳，其餘細節將於稿件錄取後通知。
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-h2">Q&A</h2>
            <p>Q1. 投稿主題是否有必要切合年會主題？</p>
            <p>Q2. 還有疑問怎麼辦？</p>
          </section>
        </div>
      </div>
    </div>
  );
}
