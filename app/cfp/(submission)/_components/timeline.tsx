export default function Timeline({ isPoster }: { isPoster?: boolean }) {
  return (
    <>
      {/* Desktop Layout */}
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
            <TimelineItem icon="flag" date="2024-11-23" name="開始徵稿" />
            <TimelineItem
              icon="redeem"
              date="2024-12-25 23:59"
              name="早鳥截止"
            />
            <TimelineItem
              icon="event_busy"
              date="01-21 23:59"
              name="投稿及稿件修改截止"
            />
            <TimelineItem icon="email" date="一月下旬" name="錄取通知" />
            {isPoster ? (
              <TimelineItem icon="route" date="2-16" name="錄取海報上傳截止" />
            ) : (
              <>
                <TimelineItem icon="mic_none" date="二月" name="試講" />
                <TimelineItem icon="route" date="03-07" name="彩排" />
              </>
            )}
            <TimelineItem icon="groups" date="03-08" name="年會" />
          </div>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="mx-auto tracking-wider md:hidden">
        <ul className="list-disc space-y-4 pl-5">
          <li>
            <span className="font-bold">開始徵稿</span>
            ：2024 年 11 月 22 日（六）
          </li>
          <li>
            <span className="font-bold">早鳥投稿截止</span>
            ：2024 年 12 月 25 日（三）23:59
          </li>
          <li>
            <span className="font-bold">投稿及稿件修改截止</span>
            ：2025 年 1 月 21 日（二） 23:59
          </li>
          <li>
            <span className="font-bold">錄取通知</span>
            ：2025 年一月下旬
          </li>
          {isPoster ? (
            <>
              <li>
                <span className="font-bold">錄取海報檔案上傳截止</span>
                ：2025 年 2 月 16 日（日）
              </li>
            </>
          ) : (
            <>
              <li>
                <span className="font-bold">試講</span>
                ：2025 年二月
              </li>
              <li>
                <span className="font-bold">彩排</span>
                ：2025 年 3 月 7 日（五）
              </li>
            </>
          )}
          <li>
            <span className="font-bold">年會</span>
            ：2025 年 3 月 8 日（六）
          </li>
        </ul>
      </div>
    </>
  );
}

function TimelineItem({
  icon,
  date,
  name,
}: {
  icon: string;
  date: string;
  name: string;
}) {
  return (
    <div className="z-10 flex w-min flex-col">
      <svg className="h-10 w-10">
        <circle
          key={1}
          cx="10"
          cy="16"
          r="8"
          className="fill-current text-primary"
        />
      </svg>
      <span className="material-icons !text-5xl">{icon}</span>
      <p className="whitespace-nowrap text-nowrap">{date}</p>
      <h3 className="w-max font-bold">{name}</h3>
    </div>
  );
}
