export default function Timeline() {
  return (
    <>
      <div className="max-w-[840px] mx-auto hidden md:block">
        <h2 className="mb-2 text-h2">重要時程</h2>
        <div className="relative flex flex-col">
          <div className="absolute mb-8 h-8">
            <svg className="h-8 max-w-full" viewBox="0 0 800 32">
              {/* Main horizontal line */}
              <line
                x1="20"
                y1="16"
                x2="740"
                y2="16"
                stroke="#D3C4B7"
                strokeWidth="3.5"
              />
              
              {/* Arrow */}
              <path
                d="M740 16 L760 16 M750 8 L760 16 L750 24"
                stroke="#D3C4B7"
                strokeWidth="3.5"
                fill="none"
              />
            </svg>
          </div>

          {/* 時程 */}
          <div className="flex tracking-wider z-10 justify-between">

            <div className="w-min">
              <svg className="h-10 w-10">
                <circle key={1} cx={10} cy="16" r="8" fill="#CC9232" />
              </svg>
              <span className="material-icons-big">flag</span>
              <p>11.12.2024</p>
              <h3 className="text-h3 w-max">開始徵稿</h3>
            </div>

            <div className="w-min">
              <svg className="h-10 w-10">
                <circle key={1} cx={10} cy="16" r="8" fill="#CC9232" />
              </svg>
              <span className="material-icons-big text-red">event_busy</span>
              <p>01.21</p>
              <h3 className="text-h3 w-max">投稿截止</h3>
            </div>

            <div className="w-min">
              <svg className="h-10 w-10">
                <circle key={1} cx={10} cy="16" r="8" fill="#CC9232" />
              </svg>
              <span className="material-icons-big">email</span>
              <p>一月下旬</p>
              <h3 className="text-h3 w-max">議程錄取通知</h3>
            </div>

            <div className="w-min">
              <svg className="h-10 w-10">
                <circle key={1} cx={10} cy="16" r="8" fill="#CC9232" />
              </svg>
              <span className="material-icons-big">mic_none</span>
              <p className="w-max">二月上旬至下旬</p>
              <h3 className="text-h3 w-max">試講</h3>
            </div>

            <div className="w-min">
              <svg className="h-10 w-10">
                <circle key={1} cx={10} cy="16" r="8" fill="#CC9232" />
              </svg>
              <span className="material-icons-big">route</span>
              <p>03.07</p>
              <h3 className="text-h3 w-max">彩排</h3>
            </div>

            <div className="w-min">
              <svg className="h-10 w-10">
                <circle key={1} cx={10} cy="16" r="8" fill="#CC9232" />
              </svg>
              <span className="material-icons-big text-orange">groups</span>
              <p>03.08</p>
              <h3 className="text-h3 w-max">年會</h3>
            </div>

            <div className="px-2" />
          </div>
        </div>
      </div>

      <div className="mx-auto md:hidden tracking-wider">
        <h2 className="text-h2 mb-4">重要時程</h2>
        <div className="text-center space-y-4 text-xl">
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
