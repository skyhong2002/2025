import Image from "next/image";
export default function Page() {
  return (
    <div className="flex w-full flex-col items-start justify-center gap-8">
      <section
        id="address"
        className="flex w-full flex-col items-center gap-3 font-bold"
      >
        <h1 className="self-start text-h1-mobile font-bold md:text-h1">
          交通方式
        </h1>
        <h2 className="text-[20px] md:text-[30px]">
          中央研究院 人文社會科學館
        </h2>
        <p className="text-[18px] md:text-h3">
          台北市南港區研究院路 2 段 128 號
        </p>
      </section>
      <section id="map" className="flex w-full flex-col gap-8">
        <Image
          width={1000}
          height={600}
          src="https://picsum.photos/1000/600"
          alt="Random Image"
          className="w-full rounded-xl"
        />
        <div className="flex w-full justify-between gap-2 text-h3-mobile font-bold md:gap-6 md:text-h3">
          <button className="flex h-[60px] flex-grow items-center justify-center rounded-xl bg-[#DEE6EB] text-black">
            大眾接駁車
          </button>
          <button className="flex h-[60px] flex-grow items-center justify-center rounded-xl bg-[#DEE6EB] text-black">
            大眾運輸工具
          </button>
          <button className="flex h-[60px] flex-grow items-center justify-center rounded-xl bg-[#DEE6EB] text-black">
            自行開車
          </button>
        </div>
      </section>
      <section
        id="description"
        className="mt-20 flex w-full flex-col items-center justify-between gap-8 pl-0 md:flex-row md:pl-4"
      >
        <div className="flex flex-row justify-between md:hidden">
          {/* arrow */}
          <svg
            width="16"
            height="235"
            viewBox="0 0 16 235"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="block w-[200px] md:hidden"
          >
            <path
              d="M7.29288 234.707C7.68341 235.098 8.31657 235.098 8.7071 234.707L15.0711 228.343C15.4616 227.953 15.4616 227.319 15.0711 226.929C14.6805 226.538 14.0474 226.538 13.6568 226.929L7.99999 232.586L2.34314 226.929C1.95261 226.538 1.31945 226.538 0.928922 226.929C0.538398 227.319 0.538398 227.953 0.928922 228.343L7.29288 234.707ZM7 -4.37114e-08L6.99999 234L8.99999 234L9 4.37114e-08L7 -4.37114e-08Z"
              fill="white"
            />
          </svg>
          <div className="flex flex-col items-start justify-between">
            <span className="material-symbols-outlined !text-[80px]">
              directions_car
            </span>
            <p className="w-[100%] text-normal leading-[200%]">
              {`由國道三號，南深路 - 中研院匝道 <16km> 出國道三號後，左轉接南深路，再左轉接舊莊路一段直走，遇到與研究路岔路口，即可看到中研院。`}
            </p>
          </div>
        </div>

        <span className="material-symbols-outlined !hidden !text-[80px] md:!block">
          directions_car
        </span>
        <div className="relative hidden h-1 w-[444px] rounded-full bg-[#ffffff] md:block">
          <p className="absolute left-[15%] top-[20px] flex w-[70%] text-normal leading-[200%]">
            {`由國道三號，南深路 - 中研院匝道 <16km> 出國道三號後，左轉接南深路，再左轉接舊莊路一段直走，遇到與研究路岔路口，即可看到中研院。`}
          </p>
        </div>
        <div className="box-border w-full rounded-xl border border-[#ffffff] p-5 md:w-[360px]">
          <h3 className="text-[20px] font-bold">中研院門口</h3>
          <p className="mt-2 text-normal leading-[150%]">
            車輛進入院區請持證件向大門警衛室換取臨時通行證。假日換證不收費，並請停車於院內道路旁停車格。若您於周一至週五來訪，您需停車至人文社會館B2，並須支付停車費用
            (每小時20元 )
          </p>
        </div>
      </section>
    </div>
  );
}
