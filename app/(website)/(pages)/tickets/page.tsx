import Link from "next/link";
import Image from "next/image";
export default function Page() {
  return (
    <div className="flex flex-col items-start justify-center gap-24">
      <section id="RegisterInfo" className="flex flex-col items-start gap-4">
        <h1 className="text-h1-mobile font-bold md:text-h1">報名資訊</h1>
        <p className="w-full leading-[200%] md:w-[70%]">
          SITCON
          年會堅持不收費原則，秉持著「降低學生參與門檻」的理念，預算全數由個人／企業贊助或是政府／教育單位協助，若您也認同
          SITCON 的理念，歡迎支持我們。
        </p>
        <button className="flex h-[60px] w-[190px] items-center justify-center self-center rounded-full bg-primary text-black md:mb-10 md:w-[153px] md:self-start">
          <Link className="" href="/tickets">
            支持我們
          </Link>
        </button>
        {/* ticket 1 */}
        <div className="box-border flex w-full flex-col items-center justify-between rounded-xl border-white bg-background-light px-2 py-10 md:flex-row md:rounded-none md:border md:px-0 md:py-0">
          <div className="z-10 ml-[-1px] box-border hidden aspect-1/2 rounded-br-full rounded-tr-full border border-l-transparent border-r-white bg-background md:block md:w-1/12" />
          <div className="flex flex-col items-center justify-center md:w-3/12 md:py-10">
            <Image
              src={TicketSvg.src}
              alt="ticket Icon"
              width={120}
              height={120}
            />
            <p className="mt-8 text-h3-mobile font-bold md:text-h3">一般票</p>
          </div>

          <div className="flex flex-col items-center justify-center py-4 md:w-4/12 md:py-10">
            <ul className="w-[80%] list-inside list-disc text-normal-mobile leading-[200%] md:text-start md:text-normal">
              <li className="listItem mt-4 md:mt-0 md:pl-[-22px]">
                第一波售票：01/12 20:00 ～01/25 23:59
              </li>
              <li className="listItem mt-4 md:mt-0 md:pl-[-22px]">
                第二波售票：02/09 20:00 ～02/22 23:59
              </li>
            </ul>
            <LinkButton
              link={"/website/ticket_dates.ics"}
              target="_blank"
              text="加入行事曆"
              className="mt-8 bg-[#9c9c9c] text-[#ffffff] hover:brightness-90 md:w-full md:bg-[#ffffff] md:text-background-light"
            />
            {/* <button className="mt-8 w-full rounded-full bg-[#9c9c9c] p-3 text-normal font-semibold text-[#ffffff] md:bg-[#ffffff] md:text-background-light"> */}
            {/* 加入行事曆 */}
            {/* </button> */}
          </div>
          <div className="flex h-full justify-center md:w-1/12">
            <div className="dashLine" />
          </div>
          <div className="mt-4 flex items-center justify-center md:w-2/12">
            <LinkButton
              link={"https://sitcon.kktix.cc/events/sitcon2025"}
              target="_blank"
              text="立即取得"
              className="ml-[-4px] md:mr-4 md:w-full"
            />
          </div>
          <div className="right-0 z-10 mr-[-1px] box-border hidden aspect-1/2 rounded-bl-full rounded-tl-full border border-l-white border-r-background bg-background md:block md:w-1/12" />
        </div>
        {/* ticket 2 */}
        <div className="box-border flex w-full flex-col items-center justify-between rounded-xl border-white bg-background-light px-2 py-10 md:flex-row md:rounded-none md:border md:px-0 md:py-0">
          <div className="z-10 ml-[-1px] box-border hidden aspect-1/2 rounded-br-full rounded-tr-full border border-l-transparent border-r-white bg-background md:block md:w-1/12" />
          <div className="flex flex-col items-center md:w-3/12 md:py-10">
            <span className="material-symbols-outlined mt-16 scale-[600%] text-[#ffffff]">
              flight
            </span>
            <p className="mt-20 text-h3-mobile font-bold md:text-h3">
              遠道而來票
            </p>
          </div>
          <div className="flex flex-col items-center justify-center py-4 md:w-4/12 md:py-10">
            <ul className="w-[80%] list-inside list-disc text-normal-mobile leading-[200%] md:text-start md:text-normal">
              <li className="listItem mt-4 md:mt-0 md:pl-[-22px]">
                資格限制：住在偏鄉或離島、海外地區的學生。
              </li>
              <li className="listItem mt-4 md:mt-0 md:pl-[-22px]">
                先到先審制，報名者需在 2025/01/21 23:59 前填寫申請表單。
                先到先審制，報名者需在 2025/01/21 23:59 前填寫申請表單。
              </li>
              <li className="listItem mt-4 !pl-0 md:mt-0 md:pl-[-22px]">
                申請資格及更詳細的申請說明，請參考 SITCON 2024 遠道而來票。
              </li>
            </ul>
          </div>
          <div className="flex h-full justify-center md:w-1/12">
            <div className="dashLine" />
          </div>
          <div className="mt-4 flex items-center justify-center md:w-2/12">
            <LinkButton
              link={"https://hackmd.io/@SITCON/H18WacxQ1x"}
              target="_blank"
              text="立即取得"
              className="ml-[-4px] md:mr-4 md:w-full"
            />
          </div>

          <div className="right-0 z-10 mr-[-1px] box-border hidden aspect-1/2 rounded-bl-full rounded-tl-full border border-l-white border-r-background bg-background md:block md:w-1/12" />
        </div>
        {/* ticket 3 */}
        <div className="box-border flex w-full flex-col items-center justify-between rounded-xl border-white bg-background-light px-2 py-10 md:flex-row md:rounded-none md:border md:px-0 md:py-0">
          <div className="z-10 ml-[-1px] box-border hidden aspect-1/2 rounded-br-full rounded-tr-full border border-l-transparent border-r-white bg-background md:block md:w-1/12" />
          <div className="flex flex-col items-center justify-center md:w-3/12 md:py-10">
            <span className="material-symbols-outlined mt-16 scale-[600%] text-[#ffffff]">
              crowdsource
            </span>
            <p className="mt-20 w-[90%] text-center text-h3-mobile font-bold md:text-h3">
              SITCON x OSCVPass 開源貢獻票
            </p>
          </div>
          <div className="flex flex-col items-center justify-center py-4 md:w-4/12 md:py-10">
            <ul className="w-[80%] list-inside list-disc text-normal-mobile leading-[200%] md:text-start md:text-normal">
              <li className="listItem mt-4 md:mt-0 md:pl-[-22px]">
                資格限制：對開源專案有貢獻者。
              </li>
              <li className="listItem mt-4 md:mt-0 md:pl-[-22px]">
                在 2025/01/21 23:59 前申請且通過者，有機會可以搶到 SITCON 2025
                開源貢獻票邀請碼。申請表單、申請資格及更詳細的申請說明，請參考
                <Link
                  className="link"
                  href={"https://ocf.tw/p/oscvpass/"}
                  target="_blank"
                >
                  開源貢獻者快速通關
                </Link>
                在 2025/01/21 23:59 前申請且通過者，有機會可以搶到 SITCON 2025
                開源貢獻票邀請碼。申請表單、申請資格及更詳細的申請說明，請參考
                <Link
                  className="link"
                  href={"https://ocf.tw/p/oscvpass/"}
                  target="_blank"
                >
                  開源貢獻者快速通關
                </Link>
              </li>
              <li className="listItem mt-4 md:mt-0 md:pl-[-22px]">
                關於歷年來 OSCVPass 申請通過者的專案列表，請參考{" "}
                <Link
                  className="link"
                  href={
                    "https://oscvpass.ocf.tw/?fbclid=IwAR0sFst9sZwPoLKRUwzOIpg-M_V7gZSZu3lvStcV3rqpRnZKjT6A1pl2nRU"
                  }
                  target="_blank"
                >
                  OSCVPass 專案介紹
                </Link>{" "}
                。
                關於歷年來 OSCVPass 申請通過者的專案列表，請參考{" "}
                <Link
                  className="link"
                  href={
                    "https://oscvpass.ocf.tw/?fbclid=IwAR0sFst9sZwPoLKRUwzOIpg-M_V7gZSZu3lvStcV3rqpRnZKjT6A1pl2nRU"
                  }
                  target="_blank"
                >
                  OSCVPass 專案介紹
                </Link>{" "}
                。
              </li>
            </ul>
          </div>
          <div className="flex h-full justify-center md:w-1/12">
            <div className="dashLine" />
          </div>
          <div className="mt-4 flex items-center justify-center md:w-2/12">
            <LinkButton
              link={"https://ocf.tw/p/oscvpass/"}
              target="_blank"
              text="立即取得"
              className="ml-[-4px] md:mr-4 md:w-full"
            />
          </div>

          <div className="right-0 z-10 mr-[-1px] box-border hidden aspect-1/2 rounded-bl-full rounded-tl-full border border-l-white border-r-background bg-background md:block md:w-1/12" />
        </div>
      </section>
      <section
        id="SubmitInfo"
        className="flex w-full flex-col items-start gap-4 leading-[200%] md:w-[70%]"
      >
        <h1 className="mb-8 text-h1-mobile font-bold md:text-h1">投稿資訊</h1>
        <p className="">
          SITCON
          期望成為學生展現自己的舞台，如果你有想要與大家分享的經驗、技術或專案，我們歡迎任何與資訊或電腦軟硬體相關的講題。
        </p>
        <p>歡迎於 2024/01/24 前用以下形式的投搞</p>
        <li>海報投稿：以靜態海報展出學生個人或團隊專案研究作品。</li>
        <p>歡迎於 2024/01/20 前用以下形式的投搞（已截止）</p>
        <li>
          一般議程：10 分鐘與 40 分鐘的議程，帶給會眾知識的洗禮與思想的壯遊。
        </li>
        <li>
          開放式議程：40
          分鐘的議程，不限定進行方式，歡迎任何非傳統、實現性質的形式進行此場議程。
        </li>
        <button className="mt-6 flex h-[60px] w-[190px] items-center justify-center self-center rounded-full bg-primary p-4 text-normal text-black md:w-[153px] md:self-start">
          了解更多
        </button>
      </section>
    </div>
  );
}
