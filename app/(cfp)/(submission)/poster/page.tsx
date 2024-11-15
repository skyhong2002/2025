import Countdown from "../_components/countdown";
import Timeline from "../_components/timeline";

export default function Page() {
  return (
    <div className="bg-blue font-bold text-light-brown">
      <div className="relative left-[396px] min-h-screen max-w-[840px] space-y-[56px]">
        <h1 className="text-h1">海報徵稿</h1>

        <div className="space-y-[64px]">
          {/* Countdown Section */}
          <Countdown />

          {/* Timeline Section */}
          <Timeline />

          {/* Submission Guidelines */}
          <section>
            <div>
              <h2 className="mb-6 text-h2">投稿說明</h2>
              <p className="mb-6 text-normal">
                海報投稿以靜態海報展出學生個人或團隊專案，作品以資訊相關領域為主，不限語言，不接受一稿多投，若為延伸作品需於投稿時載明。期望透過此方式使更多學生能有展現自我的機會，同時為會眾帶來不同形式的學習與交流。
              </p>
            </div>
          </section>

          {/* Submission Method */}
          <section className="space-y-[48px]">
            <h2 className="mb-4 text-h2">投稿方式</h2>
            <div>
              <h4 className="mb-2 text-h3 font-bold">稿件資訊</h4>
              <ul className="list-inside list-disc space-y-2">
                <li>題目 Project Title：必填、公開。長度請自行斟酌。</li>
                <li>摘要 Abstract：必填、公開。建議約 350 字。</li>
                <li>主題標籤 Labels：必填、公開。請填寫 1~3 個標籤。</li>
              </ul>
            </div>
          </section>

          {/* Code of Conduct */}
          <section className="bg-blue py-[64px] text-white">
            <div>
              <h2 className="mb-6 text-h2">CODE OF CONDUCT</h2>
              <p className="text-normal">
                SITCON
                歡迎不同身分、來自不同背景的與會者，我們鼓勵女性、性少數與多元背景的參與者。為了讓大家都能愉快地參加
                SITCON，我們要求所有參與者閱讀年會的 行為準則（Code of
                Conduct），共同創造一個友善的環境。
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
