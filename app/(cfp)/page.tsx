import Link from "next/link";

export default function Home() {
  return (
    <>
      <div
        className="relative h-[calc(100svh-64px)] min-h-[600px] bg-white bg-cover bg-[left_20%_center] lg:bg-center"
        style={{
          backgroundImage: `url('')`,
        }}
      >
        <div className="absolute bottom-14 flex w-full flex-col">
          <div className="flex flex-row justify-center gap-5">
            <Link
              href="#"
              className="w-[140px] rounded-[50px] bg-[#FFFFFF] py-1 text-center"
            >
              前往投稿
            </Link>
            <Link
              href="#"
              className="w-[140px] rounded-[50px] bg-[#FFFFFF] py-1 text-center"
            >
              加入行事曆
            </Link>
          </div>
        </div>
      </div>
      <div className="relative grid grid-cols-2 bg-light-brown bg-cover bg-[left_20%_center] px-10 lg:bg-center">
        <div className="flex">
          <div className="gap-24 py-32">
            <div>
              <h1 className="text-h1 font-black tracking-[2px] text-blue">
                關於 SITCON
              </h1>
              <p className="text-justify text-normal leading-7 text-blue">
                學生計算機年會（Students’ Information Technology Conference）自
                2013
                年發起，以學生為本、由學生自發舉辦，長期投身學生資訊教育與推廣開源精神，希望引領更多學子踏入資訊的殿堂，更冀望所有對資訊有興趣的學生，能夠在年會裏齊聚一堂，彼此激盪、傳承、啟發，達到「學以致用、教學相長」的實際展現。
              </p>
            </div>
            <div>
              <h1 className="pt-16 text-h1 font-black tracking-[2px] text-blue">
                參與討論
              </h1>
              <p className="text-justify text-normal leading-7 text-blue">
                SITCON
                是個開放的社群，許多籌備的相關事項都會在公開的郵件論壇上進行討論，如果有興趣參與，歡迎訂閱
                SITCON 的郵件論壇並貢獻你的想法！
                <br />
                <br /> 若你想進一步了解過往討論的內容，也歡迎到 GitLab 上查看
                SITCON 2024 的籌備歷程。
              </p>
            </div>
            <div className="flex gap-4 pt-14">
              <Link
                href="https://groups.google.com/g/sitcon-general/"
                className="w-[140px] rounded-[50px] bg-[#D9D9D9] py-3 text-center font-bold"
              >
                訂閱郵件論壇
              </Link>
              <Link
                href="https://gitlab.com/sitcon-tw/2024/board"
                className="w-[140px] rounded-[50px] bg-[#D9D9D9] py-3 text-center font-bold"
              >
                查看 GitLab
              </Link>
            </div>
          </div>
        </div>
        <div className="flex"></div>
      </div>
      <div className="relative grid grid-cols-3 gap-4 bg-light-brown bg-cover bg-[left_20%_center] px-10 lg:bg-center">
        <div className="col-span-1 h-auto">
          <div className="rounded-[32px] border-2 border-blue bg-white p-6">
            <div>
              <h1 className="text-h1 font-black tracking-[2px] text-blue">
                支持我們
              </h1>
              <p className="text-justify text-normal leading-7 text-blue">
                SITCON
                秉持著不向與會者收費的原則，十年以來致力於推廣學生資訊教育，創造學生交流、教學互長的機會。
                <br />
                <br />
                如果您也認同 SITCON 的理念，歡迎以行動支持 SITCON
                的運作，點擊下方「個人贊助方案」，您的支持將會成為我們的動力，讓更多學生能在舞台上展現自我、讓資訊教育遍及臺灣的每個角落！
                <br />
                <br />
                若您有興趣成為我們的贊助夥伴，歡迎點擊下方「索取贊助徵求書」，了解詳細合作方案，或是利用
                contact@sitcon.org 聯絡我們，商討更多的合作方式！
              </p>
            </div>
            <div className="flex-row pt-8">
              <a className="flex items-center justify-end text-h1 font-bold text-red">
                我要贊助
                <span className="material-icons" style={{ fontSize: "62px" }}>
                  north_east
                </span>
              </a>
              <a className="flex items-center justify-end text-h2 font-bold text-red">
                索取贊助徵求書
                <span className="material-icons" style={{ fontSize: "62px" }}>
                  north_east
                </span>
              </a>
            </div>
          </div>
        </div>
        <div className="col-span-2 grid grid-rows-2 gap-4">
          <div className="grid grid-cols-3 gap-4">
            <div className="col-span-2 rounded-[32px] border-2 border-blue bg-white p-6">
              <div>
                <h1 className="text-h2 font-semibold tracking-[2px] text-blue">
                  自 2013 以來，我們帶領了無數學子進入資訊的殿堂，更做到：
                </h1>
                <p className="text-justify text-normal leading-8 text-blue">
                  {">"} 累積逾 11,000 名與會者
                  <br />
                  {">"} 超過 400 位學生講者
                  <br />
                  {">"} 舉辦逾 400 場聚會和講座、8 場夏令營
                  <br />
                  {">"} 扶植近 1,100 名熱愛資訊的志工
                </p>
              </div>
            </div>
            <div className="col-span-1 rounded-[32px] border-2 border-blue bg-white p-6 bg-cover bg-center " style={{backgroundImage: `url('/cfp/stats/1.jpg')`}}></div>
          </div>
          <div className="grid grid-cols-3 gap-4">
            <div className="col-span-1 rounded-[32px] border-2 border-blue bg-white p-6 bg-cover bg-center " style={{backgroundImage: `url('/cfp/stats/2.jpg')`}}></div>
            <div className="col-span-2 rounded-[32px] border-2 border-blue bg-white p-6">
              <h1 className="text-h2 font-semibold tracking-[2px] text-blue">
                此外，我們也樂見企業與學生的近距離交流，成為我們的合作夥伴您可以：
              </h1>
              <p className="text-justify text-normal leading-8 text-blue">
                {">"} 接觸學生資訊人才
                <br />
                {">"} 提升品牌影響力
                <br />
                {">"} 深入學生群體
                <br />
                {">"} 推廣產品內容
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
