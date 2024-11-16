export default function Timeline() {
  return (
    <div className="max-w-[840px] p-8">
      <h2 className="mb-12 text-h2">重要時程</h2>
      <div className="relative flex flex-col">
        <div className="relative mb-8 h-8">
          <svg className="h-8 w-full" viewBox="0 0 800 32">
            {/* Main horizontal line */}
            <line
              x1="20"
              y1="16"
              x2="740"
              y2="16"
              stroke="#D3C4B7"
              strokeWidth="2"
            />
            
            {/* Arrow */}
            <path
              d="M740 16 L760 16 M750 8 L760 16 L750 24"
              stroke="#D3C4B7"
              strokeWidth="2"
              fill="none"
            />
          </svg>
        </div>

        {/* 時程 */}
        <div className="flex">
          <div className="bg-black">
            <svg className="h-10">
              <circle key={1} cx={10} cy="16" r="6" fill="#CC9232" />
            </svg>
            <span className="material-icons-big text-4xl" >flag</span>
          </div>

      {/* date: "11.12.2024",
      icon: ,
      text: "開始徵稿",
    },
    {
      date: "01.21",
      icon: <span className="material-icons text-red">event_busy</span>,
      text: "投稿截止",
    },
    {
      date: "一月下旬",
      icon: <span className="material-icons">email</span>,
      text: "議程錄取通知",
    },
    {
      date: "二月上旬至下旬",
      icon: <span className="material-icons">mic_none</span>,
      text: "試講",
    },
    {
      date: "03.07",
      icon: <span className="material-icons">route</span>,
      text: "彩排",
    },
    {
      date: "03.08",
      icon: <span className="material-icons text-orange">groups</span>,
      text: "年會",
    }, */}

        </div>
      </div>
    </div>
  );
}
