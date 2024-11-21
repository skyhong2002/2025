import Link from "next/link";
import Countdown from "../_components/countdown";
import Timeline from "../_components/timeline";
import CodeOfConduct from "../../_components/code-of-conduct";
import TableOfContent from "../_components/table-of-content";
import FAQ from "../../_components/faq";

export default function Page() {
  const sections = [
    { id: "important-dates", title: "重要時程" },
    { id: "session-types", title: "投稿說明" },
    { id: "submission-topics", title: "投稿方式" },
    { id: "review-process", title: "審稿方式" },
    { id: "code-of-conduct", title: "Code of Conduct" },
    { id: "submission-guidelines", title: "投稿注意事項" },
    { id: "license", title: "授權" },
    { id: "practice-talk", title: "試講" },
    { id: "rehearsal", title: "彩排" },
    { id: "qa", title: "Q & A" },
  ];

  const QA = [
    {
      title: "是否一定要是學術研究的成果？",
      answer:
        "不用。本次投稿接受各類型的專案展示，包括學術研究及實務應用成果，歡迎學生分享各種形式的內容。",
    },
    {
      title: "投稿主題是否有必要切合年會主題？",
      answer:
        "不用。審稿時僅會依照上文所述標準審查，不會因為呼應主題就拿到比較高分，或因為與主題無關就被扣分。",
    },
    {
      title: "還有疑問怎麼辦？",
      answer: (
        <p>
          歡迎寄信至{" "}
          <Link
            href="mailto:contact@sitcon.org"
            className="cursor-pointer text-primary underline"
          >
            contact@sitcon.org
          </Link>{" "}
          詢問，我們會儘速回應。
        </p>
      ),
    },
  ];
  return (
    <div className="py-8 text-normal-mobile md:text-normal">
      <h1 className="mb-4 text-h1-mobile font-extrabold md:text-h1">
        海報徵稿
      </h1>
      <TableOfContent
        sections={sections}
        theme="light"
        submitUrl="https://forms.gle/NDZqhGJBLwvQTgEt8"
      />

      <Countdown />
      <section
        id="important-dates"
        className="my-4 -mt-[60px] space-y-4 pt-[80px] md:mb-16"
      >
        <h2 className="text-h2-mobile font-extrabold text-primary md:text-h2">
          重要時程
        </h2>
        <Timeline />
      </section>

      <section
        id="session-types"
        className="my-4 -mt-[60px] space-y-4 pt-[80px] md:mb-16"
      >
        <h2 className="text-h2-mobile font-extrabold text-primary md:text-h2">
          投稿說明
        </h2>
        <p className="text-normal-mobile font-normal leading-10 tracking-wider md:text-normal">
          海報投稿以靜態海報展出學生個人或團隊專案，作品以資訊相關領域為主，不限語言，不接受一稿多投，若為延伸作品需於投稿時載明。期望透過此方式使更多學生能有展現自我的機會，同時為會眾帶來不同形式的學習與交流。
        </p>
      </section>

      <section
        id="submission-topics"
        className="my-4 -mt-[60px] space-y-4 pt-[80px] md:mb-16"
      >
        <h2 className="text-h2-mobile font-extrabold text-primary md:text-h2">
          投稿方式
        </h2>
        <div className="space-y-4">
          <h3 className="text-h3-mobile font-bold text-primary md:text-h3">
            稿件資訊
          </h3>
          <ul className="ml-2 text-normal-mobile font-normal leading-10 tracking-wider md:text-normal [&>li]:relative [&>li]:pl-4 before:[&>li]:absolute before:[&>li]:left-0 before:[&>li]:top-[0.8em] before:[&>li]:-translate-y-[1em] before:[&>li]:text-xl before:[&>li]:content-['.']">
            <li>
              <span className="subTitle">題目 Project Title：</span>
              <span className="hightlight">必填、公開</span>。長度請自行斟酌。
            </li>
            <li>
              <span className="subTitle">摘要 Abstract：</span>
              <span className="hightlight">必填、公開</span>。建議約
              <span className="hightlight"> 350 </span>
              字，使用於宣傳與網站公告。
            </li>
            <li>
              <span className="subTitle">主題標籤 Labels：</span>
              <span className="hightlight">必填、公開</span>。請填寫 1~3
              個與海報內文相關的領域與
              <span className="hightlight">知識標籤</span>，例如：ML、Data
              Science、資安、NLP 等；錄取後會與提供稿件者溝通微調後公開於官網。
            </li>
            <li>
              <span className="subTitle">研究說明 Project Content：</span>
              必填。請以 PDF 檔案上傳，需簡要說明（一）研究動機與目的 Research
              Question or Problem；（二）研究方法與過程
              Methodology；（三）研究結果與討論 Results and Interpretation of
              these results；（四）結論應用及展望 Conclusions 等，以{" "}
              <span className="hightlight"> 600~1500 </span>
              字為限。可參考{" "}
              <Link
                href={
                  "https://twsf.ntsec.gov.tw/FileAtt.ashx?fcode=AC1C403BD297CA5A6A628EBAD362874E&lang=1"
                }
                className="underline underline-offset-2"
              >
                臺灣國際科學展覽會實施要點
              </Link>{" "}
              第 17 頁說明。
            </li>
            <li>
              <span className="subTitle">海報內容 Poster Content：</span>
              錄取後上傳、公開。以呈現研究結果為主，除題目與摘要之外，建議依序可包含前言、研究方法、結論及參考文獻等，內容請投稿作者自行斟酌，以不超過海報尺寸為限，大會方將會提供參考模板給錄取者。請以直版寬
              <span className="hightlight">
                {" "}
                841 mm、高 1189 mm （A0 大小）
              </span>
              規格製作為 pdf
              檔案，一篇投稿一面看板，請於收到錄取通知後，依據錄取郵件說明上傳最終版海報檔案，統一由大會進行印製與佈展。
            </li>
            <li>
              <span className="subTitle">
                其他說明 Additional Instructions：
              </span>
              其他以上未提及之說明，若為延續性研究作品也請在此標明。
            </li>
          </ul>
        </div>
        <div className="space-y-4">
          <h3 className="text-h3-mobile font-bold text-primary md:text-h3">
            個人資料
          </h3>
          <div>
            <p className="leading-10 tracking-wider">
              除了暱稱 /
              名字、自我介紹被用於宣傳，其餘資訊僅需提供一人作為代表（當稿件同時有多位講者時），供議程組於聯絡時使用。
            </p>
            <ul className="ml-2 text-normal-mobile font-normal leading-10 tracking-wider md:text-normal [&>li]:relative [&>li]:pl-4 before:[&>li]:absolute before:[&>li]:left-0 before:[&>li]:top-[0.8em] before:[&>li]:-translate-y-[1em] before:[&>li]:text-xl before:[&>li]:content-['.']">
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
          <h3 className="text-h3-mobile text-primary md:text-h3">
            海報格式參考
          </h3>
          <ul className="list-inside list-disc leading-10">
            <li>
              <span className="subTitle">電子郵件 Email：</span>
              <span className="hightlight">必填</span>
              。能讓大會聯絡的電子信箱。（注意：請您在大會的聯絡過程中，維持使用相同信箱）
            </li>
            <li>
              <span className="subTitle">暱稱 / 名字 Name：</span>
              <span className="hightlight">必填、公開</span>
              。公開於講者海報及網站的稱呼。
            </li>
            <li>
              <span className="subTitle">自我介紹 Self Introduction：</span>
              <span className="hightlight">必填、公開</span>
              。公開於講者海報及網站，將有助於會眾更加了解有關你的資訊。
            </li>
            <li>
              <span className="subTitle">手機號碼 Phone：</span>
              <span className="hightlight">必填</span>
              。用於大會聯絡、確認資訊用的電話號碼。
            </li>
            <li className="pl-[22px] -indent-[22px]">
              <span className="subTitle">
                其他聯絡方式 Other Contact Information：
              </span>
              <span className="hightlight">必填</span>
              。其他任何我們能聯絡您的方式（如 Telegram
              ID、住處電話等），以利我們在審稿時即時向您釐清投稿資訊。
            </li>
          </ul>
        </div>
      </section>

      <section
        id="review-process"
        className="my-4 -mt-[60px] space-y-4 pt-[80px] md:mb-16"
      >
        <h2 className="text-h2-mobile font-extrabold text-primary md:text-h2">
          審稿方式
        </h2>
        <p className="text-normal-mobile font-normal leading-10 tracking-wider md:text-normal">
          稿件均經議程組形式審查，交予該領域之審稿委員審稿。審稿委員由 SITCON
          工作人員、業界人士及學界人士組成。
          <br />
          審稿委員將針對以下項目進行篩選：
        </p>
        <ul className="ml-2 text-normal-mobile font-normal leading-10 tracking-wider md:text-normal [&>li]:relative [&>li]:pl-4 before:[&>li]:absolute before:[&>li]:left-0 before:[&>li]:top-[0.8em] before:[&>li]:-translate-y-[1em] before:[&>li]:text-xl before:[&>li]:content-['.']">
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

      <CodeOfConduct />
      <FAQ QA={QA} />
    </div>
  );
}
