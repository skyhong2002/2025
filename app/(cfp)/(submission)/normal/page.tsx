import Image from "next/image";
import Countdown from "../_components/countdown";
import Timeline from "../_components/timeline";
import PresentationIcon from "../../_assets/presentation.svg";
import EspressoIcon from "../../_assets/espresso.svg";
import CodeOfConduct from "../../_components/code-of-conduct";
import TableOfContent from "../_components/table-of-content";

export default function Page() {
  const sections = [
    { id: "important-dates", title: "重要時程" },
    { id: "session-types", title: "議程種類" },
    { id: "submission-topics", title: "投稿主題範例" },
    { id: "submission-format", title: "投稿格式" },
    { id: "review-process", title: "審稿方式" },
    { id: "code-of-conduct", title: "Code of Conduct" },
    { id: "submission-guidelines", title: "投稿注意事項" },
    { id: "license", title: "授權" },
    { id: "practice-talk", title: "試講" },
    { id: "rehearsal", title: "彩排" },
    { id: "qa", title: "Q & A" },
  ];

  return (
    <div className="py-8 text-normal-mobile md:text-normal">
      <h1 className="mb-4 text-h1-mobile font-extrabold md:text-h1">
        一般議程投稿
      </h1>
      <TableOfContent theme="light" sections={sections} />

      <Countdown />

      <section
        id="important-dates"
        className="my-4 -mt-[60px] space-y-4 pt-[80px]"
      >
        <h2 className="text-h2-mobile font-extrabold text-light-blue md:text-h2">
          重要時程
        </h2>
        <Timeline />
      </section>

      <section
        id="session-types"
        className="my-4 -mt-[80px] pt-[80px] md:mb-16"
      >
        <h2 className="text-h2-mobile font-extrabold text-light-blue md:text-h2">
          議程種類
        </h2>
        <div className="mb-6 mt-4 grid grid-rows-2 gap-3 lg:grid-cols-2 lg:grid-rows-1">
          <div className="flex flex-col items-center rounded-lg border bg-white p-6 text-orange md:border-orange md:bg-light-brown">
            <Image priority src={PresentationIcon} alt="PRESENTATION" />
            <h3 className="text-h3-mobile md:text-h3">Presentation</h3>
            <p>
              Presentation 共 40 分鐘，包含完整 30 分鐘的議程與 10
              分鐘的問答時間，讓您有充分的時間展示想法、描述經歷、和與會者交流。
            </p>
          </div>
          <div className="flex flex-col items-center rounded-lg border bg-white p-6 text-red md:border-red md:bg-light-brown">
            <Image priority src={EspressoIcon} alt="PRESENTATION" />
            <h3 className="text-h3-mobile md:text-h3">Espresso</h3>
            <p>
              Espresso 僅有 10
              分鐘，挑戰最為濃縮與精華的議程，為與會者帶來短而精緻的知識洗禮。
            </p>
          </div>
        </div>
      </section>
      <section id="submission-topics" className="-mt-[80px] pt-[80px] md:mb-16">
        <h2 className="text-h2-mobile font-extrabold text-light-blue md:text-h2">
          投稿主題範例
        </h2>
        <p className="leading-10">
          <span className="font-bold text-lime-400">SITCON </span>
          作為學生展現自己的舞台，我們特別期待以學生為主體的稿件，例如：從學生角度出發的經驗分享、技術分享，專題研究成果、獨立研究甘苦談，或探討學生相關議題等等。
          不論是以技術探討形式，或輕鬆的分享方式，任何與資訊科技、電腦技術相關的講題，我們都非常歡迎投稿！
          除此之外，您也可以透過參與投稿者小聚或前往 SITCON
          歷年網站（2013、2014、2015、2016、2017、2018、2019、2020、2021、2022、2024）查看過去的議程。
        </p>
        <h3 className="my-4 text-h3-mobile font-bold md:text-h3">
          PRESENTATION
        </h3>
        <p className="leading-10">
          Presentation 包含完整
          <span className="hightlight"> 30 </span>分鐘的議程與
          <span className="hightlight"> 10 </span>
          分鐘的問答時間，共 <span className="hightlight"> 40 </span>
          分鐘，讓您有充分的時間展示想法、描述經歷、和與會者交流。
        </p>
        <h3 className="my-4 text-h3-mobile font-bold md:text-h3">ESPRESSO</h3>
        <p className="leading-10">
          Espresso 僅有 <span className="hightlight"> 10 </span>
          分鐘，挑戰最為濃縮與精華的議程，為與會者帶來短而精緻的知識洗禮。
        </p>
      </section>
      <section id="submission-format" className="-mt-[80px] pt-[80px] md:mb-16">
        <h2 className="text-h2-mobile font-extrabold text-light-blue md:text-h2">
          投稿方式
        </h2>
        <h3 className="my-4 text-h3-mobile text-light-blue md:text-h3">
          稿件資訊
        </h3>
        <ul className="list-inside list-disc leading-10">
          <li>
            <span className="subTitle">投稿類型 Type：</span>
            <span className="hightlight">必填、公開</span>
            。請寫明所欲投稿為何種議程類型（Presentation、Espresso）。
          </li>
          <li>
            <span className="subTitle">題目 Title：</span>
            <span className="hightlight">必填、公開</span>
            。請不要超出<span className="hightlight"> 20 </span>
            字，題目無須與年會主題相關。
          </li>
          <li>
            <span className="subTitle">摘要 Abstract：</span>
            <span className="hightlight">必填、公開</span>。建議
            <span className="hightlight"> 150~250 </span>
            字，使用於宣傳與網站公告。
          </li>
          <li>
            <span className="subTitle">演講大綱 Outline：</span>
            <span className="hightlight">必填</span>
            。請說明議程的內容大綱與時間分配。若為多位講者共同分享，請說明各個講者如何分配演講內容。
          </li>
          <li className="pl-[22px] -indent-[22px]">
            <span className="subTitle">目標受眾 Target Audience：</span>
            <span className="hightlight">必填</span>
            。請說明您期待該議程的目標受眾為怎麼樣的人。例如：「嚮往成為前端開發者的初學者」、「欲精進某技能的後端工程師」等。在這邊為您提供過往的會眾比例：大學生
            58%、高中/職生 22%、社會人士 8%、研究生 11%、國中生 1%
          </li>
          <p></p>
          <li className="pl-[22px] -indent-[22px]">
            <span className="subTitle">先備知識 Prior Knowledge：</span>
            <span className="hightlight">必填、公開</span>
            。請說明該議程的與會者所需具備的
            <span className="hightlight">先備知識</span>。例如：「能理解 Python
            基礎語法」、「能熟練運用 Class 與 OOP」等。
          </li>
          <li className="pl-[22px] -indent-[22px]">
            <span className="subTitle">主題標籤 Labels：</span>
            <span className="hightlight">必填、公開</span>
            。請填寫 1~4 個該議程相關的
            <span className="hightlight">領域與知識標籤</span>，例如：ML、Data
            Science、資安紅隊、blockchain、社團等；錄取後會與講者溝通微調後公開於官網議程表。
          </li>
          <li className="pl-[22px] -indent-[22px]">
            <span className="subTitle">詳細說明 Description：</span>
            <span className="hightlight">必填</span>
            。不限字數，請盡可能<span className="hightlight">詳細說明</span>
            這個議程的相關細節，如議程架構、想傳達的內容及您認為可能可以說服審稿委員選擇您的稿件之資訊等，以利審稿委員更瞭解您的議程及想法。
          </li>
          <li>
            <span className="subTitle">附件 Attachment：</span>
            選填。可以附上程式碼、投影片草稿或任何您認為有助於我們瞭解您議程的附件，請再三確認是否有開啟共用權限。
          </li>
        </ul>
        <h3 className="my-4 text-h3-mobile text-light-blue md:text-h3">
          個人資料
        </h3>
        <p className="mb-2">
          除了暱稱 /
          名字、自我介紹被用於宣傳，其餘資訊僅需提供一人作為代表（當稿件同時有多位講者時），供議程組於聯絡時使用。
        </p>
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
      </section>
      <section id="review-process" className="-mt-[80px] pt-[80px] md:mb-16">
        <h2 className="text-h2-mobile font-extrabold text-light-blue md:text-h2">
          審稿方式
        </h2>
        <p className="leading-10">
          稿件均經議程組形式審查，交予該領域之審稿委員審稿。審稿委員由 SITCON
          工作人員、業界人士及學界人士組成。
        </p>
        <p>審稿委員將針對以下項目進行篩選：</p>
        <ul className="list-inside list-disc leading-10">
          <li>稿件內容：知識分享、經驗案例、想法觀點是否獨特等。</li>
          <li>
            表達能力：提供的資料是否有條理、文句暢通，以及提供資料之完整度。完整的資料能讓審稿委員更清楚了解演講細節。
          </li>
          <li>
            適合聽眾：稿件是否適合 SITCON
            大多數的與會者。經我們評估比較熱門的議程，將安排在較大的演講廳。
          </li>
        </ul>
      </section>
      <div>
        <CodeOfConduct />
      </div>
    </div>
  );
}
