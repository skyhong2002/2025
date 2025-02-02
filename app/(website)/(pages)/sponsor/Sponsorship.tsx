"use client";
import Counter from "./Counter";
function Button({
  children,
  href,
}: {
  children: React.ReactNode;
  href?: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      className="min-w-[150px] rounded-full bg-pink-400 p-2 text-center text-foreground hover:opacity-90 active:opacity-80"
    >
      {children}
    </a>
  );
}

function FeatureCards({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-16 grid w-full grid-cols-2 grid-rows-2 gap-4 text-foreground">
      {children}
    </div>
  );
}
export function FeatureCard({
  children,
  bg,
}: {
  children: React.ReactNode;
  bg: string;
}) {
  return (
    <div className="group relative flex flex-col overflow-hidden rounded-lg bg-black px-2 py-4 pt-40 transition-all duration-300 ease-in-out hover:scale-105 hover:pb-20 hover:pt-20 hover:shadow-xl">
      <div
        className="absolute inset-0 bg-cover bg-center transition-all duration-300 ease-in-out group-hover:scale-110 group-hover:opacity-50 group-hover:blur-sm"
        style={{
          backgroundImage: `url('/2025/statscard/${bg}.jpg')`,
          mask: "linear-gradient(180deg, #000 60%, #0000 100%)",
          WebkitMask: "linear-gradient(180deg, #000 60%, #0000 100%)",
        }}
      />
      <div
        className="relative flex h-full flex-col items-center justify-end text-xs text-foreground transition-all duration-300 ease-in-out group-hover:scale-110 group-hover:justify-center sm:text-sm md:text-base"
        style={{
          textShadow: "0 0 8px rgba(0,0,0,0.5)",
        }}
      >
        {children}
      </div>
    </div>
  );
}

export default function Sponsorship() {
  return (
    <div className="container mx-auto max-w-[700px]">
      <h1 className="mb-6 text-center text-4xl font-bold">SITCON 贊助徵求</h1>
      <p className="z-20 mb-12">
        SITCON
        秉持著不向與會者收費的原則，十年以來致力於推廣學生資訊教育，創造學生交流、教學互長的機會。
      </p>
      <div className="mb-8 gap-2 text-center text-2xl font-bold leading-10">
        自 2013 以來， <br />
        我們帶領了無數學子進入資訊的殿堂，更做到
      </div>
      <FeatureCards>
        <FeatureCard bg="1">
          <span>累積逾</span>
          <div>
            <span className="mr-1 text-2xl lg:text-4xl">
              <Counter value={11000} />
            </span>
            名
          </div>
          <span>與會者</span>
        </FeatureCard>
        <FeatureCard bg="2">
          <div>
            <span className="mr-1 text-2xl lg:text-4xl">
              <Counter value={400} />
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
                  <Counter value={400} />
                </span>
                場
              </div>
              <span>聚會與講座</span>
            </div>
            <div>
              <div>
                <span className="mr-1 text-2xl lg:text-4xl">
                  <Counter value={8} />
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
              <Counter value={1100} />
            </span>
            名
          </div>
          <span>熱愛資訊的志工</span>
        </FeatureCard>
      </FeatureCards>
      <div className="mb-8 gap-2 text-center text-2xl font-bold leading-10">
        <span className="hidden md:inline-block">
          此外，我們也樂見企業與學生的近距離交流，
        </span>
        <span className="md:hidden">
          此外，我們也樂見企業 <br />
          與學生的近距離交流，
        </span>
        <br />
        <span>成為我們的合作夥伴您可以</span>
      </div>

      <FeatureCards>
        <FeatureCard bg="5">接觸學生資訊人才</FeatureCard>
        <FeatureCard bg="6">提升品牌影響力</FeatureCard>
        <FeatureCard bg="7">深入學生群體</FeatureCard>
        <FeatureCard bg="8">推廣產品內容</FeatureCard>
      </FeatureCards>
      <p>
        如果您也認同 SITCON 的理念，歡迎以行動支持 SITCON 的運作，點擊下方「
        <a href="https://sitcon.org/donate" target="_blank" className="link">
          我要贊助
        </a>
        」，您的支持將會成為我們的動力，讓更多學生能在舞台上展現自我、讓資訊教育遍及臺灣的每個角落！
      </p>
      <br />
      <p>
        若您有興趣成為我們的贊助夥伴，歡迎點擊下方「
        <a
          href="https://i.sitcon.org/2025cfs-form"
          target="_blank"
          className="link"
        >
          索取贊助徵求書
        </a>
        」，了解詳細合作方案，或是利用{" "}
        <a href="mailto:contact@sitcon.org" target="_blank" className="link">
          contact@sitcon.org
        </a>{" "}
        聯絡我們，商討更多的合作方式！
      </p>
      <div className="mb-16 mt-8 flex flex-wrap justify-center gap-4">
        <Button href="https://sitcon.org/donate">我要贊助</Button>
        <Button href="https://i.sitcon.org/2025cfs-form">索取贊助徵求書</Button>
      </div>
    </div>
  );
}
