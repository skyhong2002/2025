import Link from "next/link";
export default function CodeOfConduct() {
  return (
    <div>
      <section className="space-y-4">
        <h2 className="text-h2-mobile font-extrabold md:text-h2">
          CODE OF CONDUCT
        </h2>
        <p className="text-normal-mobile font-normal leading-loose tracking-wider md:text-normal">
          SITCON
          歡迎不同身分、來自不同背景的與會者，我們鼓勵女性、性少數與多元背景的參與者。為了讓大家都能愉快地參加
          SITCON，我們要求所有參與者閱讀年會的{" "}
          <Link
            href={"https://sitcon.org/code-of-conduct/"}
            className="text-orange underline underline-offset-2"
          >
            行為準則（Code of Conduct）
          </Link>
          ，共同創造一個友善的環境。
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-h2-mobile font-extrabold md:text-h2">
          投稿注意事項
        </h2>
        <div>
          <ul className="ml-2 text-normal-mobile font-normal leading-loose tracking-wider md:text-normal [&>li]:relative [&>li]:pl-4 before:[&>li]:absolute before:[&>li]:left-0 before:[&>li]:top-[0.8em] before:[&>li]:-translate-y-[1em] before:[&>li]:text-xl before:[&>li]:content-['.']">
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
          </ul>
          <p className="text-normal-mobile font-normal leading-loose tracking-wider md:text-normal">
            若有任何問題或投稿建議，請來信 SITCON 議程組信箱
            session@sitcon.org。
          </p>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-h2-mobile font-extrabold md:text-h2">授權</h2>
        <p className="text-normal-mobile font-normal leading-loose tracking-wider md:text-normal">
          投稿作者同意以{" "}
          <Link
            href={"https://creativecommons.org/licenses/by/4.0/"}
            className="underline underline-offset-2"
          >
            創用 CC「姓名標示」4.0
          </Link>{" "}
          授權大會方進行紙本印刷、宣傳、展覽、數位化、重製等審稿、佈展、官方網站上線工作必要流程。投稿作者仍擁有投稿專案著作之著作權。且擔保本著作係著作人之原創性著作，未侵害任何第三人之智慧財產權。
        </p>
        <div className="py-1" />
      </section>

      <section className="space-y-4">
        <h2 className="text-h2-mobile font-extrabold md:text-h2">試講</h2>
        <p className="text-normal-mobile font-normal leading-loose tracking-wider md:text-normal">
          請以直版寬841 mm、高 1189 mm （A0 大小）規格製作為 pdf
          檔案，一篇投稿一面看板，請於收到錄取通知後依據郵件說明上傳最終版海報檔案，統一由大會進行印製與佈展。
          <br />
          佈展方式與地點：地點於 2 樓梯廳，其餘細節將於稿件錄取後通知。
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-h2-mobile font-extrabold md:text-h2">Q&A</h2>
        <div className="rounded-full bg-light-brown px-6 py-4 text-red">
          Q1. Placeholder
        </div>
      </section>
    </div>
  );
}
