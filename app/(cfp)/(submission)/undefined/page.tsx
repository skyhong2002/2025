import Countdown from "../_components/countdown";
import Timeline from "../_components/timeline";
import CodeOfConduct from "../../_components/code-of-conduct";
import TableOfContent from "../_components/table-of-content";

export default function Page() {
  const sections = [
    { id: "important-dates", title: "重要時程" },
    { id: "session-types", title: "議程說明" },
    { id: "what-is-open-session", title: "什麼是開放式議程？" },
    { id: "submission-topics", title: "投稿方式" },
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
        開放式議程投稿
      </h1>
      <TableOfContent sections={sections} theme="red" />
      <Countdown />
      <section
        id="important-dates"
        className="my-4 -mt-[60px] space-y-4 pt-[80px]"
      >
        <h2 className="text-light-blue text-h2-mobile font-extrabold md:text-h2">
          重要時程
        </h2>
        <Timeline />
      </section>

      <section
        id="session-types"
        className="my-4 -mt-[60px] space-y-4 pt-[80px]"
      >
        <h2 className="text-light-blue text-h2-mobile font-extrabold md:text-h2">
          議程說明
        </h2>
        <p className="text-normal-mobile font-normal leading-loose tracking-wider md:text-normal">
          開放式議程分為 40 分鐘和 90
          分鐘兩種時長，該議程不限定進行方式，希望跳脫傳統議程框架，透過雙向互動、實作等，任何您想得到的非傳統形式進行此場議程。
        </p>
      </section>
      <section
        id="what-is-open-session"
        className="my-4 -mt-[60px] space-y-4 pt-[80px]"
      >
        <h2 className="text-light-blue text-h2-mobile font-extrabold md:text-h2">
          什麼是開放式議程？
        </h2>
        <p className="text-normal-mobile font-normal leading-loose tracking-wider md:text-normal">
          為帶給與會者更多元的議程內容，我們為講者提供了開放式議程這個選項，跳脫講者對聽眾單向陳述式的演講，開放式議程更加強調主講者和與會者的雙向交流。SITCON
          作為學生展現自己的舞台，我們期待以學生為主體的投稿，無論是實作工作坊、議題交流、社群分享或更多您想像得到能讓議程更加多元且具互動性的方式，我們都十分歡迎。
        </p>
      </section>
      <div className="grid grid-cols-1 grid-rows-4 gap-5 tablet:grid-cols-2 tablet:grid-rows-2">
        <SessionTypeBox title="實作工作坊形式">
          實作是學習一項新技能最直接的方式，您可以設計一個實務導向的工作坊，在介紹新技術的同時穿插應用的範例，讓會眾在過程中獲得成就感並帶走實用的技能。無論是軟體開發、工具使用，還是技術應用實作工作方的題目可以像是：
          從零開始開發一個簡單的聊天應用程式。 從數位音樂到 AI
          視覺藝術的創意應用。
        </SessionTypeBox>
        <SessionTypeBox title="議題交流形式">
          知識的交流不只受限於於演講，資訊發展快速，卻也延伸出許多可以深入討論的議題，我們期待透過講者的引言，拋磚引玉，激發聽眾的想法，透過多方觀點的交流，聽眾可以理解不同看法，進而發現新的思考方向。
          例如： 人工智慧是否會有自我意識？ 隱私權與數據共享如何找到平衡點？
        </SessionTypeBox>
        <SessionTypeBox title="社群分享形式">
          社群的力量在於凝聚志同道合的人，講者可以分享社群運營經驗，無論是分享如何推廣技術還是組織活動的秘訣，透過經驗分享，探討如何打造互助的社群環境，或介紹該社群所推廣的技術、理念與特色，讓更多人對此產生興趣。例如：
          如何吸引新手加入開源社群？ 如何帶領社群成員認識資料科學？
        </SessionTypeBox>
        <SessionTypeBox title="更多形式由您來創造">
          不只有上述的形式，我們非常歡迎其他形式的議程。
          無論是主持一場圓桌會議，一起腦力激盪，甚至舉辦一場小競賽，任何你想得到的非傳統議程形式都可以在開放式議程中進行！
        </SessionTypeBox>
      </div>
      <section
        id="submission-topics"
        className="my-4 -mt-[60px] space-y-4 pt-[80px]"
      >
        <h2 className="text-light-blue text-h2-mobile font-extrabold md:text-h2">
          投稿方式
        </h2>
        <div className="space-y-4">
          <h3 className="text-h3-mobile md:text-h3">稿件資訊</h3>
          <ul className="ml-2 text-normal-mobile font-normal leading-loose tracking-wider md:text-normal [&>li]:relative [&>li]:pl-4 before:[&>li]:absolute before:[&>li]:left-0 before:[&>li]:top-[0.8em] before:[&>li]:-translate-y-[1em] before:[&>li]:text-xl before:[&>li]:content-['.']">
            <li>題目 Title：必填、公開。請不要超出 20 字。</li>
            <li>
              摘要 Abstract：必填、公開。建議 150–250 字，使用於宣傳與網站公告。
            </li>
            <li>
              為何選擇開放式議程 Format Preference
              Explanation：必填。請簡述為什麼您認為開放式議程更適合此議程的內容或主題呈現。這部分可以包括您希望透過開放式議程達成的效果、氣氛或參與方式，以便審稿委員理解您的設計考量。
            </li>
            <li>
              進行模式 Method :
              必填、公開。不限字數，請詳細說明該議程預計如何和會眾互動，以及是否需要額外的工具，此項目將幫助會眾預期該如何參與此議程。
            </li>
            <li>
              議程大綱 Outline：必填。請說明該開放式議程的大綱及時間長度規劃。
            </li>
            <li>
              目標受眾 Target
              Audience：必填。請說明您期待該議程的目標受眾為怎麼樣的人。例如：「嚮往成為前端開發者的初學者」、「不知道該不該讀研究所的學生」等。
            </li>
            <li>
              先備知識 Prior
              Knowledge：必填、公開。請說明該議程的與會者所需具備的先備知識。例如：「能理解
              Python 基礎語法」、「略懂 108 課綱現況」等。
            </li>
            <li>
              主題標籤 Labels：必填、公開。請填寫 1~4
              個該議程相關的領域與知識標籤，例如：ML、Data
              Science、資安紅隊、blockchain、社團等；錄取後會與講者溝通微調後公開於官網議程表。
            </li>
            <li>
              詳細說明
              Description：必填。不限字數，請說明這個議程您認為重要的相關細節，以利審稿委員更瞭解您的議程。
            </li>
            <li>
              附件
              Attachment：選填。可以附上程式碼、投影片草稿或任何您認為有助於我們瞭解您議程的附件，請再三確認是否有開啟共用權限。
            </li>
          </ul>
        </div>
        <div className="space-y-4">
          <h3 className="text-h3-mobile md:text-h3">個人資料</h3>
          <div>
            <p className="leading-loose tracking-wider">
              除了暱稱 /
              名字、自我介紹被用於宣傳，其餘資訊僅需提供一人作為代表（當稿件同時有多位講者時），供議程組於聯絡時使用。
            </p>
            <ul className="ml-2 text-normal-mobile font-normal leading-loose tracking-wider md:text-normal [&>li]:relative [&>li]:pl-4 before:[&>li]:absolute before:[&>li]:left-0 before:[&>li]:top-[0.8em] before:[&>li]:-translate-y-[1em] before:[&>li]:text-xl before:[&>li]:content-['.']">
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
      </section>

      <section
        id="review-process"
        className="my-4 -mt-[60px] space-y-4 pt-[80px]"
      >
        <h2 className="text-light-blue text-h2-mobile font-extrabold md:text-h2">
          審稿方式
        </h2>
        <p className="text-normal-mobile font-normal leading-loose tracking-wider md:text-normal">
          稿件均經議程組形式審查，交予該領域之審稿委員審稿。審稿委員由 SITCON
          工作人員、業界人士及學界人士組成。
          <br />
          審稿委員將針對以下項目進行篩選：
        </p>
        <ul className="ml-2 text-normal-mobile font-normal leading-loose tracking-wider md:text-normal [&>li]:relative [&>li]:pl-4 before:[&>li]:absolute before:[&>li]:left-0 before:[&>li]:top-[0.8em] before:[&>li]:-translate-y-[1em] before:[&>li]:text-xl before:[&>li]:content-['.']">
          <li>
            稿件內容：講者是否熟悉這個題目、和會眾的交流效果、可執行性，以及是否符合開放式議程的宗旨，展現出創新和彈性的分享形式，能促進與會者的參與或啟發新的想法。
          </li>
          <li>
            表達能力：提供的資料是否有條理、文句暢通，提供資料（尤其是稿件的詳細說明）之完整度。我們偏好完整的資料，讓審稿委員更清楚了解演講細節。
          </li>
          <li>適合聽眾：稿件是否適合 SITCON 大多數的與會者討論。</li>
        </ul>
        <div className="py-1" />
      </section>

      <CodeOfConduct />

      {/* TODO: ADD FAQ HERE */}
    </div>
  );
}

function SessionTypeBox({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-4 rounded-lg border border-red bg-light-brown p-4 text-red">
      <h3 className="text-h3-mobile font-bold md:text-h3">{title}</h3>
      <p className="text-normal-mobile font-normal leading-loose tracking-wider md:text-normal">
        {children}
      </p>
    </div>
  );
}
