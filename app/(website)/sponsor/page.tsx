import Image from "next/image";
import sponsorList from "./sponsors.json";

export default function Page() {
  return (
    <div className="space-y-32">
      {/* 支持我們 */}
      <div className="items-start text-normal-mobile md:text-normal">
        <h1 className="pb-[23px] text-h1-mobile font-bold md:pb-[38px] md:text-h1">
          支持我們
        </h1>
        <p className="max-w-[685px] pb-[23px] leading-loose md:pb-[54px]">
          十年以來，SITCON
          一直秉持著不向與會者收費的原則來舉辦資訊研討會，不僅創造許多學生們交流、教學互長的機會，也帶領無數學子踏入資訊的殿堂。
        </p>
        <div className="flex flex-col flex-wrap gap-4 pb-9 sm:flex-row sm:space-x-7 md:pb-16">
          <div className="relative h-[176px] w-[396px] sm:h-[226px] sm:w-[238px]">
            <Image
              src="https://placehold.co/238x226"
              alt="Sponsor Image"
              fill
              className="rounded-3xl object-cover"
            />
          </div>
          <div className="relative h-[176px] w-[396px] sm:h-[226px] sm:w-[238px]">
            <Image
              src="https://placehold.co/238x226"
              alt="Sponsor Image"
              fill
              className="rounded-3xl object-cover"
            />
          </div>
          <div className="relative h-[176px] w-[396px] sm:h-[226px] sm:w-[238px]">
            <Image
              src="https://placehold.co/238x226"
              alt="Sponsor Image"
              fill
              className="rounded-3xl object-cover"
            />
          </div>
          <div className="relative h-[176px] w-[396px] sm:h-[226px] sm:w-[238px]">
            <Image
              src="https://placehold.co/238x226"
              alt="Sponsor Image"
              fill
              className="rounded-3xl object-cover"
            />
          </div>
        </div>
        <p className="max-w-[685px] pb-[55px] leading-loose tracking-wider md:tracking-normal">
          而維繫學生們的資訊交流平台，除了有賴志工們的努力及貢獻，亦十分需要在資金上的支持。
          教育不只在課本裡，如果您也認同 SITCON 的理念，歡迎點擊下方「
          <a
            href="https://ocf.neticrm.tw/"
            className="underline underline-offset-2"
          >
            個人贊助
          </a>
          」或「
          <a
            href="https://i.sitcon.org/2022cfs-form"
            className="underline underline-offset-2"
          >
            索取贊助徵求書
          </a>
          」按鈕以了解詳細的合作方案，或是寄信至{" "}
          <a
            href="mailto:contact@sitcon.org"
            className="underline underline-offset-2"
          >
            contact@sitcon.org
          </a>{" "}
          與我們聯繫，商酌更多的合作方式！
          扶持資訊教育，讓我們一同使更多的臺灣學子能在舞台上展現自我、相互成長！
        </p>
        <div className="flex justify-center space-x-7 md:justify-normal">
          <button className="h-[60px] w-[153px] rounded-full bg-primary text-black">
            個人贊助
          </button>
          <button className="h-[60px] w-[154px] rounded-full bg-primary text-black">
            索取贊助徵求書
          </button>
        </div>
      </div>

      {/* 主辦單位 */}
      <div className="items-center text-normal-mobile md:text-normal">
        <h1 className="pb-[41px] text-center text-h1-mobile font-bold md:pb-[55px] md:text-h1">
          主辦單位
        </h1>
        <h2 className="pb-[14px] text-center text-h2-mobile font-bold md:pb-[69px] md:text-h2">
          SITCON 學生計算機年會籌備團隊
        </h2>
        <div className="flex justify-center pb-[29px] md:pb-[74px]">
          <Image
            src="https://placehold.co/385x109?text=SITCON%20Logo%20385x109.4"
            alt="SITCON Logo"
            width={385}
            height={109}
          />
        </div>
        <div className="flex justify-center">
          <p className="max-w-[685px]">
            SITCON 學生計算機年會 (Students’ Information Technology Conference)
            是一個由各校同學於網路串聯發起，鼓勵自發學習、切磋成長的學生社群。
            <br />
            <br />
            因為熱愛資訊領域、知道尋找興趣相近夥伴的不容易，籌備團隊從 2013
            年以來，便致力於連結對資訊科技相關領域有興趣的學生們，透過每年三月的研討會分享彼此所學，在每週的定期聚交流精進。發展至今，SITCON
            除了是東亞最大的學生資訊社群與研討會，各地參與者也藉由夏令營、一小時學程式
            (Hour of
            Code)、黑客松等不同的面向活動，推廣創新、實作、教學相長、以及開源貢獻的精神與理念；在台灣與海外各地，都有
            SITCON 參與者的身影。
          </p>
        </div>
      </div>

      {/* 共同主辦 */}
      <div className="items-center text-normal-mobile md:text-normal">
        <h1 className="pb-[56px] text-center text-h1-mobile font-bold md:text-h1">
          共同主辦
        </h1>
        <div className="justify-center md:flex md:space-x-6">
          <div className="flex flex-col items-center justify-center pb-[116px] md:pb-0">
            <h2 className="text-h2-mobile font-bold md:text-h2">
              中央研究院資訊科學研究所
            </h2>
            <Image
              src="https://placehold.co/312x194"
              alt="中央研究院資訊科學研究所"
              width={312}
              height={194}
              className="py-[27.5px]"
            />
            <p className="max-w-[396px] leading-loose md:max-w-[508px]">
              中央研究院資訊科學研究所於 1977 年開始設立籌備處，歷經五年籌備，
              於 1982 年 9
              月正式成立研究所，是中央研究院數理組十一個單位之一。目前編制內有
              39 位研究人員，另外有 29 位博士後研究學者，將近 300
              位專任之資訊技術人員與非全時之研究助理，支援資訊領域之研究與系統之開發。「件件工作，反映自我，凡經我手，必為佳作」是全體同仁一致秉持的工作信念，重視工作之卓越品質，發揮最佳綜效之團隊精神。
            </p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <h2 className="text-h2-mobile font-bold md:text-h2">
              財團法人開放文化基金會
            </h2>
            <Image
              src="https://placehold.co/439x194"
              alt="中央研究院資訊科學研究所"
              width={439}
              height={194}
              className="py-[27.5px]"
            />
            <p className="max-w-[396px] leading-loose md:max-w-[509px]">
              開放文化基金會成立於 2014
              年，由多個開源社群及活動組織共同發起，希望協助台灣蓬勃的開放社群，進一步促進開放源碼、開放資料、開放硬體等自由精神，能更廣泛的於各領域中應用，同時也協助政府、企業及非政府組織更能了解開源軟體的優勢、開放資料的重要，進而推廣開放協作的文化。
              2015
              年起我們除了支援本地社群主辦多場中大型活動，也和英國代表處、美國在台協會及世界銀行等單位共同舉辦各種主題講座，深耕台灣的開放文化並與國際交流。
            </p>
          </div>
        </div>
      </div>

      {/* 協辦單位 */}
      <div className="items-center text-normal-mobile md:text-normal">
        <h1 className="pb-[42px] text-center text-h1-mobile font-bold md:pb-[40px] md:text-h1">
          協辦單位
        </h1>
        <h2 className="pb-[19px] text-center text-h2-mobile font-bold md:pb-10 md:text-h2">
          單位名稱
        </h2>
        <div className="flex justify-center">
          <Image
            src="https://placehold.co/160x105?text=Logo%20160x105"
            alt="單位名稱"
            width={160}
            height={105}
            className="items-center justify-center pb-10"
          />
        </div>
        <div className="flex justify-center">
          <p className="max-w-[686px] text-center leading-loose">
            TEXT TO BE FILLED HERE
          </p>
        </div>
      </div>

      {/* 贊助夥伴 */}
      <div className="items-center text-normal-mobile md:text-normal">
        <h1 className="pb-[56px] text-center text-h1-mobile font-bold md:text-h1">
          贊助夥伴
        </h1>
        <div className="space-y-12">
          <div>
            {/* 領航級 */}
            <h2 className="pb-6 text-center text-h2-mobile font-bold md:text-h2">
              領航級
            </h2>
            <div className="flex justify-center">
              <div className="flex h-[133px] w-[189px] items-center justify-center rounded-2xl bg-white md:h-96 md:w-80">
                <div className="relative h-[69px] w-[91px] md:h-[160px] md:w-[244px]">
                  <Image
                    src={sponsorList.level1[0].image}
                    alt={sponsorList.level1[0].name}
                    fill
                    className="rounded-md"
                  />
                </div>
              </div>
            </div>
          </div>
          {/* 深耕級 */}
          <div>
            <h2 className="pb-6 text-center text-h2-mobile font-bold md:text-h2">
              深耕級
            </h2>
            <div className="grid grid-cols-2 justify-center gap-x-4 gap-y-[15px] md:grid-cols-5 md:gap-x-5 md:gap-y-[27px]">
              {sponsorList.level2.map((brand, index) => (
                <div
                  key={brand.name || index}
                  className="flex h-[133px] w-[189px] items-center justify-center rounded-xl bg-white md:h-[205px] md:w-[192px]"
                >
                  <div className="relative h-[69px] w-[91px] md:h-[105px] md:w-[160px]">
                    <Image
                      src={brand.image}
                      alt={brand.name}
                      fill
                      className="rounded-md"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 前瞻級 */}
          <div>
            <h2 className="pb-6 text-center text-h2-mobile font-bold md:text-h2">
              前瞻級
            </h2>
            <div className="grid grid-cols-2 justify-center gap-x-4 gap-y-[15px] md:grid-cols-5 md:gap-x-5 md:gap-y-[27px]">
              {sponsorList.level3.map((brand, index) => (
                <div
                  key={brand.name || index}
                  className="flex h-[133px] w-[189px] items-center justify-center rounded-xl bg-white md:h-[205px] md:w-[192px]"
                >
                  <div className="relative h-[69px] w-[91px] md:h-[105px] md:w-[160px]">
                    <Image
                      src={brand.image}
                      alt={brand.name}
                      fill
                      className="rounded-md"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 新芽級 */}
          <div>
            <h2 className="pb-6 text-center text-h2-mobile font-bold md:text-h2">
              新芽級
            </h2>
            <div className="grid grid-cols-2 justify-center gap-x-4 gap-y-[15px] md:grid-cols-5 md:gap-x-5 md:gap-y-[27px]">
              {sponsorList.level4.map((brand, index) => (
                <div
                  key={brand.name || index}
                  className="flex h-[133px] w-[189px] items-center justify-center rounded-xl bg-white md:h-[205px] md:w-[192px]"
                >
                  <div className="relative h-[69px] w-[91px] md:h-[105px] md:w-[160px]">
                    <Image
                      src={brand.image}
                      alt={brand.name}
                      fill
                      className="rounded-md"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 特別感謝 */}
          <div>
            <h1 className="pb-6 text-center text-h1-mobile font-bold md:text-h1">
              特別感謝
            </h1>
            <div className="grid grid-cols-2 justify-center gap-x-4 gap-y-[15px] md:grid-cols-5 md:gap-x-5 md:gap-y-[27px]">
              {sponsorList.special_thanks.map((brand, index) => (
                <div
                  key={brand.name || index}
                  className="flex h-[133px] w-[189px] items-center justify-center rounded-xl bg-white md:h-[205px] md:w-[192px]"
                >
                  <div className="relative h-[69px] w-[91px] md:h-[105px] md:w-[160px]">
                    <Image
                      src={brand.image}
                      alt={brand.name}
                      fill
                      className="rounded-md"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 媒體夥伴 */}
          <div>
            <h1 className="pb-6 text-center text-h1-mobile font-bold md:text-h1">
              媒體夥伴
            </h1>
            <div className="grid grid-cols-2 justify-center gap-x-4 gap-y-[15px] md:grid-cols-5 md:gap-x-5 md:gap-y-[27px]">
              {sponsorList.media.map((brand, index) => (
                <div
                  key={brand.name || index}
                  className="flex h-[133px] w-[189px] items-center justify-center rounded-xl bg-white md:h-[205px] md:w-[192px]"
                >
                  <div className="relative h-[69px] w-[91px] md:h-[105px] md:w-[160px]">
                    <Image
                      src={brand.image}
                      alt={brand.name}
                      fill
                      className="rounded-md"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
