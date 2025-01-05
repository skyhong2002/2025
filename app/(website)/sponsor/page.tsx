import Image from "next/image";

export default function Page() {
  return (
    <>
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
      </div>
    </>
  );
}
