export default function Timeline() {
  return (
    <>
      <div className="mx-auto hidden w-full md:block">
        <div className="relative">
          <div className="absolute mb-8 h-8 w-full">
            <svg
              width="100%"
              height={32}
              viewBox="0 0 800 32"
              preserveAspectRatio="none"
            >
              {/* Main horizontal line */}
              {/* Arrow */}
              <path
                id="arrowHead"
                d="M770 16 L790 16 M780 8 L790 16 L780 24"
                stroke="#D3C4B7"
                strokeWidth="3.5"
                fill="none"
              />
              <line
                x1="2%"
                y1="16"
                x2="98%"
                y2="16"
                stroke="#D3C4B7"
                strokeWidth="3.5"
              />
            </svg>
          </div>

          {/* 時程 */}
          <div className="flex justify-between">
            <div className="z-10 w-min">
              <svg className="h-10 w-10">
                <circle key={1} cx={10} cy="16" r="8" fill="#CC9232" />
              </svg>
              <span className="material-icons-big">flag</span>
              <p>11.12.2024</p>
              <h3 className="w-max text-h3">開始徵稿</h3>
            </div>

            <div className="z-10 w-min">
              <svg className="h-10 w-10">
                <circle key={1} cx={10} cy="16" r="8" fill="#CC9232" />
              </svg>
              <span className="material-icons-big text-red">event_busy</span>
              <p>01.21</p>
              <h3 className="w-max text-h3">投稿截止</h3>
            </div>

            <div className="z-10 w-min">
              <svg className="h-10 w-10">
                <circle key={1} cx={10} cy="16" r="8" fill="#CC9232" />
              </svg>
              <span className="material-icons-big">email</span>
              <p>一月下旬</p>
              <h3 className="w-max text-h3">議程錄取通知</h3>
            </div>

            <div className="z-10 w-min">
              <svg className="h-10 w-10">
                <circle key={1} cx={10} cy="16" r="8" fill="#CC9232" />
              </svg>
              <span className="material-icons-big">mic_none</span>
              <p className="w-max">二月上旬至下旬</p>
              <h3 className="w-max text-h3">試講</h3>
            </div>

            <div className="z-10 w-min">
              <svg className="h-10 w-10">
                <circle key={1} cx={10} cy="16" r="8" fill="#CC9232" />
              </svg>
              <span className="material-icons-big">route</span>
              <p>03.07</p>
              <h3 className="w-max text-h3">彩排</h3>
            </div>

            <div className="z-10 w-min">
              <svg className="h-10 w-10">
                <circle key={1} cx={10} cy="16" r="8" fill="#CC9232" />
              </svg>
              <span className="material-icons-big text-orange">groups</span>
              <p>03.08</p>
              <h3 className="w-max text-h3">年會</h3>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto tracking-wider md:hidden">
        <h2 className="mb-4 text-h2">重要時程</h2>
        <div className="space-y-4 text-center text-xl">
          <p>2024 年 11 月 22 日：開始徵稿</p>
          <p>2025 年 1 月 21 日：投稿截止</p>
          <p>2025 年一月下旬：海報錄取通知</p>
          <p>2025 年 2 月 16 日：錄取海報檔案上傳截止</p>
          <p>2025 年 3 月 8 日：年會</p>
        </div>
      </div>
    </>
  );
}
