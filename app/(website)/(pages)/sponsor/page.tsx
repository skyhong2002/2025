"use client";
import Button from "./button";
import { FeatureCard } from "./Sponsorship";
import Counter from "./Counter";
import sponsorData from "./sponsorData";
import { twMerge } from "tailwind-merge";
import SponsorCard from "./SponsorCard";
function Sponsors({
  sponsors,
  largeSponsor = false,
}: {
  sponsors: (typeof sponsorData.sponsors)[0]["items"];
  largeSponsor?: boolean;
}) {
  return (
    <div
      className={twMerge(
        "grid grid-cols-2 gap-4",
        largeSponsor
          ? "md:grid-cols-[repeat(auto-fill,minmax(200px,1fr))]"
          : "md:grid-cols-[repeat(auto-fill,minmax(180px,1fr))]",
      )}
    >
      {sponsors.map((sponsor, i) => (
        <div
          key={i}
          className="group/sponsor relative flex scroll-m-[84px] items-center justify-center rounded-lg bg-[#fff] p-4"
          id={sponsor.image.split(".").slice(0, -1).join(".")}
        >
          <div
            className="absolute inset-0 scale-0 opacity-0 blur-xl transition-all duration-300 group-hover/sponsor:scale-100 group-hover/sponsor:opacity-50"
            style={{
              backgroundImage: `linear-gradient(90deg, rgba(56, 90, 172, 0.80) 0%, rgba(148, 110, 52, 0.75) 58.96%, #462002 100%)`,
            }}
          />
          <div className="group absolute inset-0 flex items-center justify-center rounded-lg bg-[#fff]" />
          <SponsorCard data={sponsor} />
        </div>
      ))}
    </div>
  );
}

export default function Page() {
  return (
    <div>
      <h1 className="mb-4 text-2xl font-bold md:text-4xl" id="page-title">
        支持我們
      </h1>
      <p>
        自 2013 年以來，SITCON
        始終秉持著「不向與會者收費」的初心，致力於推廣學生資訊教育。我們鼓勵參與者跳脫思想框架、發掘潛在的可能性，並為學子們提供寶貴的學習與交流機會，陪伴無數學生踏入資訊領域的殿堂。而在這十餘年裡，我們做到了這些令人驕傲的成果：
      </p>
      <div className="my-4 grid grid-cols-2 gap-4 xl:grid-cols-4">
        <FeatureCard bg="1">
          <span>累積逾</span>
          <div>
            <span className="mr-1 text-2xl lg:text-4xl">
              <Counter value={12000} />
            </span>
            名
          </div>
          <span>與會者</span>
        </FeatureCard>
        <FeatureCard bg="2">
          <div>
            <span className="mr-1 text-2xl lg:text-4xl">
              <Counter value={450} />
            </span>
            名
          </div>
          <span>學生講者</span>
        </FeatureCard>
        <FeatureCard bg="3">
          <span>舉辦逾</span>
          <div className="flex gap-6">
            <div>
              <div>
                <span className="mr-1 text-2xl lg:text-4xl">
                  <Counter value={450} />
                </span>
                場
              </div>
              <span>聚會與講座</span>
            </div>
            <div>
              <div>
                <span className="mr-1 text-2xl lg:text-4xl">
                  <Counter value={9} />
                </span>
                場
              </div>
              <span>夏令營</span>
            </div>
          </div>
        </FeatureCard>
        <FeatureCard bg="4">
          <span>扶植近</span>
          <div>
            <span className="mr-1 text-2xl lg:text-4xl">
              <Counter value={1200} />
            </span>
            名
          </div>
          <span>熱愛資訊的志工</span>
        </FeatureCard>
      </div>
      <p>
        此外，我們也樂見企業與學生的近距離交流，成為我們的合作夥伴您可以接觸學生資訊人才提升品牌影響力、深入學生群體推廣產品內容，如果您也認同
        SITCON 的理念，希望在學生邁向未來的路上提供支持，點擊下方「
        <a
          href="https://sitcon.org/donate"
          target="_blank"
          className="link underline underline-offset-2"
        >
          個人贊助
        </a>
        」按鈕，以實際行動支持 SITCON
        的運作。您的支持不僅能幫助更多學生站上舞台，也能讓資訊教育的種子散播至臺灣的每個角落。
        <br />
        <br />
        若您有興趣成為我們的贊助夥伴，也歡迎點擊下方「索取贊助徵求書」，了解詳細合作方案，或是利用
        <a
          href="mailto:contact@sitcon.org"
          target="_blank"
          className="link underline underline-offset-2"
        >
          contact@sitcon.org
        </a>{" "}
        聯絡我們，我們將有專人與您商討更多的合作方式！
      </p>
      <div className="mt-6 flex items-center justify-center gap-6">
        <Button color="blue" url="https://sitcon.org/donate">
          個人贊助
        </Button>
        <Button color="blue" url="https://i.sitcon.org/2025cfs-form">
          索取贊助徵求書
        </Button>
      </div>
      <h1 className="my-8 text-2xl font-bold md:text-4xl" id="主辦單位">
        主辦單位
      </h1>
      <div className="text-center text-xl font-bold md:text-2xl">
        SITCON 學生計算機年會籌備團隊
      </div>
      <img
        src="https://sitcon.org/2024/website/SITCON_green.svg"
        className="mx-auto mb-8 mt-6 w-full max-w-[300px] rounded-lg bg-[#fff] p-2"
      />
      <p className="my-2">
        SITCON 學生計算機年會 (Students’ Information Technology Conference)
        是一個由各校同學於網路串聯發起，鼓勵自發學習、切磋成長的學生社群。
      </p>
      <p className="my-2">
        因為熱愛資訊領域、知道尋找興趣相近夥伴的不容易，籌備團隊從 2012
        年以來，便致力於連結對資訊科技相關領域有興趣的學生們，透過每年三月的研討會分享彼此所學，在每週的定期聚交流精進。發展至今，SITCON
        除了是東亞最大的學生資訊社群與研討會，各地參與者也藉由夏令營、一小時學程式
        (Hour of
        Code)、黑客松等不同的面向活動，推廣創新、實作、教學相長、以及開源貢獻的精神與理念；在台灣與海外各地，都有
        SITCON 參與者的身影。
      </p>
      <h1 className="my-8 text-2xl font-bold md:text-4xl" id="共同主辦">
        共同主辦
      </h1>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {sponsorData.coOrganizer.map((x) => (
          <div
            key={x.title}
            id={x.image.split(".").slice(0, -1).join(".")}
            className="scroll-m-[84px]"
          >
            <div className="mb-2 text-center text-xl font-bold md:text-2xl">
              {x.title}
            </div>
            <a href={x.url} target="_blank">
              <img
                src={"/2025/sponsor/" + x.image}
                className="mx-auto mb-7 mt-5 w-full max-w-[300px] rounded-lg bg-[#fff] transition"
              />
            </a>
            <p className="my-2">{x.description}</p>
          </div>
        ))}
      </div>
      <h1 className="my-8 text-2xl font-bold md:text-4xl" id="協辦單位">
        協辦單位
      </h1>
      {sponsorData.coSponsor.map((x) => (
        <div
          key={x.title}
          id={x.image.split(".").slice(0, -1).join(".")}
          className="scroll-m-[84px]"
        >
          <div className="mb-2 text-center text-xl font-bold md:text-2xl">
            {x.title}
          </div>
          <a href={x.url} target="_blank">
            <img
              src={"/2025/sponsor/" + x.image}
              className="mx-auto mb-7 mt-5 w-full max-w-[300px] rounded-lg bg-[#fff] transition"
            />
          </a>
          <p className="my-2">{x.description}</p>
        </div>
      ))}
      {sponsorData.sponsors.map(
        (sponsorType) =>
          sponsorType.items.length > 0 && (
            <div key={sponsorType.title}>
              <h1
                className="my-8 text-2xl font-bold md:text-4xl"
                id={sponsorType.title}
              >
                {sponsorType.title}
              </h1>
              <Sponsors
                sponsors={sponsorType.items}
                largeSponsor={
                  sponsorType.title === "領航級" ||
                  sponsorType.title === "深耕級"
                }
              />
            </div>
          ),
      )}
      {sponsorData.specialThanks.length > 0 && (
        <>
          <h1 className="my-8 text-2xl font-bold md:text-4xl" id="特別感謝">
            特別感謝
          </h1>
          <Sponsors sponsors={sponsorData.specialThanks} />
        </>
      )}
      {sponsorData.mediaPartners.length > 0 && (
        <>
          <h1 className="my-8 text-2xl font-bold md:text-4xl" id="媒體夥伴">
            媒體夥伴
          </h1>
          <Sponsors sponsors={sponsorData.mediaPartners} />
        </>
      )}
    </div>
  );
}
