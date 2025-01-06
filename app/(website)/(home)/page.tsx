import { ReactNode } from "react";
import heroImage from "./_assets/hero.png";

export default function Page() {
  return (
    <div className="w-full">
      <div
        style={{
          backgroundImage: `url(${heroImage.src})`,
          backgroundSize: "cover",
        }}
        className="relative aspect-[2/3] w-full bg-top bg-no-repeat"
      >
        <div className="absolute left-0 right-0 top-1/2 px-10 md:left-10 md:right-auto md:w-2/3"></div>
      </div>
      <div className="flex justify-center">
        <div className="flex w-full max-w-[90%] flex-col justify-center px-4 py-40 lg:max-w-[840px] desktop:max-w-[1120px]">
          <div className="my-10 flex gap-5 md:justify-end">
            <LinkButton
              className="w-full md:w-auto"
              link="tickets"
              text="活動報名"
            />
            <LinkButton
              className="w-full md:w-auto"
              link="https://sitcon.org/donate"
              text="支持我們"
              target="_blank"
            />
          </div>
          <div className="space-y-5">
            <h1 className="text-h2-mobile font-bold md:text-h2">
              2025 年會主題
            </h1>
            <h2 className="text-h1-mobile font-bold md:text-h1">
              Lines of Flight
            </h2>
          </div>
          <div className="mt-12 flex flex-col gap-7">
            <p className="text-normal font-bold md:text-xl">
              Il s&apos;agit toujours de libérer la vie là où elle est
              prisonnière <br /> 這總是關乎到解放生命被禁錮的生命
            </p>
            <p className="brightness-90">
              「Lines of
              Flight」（中譯：逃逸路線）是當代文學裡的一個概念，由法國的思想家德勒茲提出。所謂的「逃逸路線」，是指在日常社會結構中找到一個裂縫或缺口，並在現有框架下挖掘出新的可能性。
            </p>
            <p className="brightness-90">
              正如我們所處的這個時代，人類的智慧打造出前所未見的世界，在便捷、快速等多種科技紅利的包圍下，我們也看見了資訊流通導致的社群成癮，看見在社會價值觀裡的畫地自限，看見螢幕構築出那若即若離的疏離感，這一切彷彿科技建構出的無形枷鎖，將我們束縛其中。
            </p>
            <p className="text-normal font-bold md:text-xl">
              在這樣一個開放的年代，為什麼好像變得不再自由？
            </p>
            <p className="brightness-90">
              作為學生，我們處在一個迷惘卻充滿熱血的年紀，可以試圖去尋找社會中的裂隙，並透過「自我覺察」來建立屬於自己的價值觀與信念。無論是發掘在螢幕後方的我們，被社群媒體影響的同時遺漏了什麼；或是如何不為了合群或符合社會期待，而去隱藏自己的真實想法以此從眾；甚至是勇敢地成為先鋒，以資訊結合不同領域，打造出多元化的社群生態。讓我們帶著自我覺察的心，去開創一條屬於這個時代的道路。
            </p>
          </Section>
        </div>
        <div className="my-10 flex flex-col justify-end gap-5 md:flex-row">
          <LinkButton
            link="https://forms.gle/rr93tuxJ9m9uStDf9"
            target="_blank"
            text="預約跳坑表單"
          />
          <div className="flex gap-5">
            <LinkButton
              link="https://groups.google.com/g/sitcon"
              target="_blank"
              text="預約跳坑表單"
            />
            <LinkButton
              link="https://gitlab.com/sitcon-tw/2025/board/-/boards"
              text="查看 GitLab"
              target="_blank"
              className="w-full md:w-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function Section({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle: string;
  children: ReactNode;
}) {
  return (
    <>
      <div className="mt-10 flex flex-col gap-5">
        <h2 className="text-h1-mobile font-bold md:text-h1">{title}</h2>
        <h3 className="text-h3-mobile md:text-h3">{subtitle}</h3>
      </div>
      <div className="font-normal">{children}</div>
    </>
  );
}

function Button({
  link,
  text,
  className,
  target,
}: {
  link: string;
  text: string;
  className?: string;
  target?: string;
}) {
  return (
    <a
      href={link}
      target={target ?? "_self"}
      className={`text-nowrap rounded-full bg-primary p-2 px-6 text-center text-normal font-semibold text-black ${className} hover:brightness-110`}
    >
      {text}
    </a>
  );
}
