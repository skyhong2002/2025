export default function Timeline({ isPoster }: { isPoster: boolean }) {
  return (
    <>
      <div className="mx-auto hidden w-full md:block">
        {isPoster ? (
          <div className="hidden justify-between space-x-4 text-h3 lg:flex">
            <div className="mr-4 flex h-min flex-col space-y-4 text-nowrap">
              <p>24/11/12(五):開始徵稿</p>
              <p>25/1/21(二)/23:59:投稿截止</p>
              <p>25/一月下旬:海報錄取通知</p>
            </div>
            <div className="flex flex-col space-y-4">
              <p>25/1/16(日):錄取海報檔案上傳截止</p>
              <p>25/3/8(六):年會</p>
            </div>
          </div>
        ) : (
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
                  className="stroke-current text-foreground"
                  strokeWidth="3.5"
                  fill="none"
                />
                <line
                  x1="2%"
                  y1="16"
                  x2="98%"
                  y2="16"
                  className="stroke-current text-foreground"
                  strokeWidth="3.5"
                />
              </svg>
            </div>

            {/* 時程 */}
            <div className="flex justify-between">
              <div className="z-10 w-min">
                <svg className="h-10 w-10">
                  <circle
                    key={1}
                    cx={10}
                    cy="16"
                    r="8"
                    className="fill-current text-primary"
                  />
                </svg>
                <span className="material-icons-big">flag</span>
                <p>11.22.2024</p>
                <h3 className="w-max text-h3">開始徵稿</h3>
              </div>

              <div className="z-10 w-min">
                <svg className="h-10 w-10">
                  <circle
                    key={1}
                    cx={10}
                    cy="16"
                    r="8"
                    className="fill-current text-primary"
                  />
                </svg>
                <span className="material-icons-big text-foreground">
                  event_busy
                </span>
                <p>01.21</p>
                <h3 className="w-max text-h3">投稿截止</h3>
              </div>

              <div className="z-10 w-min">
                <svg className="h-10 w-10">
                  <circle
                    key={1}
                    cx={10}
                    cy="16"
                    r="8"
                    className="fill-current text-primary"
                  />
                </svg>
                <span className="material-icons-big">email</span>
                <p>一月下旬</p>
                <h3 className="w-max text-h3">議程錄取通知</h3>
              </div>

              <div className="z-10 w-min">
                <svg className="h-10 w-10">
                  <circle
                    key={1}
                    cx={10}
                    cy="16"
                    r="8"
                    className="fill-current text-primary"
                  />
                </svg>
                <span className="material-icons-big">mic_none</span>
                <p className="w-max">二月上旬至下旬</p>
                <h3 className="w-max text-h3">試講</h3>
              </div>

              <div className="z-10 w-min">
                <svg className="h-10 w-10">
                  <circle
                    key={1}
                    cx={10}
                    cy="16"
                    r="8"
                    className="fill-current text-primary"
                  />
                </svg>
                <span className="material-icons-big">route</span>
                <p>03.07</p>
                <h3 className="w-max text-h3">彩排</h3>
              </div>

              <div className="z-10 w-min">
                <svg className="h-10 w-10">
                  <circle
                    key={1}
                    cx={10}
                    cy="16"
                    r="8"
                    className="fill-current text-primary"
                  />
                </svg>
                <span className="material-icons-big text-foreground">
                  groups
                </span>
                <p>03.08</p>
                <h3 className="w-max text-h3">年會</h3>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="mx-auto tracking-wider md:hidden">
        <div className="space-y-4 text-xl leading-10">
          {isPoster ? (
            <>
              <p>2024 年 11 月 22 日（五）：開始徵稿</p>
              <p>2025 年 1 月 21 日（二）23:59：投稿截止</p>
              <p>2025 年一月下旬：海報錄取通知</p>
              <p>2025 年 2 月 16 日（日）：錄取海報檔案上傳截止</p>
              <p>2025 年 3 月 8 日（六）：年會</p>
            </>
          ) : (
            <>
              <p>2024 年 11 月 22 日（五）：開始徵稿</p>
              <p>2025 年 1 月 21 日（二）23:59：投稿截止</p>
              <p>2025 年一月下旬：議程錄取通知</p>
              <p>2025 年二月：試講</p>
              <p>2025 年 3 月 7 日 ( 五 )：彩排</p>
              <p>2025 年 3 月 8 日 ( 六 )：年會</p>
            </>
          )}
        </div>
      </div>
    </>
  );
}
