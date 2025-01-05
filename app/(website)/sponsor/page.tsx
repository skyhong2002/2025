import Image from "next/image";

export default function Page() {
  return (
    <div className="space-y-32">
      {/* 支持我們 */}
      <div className="items-start text-normal-mobile md:text-normal">
        <h1 className="text-h1 font-bold">支持我們</h1>
        <div className="py-[17px]" />
        <p className="max-w-[685px] leading-loose">
          十年以來，SITCON
          一直秉持著不向與會者收費的原則來舉辦資訊研討會，不僅創造許多學生們交流、教學互長的機會，也帶領無數學子踏入資訊的殿堂。
        </p>
        <div className="py-[27px]" />
        <div className="flex space-x-7">
          <Image
            src="https://placehold.co/238x226"
            alt="Sponsor Image"
            width={238}
            height={226}
            className="rounded-3xl"
          />
          <Image
            src="https://placehold.co/238x226"
            alt="Sponsor Image"
            width={238}
            height={226}
            className="rounded-3xl"
          />
          <Image
            src="https://placehold.co/238x226"
            alt="Sponsor Image"
            width={238}
            height={226}
            className="rounded-3xl"
          />
          <Image
            src="https://placehold.co/238x226"
            alt="Sponsor Image"
            width={238}
            height={226}
            className="rounded-3xl"
          />
        </div>
        <div className="py-[32px]" />
        <p className="max-w-[685px] leading-loose">
          而維繫學生們的資訊交流平台，除了有賴志工們的努力及貢獻，亦十分需要在資金上的支持。
          教育不只在課本裡，如果您也認同 SITCON
          的理念，歡迎點擊下方「個人贊助」或「索取贊助徵求書」按鈕以了解詳細的合作方案，或是寄信至
          contact@sitcon.org 與我們聯繫，商酌更多的合作方式！
          扶持資訊教育，讓我們一同使更多的臺灣學子能在舞台上展現自我、相互成長！
        </p>
        <div className="py-[22.5px]" />
        <div className="flex space-x-7">
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
        <h1 className="text-center text-h1 font-bold">主辦單位</h1>
        <div className="py-[22.5px]" />
        <h2 className="text-center text-h2 font-bold">SITCON 學生計算機年會</h2>
        <div className="py-[34.5px]" />
        <div className="flex justify-center">
          <Image
            src="https://placehold.co/385x109?text=SITCON%20Logo%20385x109_4"
            alt="SITCON Logo"
            width={385}
            height={109}
          />
        </div>
        <div className="py-[37px]" />
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
    </div>
  );
}
