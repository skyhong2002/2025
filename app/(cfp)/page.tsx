"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

export default function Home() {
  const TARGET_DATE = "2025-01-21T23:59:59"; // 可以動態設置
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // 客戶端倒數計時邏輯
  function calculateTimeLeft(): TimeLeft {
    const now = new Date();
    const target = new Date(TARGET_DATE);
    const difference = target.getTime() - now.getTime();

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }

  useEffect(() => {
    const timerId = setInterval(() => {
      setTimeLeft(calculateTimeLeft()); // 更新倒數時間
    }, 1000);

    return () => clearInterval(timerId); // 清除計時器
  }, [timeLeft]); // 當 timeLeft 更新時觸發

  function formatToTwoDigits(num: number): string {
    return num.toString().padStart(2, "0");
  }

  return (
    <>
      <div
        className="relative h-[calc(100svh-64px)] min-h-[600px] bg-white max-[820px]:bg-gray bg-cover bg-[left_20%_center] max-sm:h-[calc(100svh-140px)] lg:bg-center"
        style={{
          backgroundImage: `url('')`,
        }}
      >
        <div className="absolute bottom-14 flex w-full flex-col gap-4">
          <div className="flex flex-col items-center justify-center">
            <div>
              <p className="text-normal max-[820px]:text-h3 max-sm:text-[22px]">
                距離海報投稿截止還有
              </p>
            </div>
            <div className="flex flex-row max-sm:border-2 max-sm:border-black max-sm:rounded-[208px] max-sm:justify-center max-sm:p-3 max-sm:w-[80%]">
              {Object.entries(timeLeft).map(([key, value]) => (
                <div key={key}>
                  <div className="flex flex-row items-center justify-center">
                    <AnimatePresence mode="popLayout" initial={false}>
                      <motion.span
                        key={value}
                        initial={{
                          opacity: 0,
                          y: "-0.25em",
                          scaleY: 0.75,
                          filter: "blur(0.1em)",
                          transformOrigin: "top",
                        }}
                        animate={{
                          opacity: 1,
                          y: 0,
                          scaleY: 1,
                          filter: "blur(0px)",
                        }}
                        exit={{
                          opacity: 0,
                          y: "0.25em",
                          scaleY: 0.75,
                          filter: "blur(0.1em)",
                          transformOrigin: "bottom",
                        }}
                        className="text-5xl max-sm:text-5xl max-[820px]:text-6xl"
                      >
                        {formatToTwoDigits(value)}
                      </motion.span>
                    </AnimatePresence>
                    {key != "seconds" ? (
                      <span className="px-1 text-3xl max-[820px]:text-4xl">
                        :
                      </span>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-row justify-center gap-5 max-sm:grid max-sm:grid-cols-2 max-sm:px-4">
            <Link
              href="#"
              className="w-[140px] rounded-[50px] bg-[#FFFFFF] py-1 text-center max-[820px]:text-[18px] max-[820px]:font-semibold max-sm:py-2 max-sm:w-full max-sm:text-h2-mobile"
            >
              前往投稿
            </Link>
            <Link
              href="#"
              className="w-[140px] rounded-[50px] bg-[#FFFFFF] py-1 text-center max-[820px]:text-[18px] max-sm:py-2 max-sm:w-full max-sm:text-h2-mobile"
            >
              加入行事曆
            </Link>
          </div>
        </div>
      </div>
      <div className="relative [820px]:grid [820px]:grid-cols-2 bg-light-brown max-sm:bg-blue max-sm:text-center bg-cover bg-[left_20%_center] px-10 max-[820px]:px-6 lg:bg-center">
        <div className="flex">
          <div className="gap-24 py-32">
            <div>
              <h1 className="text-h1 max-sm:text-h1-mobile max-sm:font-semibold font-black tracking-[2px] text-blue max-[820px]:text-black">
                關於 SITCON
              </h1>
              <p className="text-justify text-normal leading-7 max-sm:leading-9 text-blue max-sm:text-black">
                學生計算機年會（Students’ Information Technology Conference）自
                2013
                年發起，以學生為本、由學生自發舉辦，長期投身學生資訊教育與推廣開源精神，希望引領更多學子踏入資訊的殿堂，更冀望所有對資訊有興趣的學生，能夠在年會裏齊聚一堂，彼此激盪、傳承、啟發，達到「學以致用、教學相長」的實際展現。
              </p>
            </div>
            <div>
              <h1 className="pt-16 text-h1 max-sm:text-h1-mobile max-sm:font-semibold font-black tracking-[2px] text-blue max-[820px]:text-black">
                參與討論
              </h1>
              <p className="text-justify text-normal leading-7 max-sm:leading-9 text-blue max-sm:text-black">
                SITCON
                是個開放的社群，許多籌備的相關事項都會在公開的郵件論壇上進行討論，如果有興趣參與，歡迎訂閱
                SITCON 的郵件論壇並貢獻你的想法！
                <br />
                <br /> 若你想進一步了解過往討論的內容，也歡迎到 GitLab 上查看
                SITCON 2024 的籌備歷程。
              </p>
            </div>
            <div className="[820px]:flex gap-4 pt-14 max-[820px]:grid max-[820px]:grid-cols-3 max-sm:grid-cols-2 max-[820px]:gap-5">
              <Link
                href="https://groups.google.com/g/sitcon-general/"
                className="w-[140px] rounded-[50px] max-sm:rounded-[72px] bg-gray py-3 text-center font-bold max-[820px]:col-span-1 max-[820px]:w-auto max-[820px]:rounded-lg max-[820px]:text-[18px] max-[712px]:my-auto max-[712px]:text-[14px] max-sm:text-[18px] max-sm:font-normal"
              >
                訂閱郵件論壇
              </Link>
              <Link
                href="https://gitlab.com/sitcon-tw/2024/board"
                className="w-[140px] rounded-[50px] max-sm:rounded-[72px] bg-gray py-3 text-center font-bold max-[820px]:col-span-1 max-[820px]:w-auto max-[820px]:rounded-lg max-[820px]:text-[18px] max-[712px]:my-auto max-[712px]:text-[14px] max-sm:text-[18px] max-sm:font-normal"
              >
                查看 GitLab
              </Link>
            </div>
          </div>
        </div>
        <div className="flex"></div>
      </div>

      {/* Desktop Layout */}
      <div className="relative grid grid-cols-3 gap-4 bg-light-brown bg-cover bg-[left_20%_center] px-10 max-[820px]:hidden lg:bg-center">
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
            <div className="relative col-span-2 rounded-[32px] border-2 border-blue bg-white p-6">
              <div>
                <h1 className="text-h2 font-semibold tracking-[2px] text-blue">
                  自 2013 以來，我們帶領了無數學子進入資訊的殿堂，更做到：
                </h1>
                <p className="absolute bottom-6 left-6 text-justify text-normal leading-8 text-blue">
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
            <div
              className="col-span-1 rounded-[32px] border-2 border-blue bg-white bg-cover bg-center p-6"
              style={{ backgroundImage: `url('/cfp/stats/1.jpg')` }}
            ></div>
          </div>
          <div className="grid grid-cols-3 gap-4">
            <div
              className="col-span-1 rounded-[32px] border-2 border-blue bg-white bg-cover bg-center p-6"
              style={{ backgroundImage: `url('/cfp/stats/2.jpg')` }}
            ></div>
            <div className="relative col-span-2 rounded-[32px] border-2 border-blue bg-white p-6">
              <h1 className="text-h2 font-semibold tracking-[2px] text-blue">
                此外，我們也樂見企業與學生的近距離交流，成為我們的合作夥伴您可以：
              </h1>
              <p className="absolute bottom-6 left-6 text-justify text-normal leading-8 text-blue">
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

      {/* Tablet Layout */}
      <div className="[820px]:hidden relative grid grid-rows-2 gap-4 bg-light-brown bg-cover bg-[left_20%_center] px-10 max-sm:hidden lg:bg-center">
        <div className="row-span-1 grid h-auto grid-cols-2 gap-4">
          <div className="col-span-1 rounded-[32px] border-2 border-blue bg-white p-6">
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
          <div className="col-span-1 grid grid-rows-2 gap-4">
            <div className="relative col-span-2 rounded-[32px] border-2 border-blue bg-white p-6">
              <div>
                <h1 className="text-[26px] font-semibold tracking-[2px] text-blue">
                  自 2013 以來，我們帶領了無數學子進入資訊的殿堂，更做到：
                </h1>
                <p className="absolute bottom-6 left-6 text-justify text-normal leading-8 text-blue">
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
            <div className="relative col-span-2 rounded-[32px] border-2 border-blue bg-white p-6">
              <h1 className="text-[26px] font-semibold tracking-[2px] text-blue">
                此外，我們也樂見企業與學生的近距離交流，成為我們的合作夥伴您可以：
              </h1>
              <p className="absolute bottom-6 left-6 text-justify text-normal leading-8 text-blue">
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
        <div className="row-span-1 grid grid-cols-3 gap-4">
          <div
            className="col-span-2 h-[360px] rounded-[32px] border-2 border-blue bg-white bg-cover bg-center p-6"
            style={{ backgroundImage: `url('/cfp/stats/2.jpg')` }}
          ></div>
          <div
            className="col-span-1 h-[360px] rounded-[32px] border-2 border-blue bg-white bg-cover bg-center p-6"
            style={{ backgroundImage: `url('/cfp/stats/1.jpg')` }}
          ></div>
        </div>
      </div>

      {/* Phone Layout */}
      <div
        className="sm:hidden flex flex-col relative pb-6 gap-4 bg-blue bg-cover bg-[left_20%_center] px-10 lg:bg-center">
        <h1 className="text-h1-mobile font-semibold text-black text-center">
          支持我們
        </h1>
        <div className="bg-gray p-8">
          <h1 className="text-[26px] font-semibold tracking-[2px] text-black">
            自 2013 以來，我們帶領了無數學子進入資訊的殿堂，更做到：
          </h1>
          <p className="pt-5 text-justify text-normal-mobile font-semibold leading-8 text-black">
            {">"} 累積逾 11,000 名與會者
            <br/>
            {">"} 超過 400 位學生講者
            <br/>
            {">"} 舉辦逾 400 場聚會和講座、8 場夏令營
            <br/>
            {">"} 扶植近 1,100 名熱愛資訊的志工
          </p>
        </div>
        <div className="bg-gray p-8">
          <h1 className="text-[26px] font-semibold tracking-[2px] text-black">
            此外，我們也樂見企業與學生的近距離交流，成為我們的合作夥伴您可以：
          </h1>
          <p className="pt-5 text-justify text-normal-mobile font-semibold leading-8 text-black">
            {">"} 接觸學生資訊人才
            <br/>
            {">"} 提升品牌影響力
            <br/>
            {">"} 深入學生群體
            <br/>
            {">"} 推廣產品內容
          </p>
        </div>
        <div className="bg-gray p-8">
          <p className="text-justify text-normal-mobile font-normal leading-6 text-black">
            SITCON
            秉持著不向與會者收費的原則，十年以來致力於推廣學生資訊教育，創造學生交流、教學互長的機會。
            <br/>
            <br/>
            如果您也認同 SITCON 的理念，歡迎以行動支持 SITCON
            的運作，點擊下方「個人贊助方案」，您的支持將會成為我們的動力，讓更多學生能在舞台上展現自我、讓資訊教育遍及臺灣的每個角落！
            <br/>
            <br/>
            若您有興趣成為我們的贊助夥伴，歡迎點擊下方「索取贊助徵求書」，了解詳細合作方案，或是利用
            contact@sitcon.org 聯絡我們，商討更多的合作方式！
          </p>
          <div className="flex-row pt-8">
            <a className="flex items-center justify-end text-[40px] font-bold text-black">
              我要贊助
              <span className="material-icons" style={{fontSize: "44px"}}>
                  north_east
                </span>
            </a>
            <a className="flex items-center justify-end text-[32px] font-bold text-black">
              索取贊助徵求書
              <span className="material-icons" style={{fontSize: "44px"}}>
                  north_east
                </span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
