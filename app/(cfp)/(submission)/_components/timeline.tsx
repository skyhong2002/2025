export default function Timeline() {
  const events = [
    { date: "11.12.2024", icon: Flag, text: "開始徵稿" },
    { date: "01.21", icon: Calendar, text: "投稿截止" },
    { date: "一月下旬", icon: Mail, text: "議程錄取通知" },
    { date: "二月上旬至下旬", icon: Mic, text: "試講" },
    { date: "03.07", icon: PlaySquare, text: "彩排" },
    { date: "03.08", icon: Users, text: "年會" },
  ];

  return (
    <div className="w-full bg-[#535AA9] p-8">
      <h2 className="mb-12 text-2xl text-[#E6D5B0]">重要時程</h2>
      <div className="relative flex flex-col">
        <div className="relative mb-8 h-8">
          <svg className="h-8 w-full" viewBox="0 0 800 32">
            {/* Main horizontal line */}
            <line
              x1="20"
              y1="16"
              x2="740"
              y2="16"
              stroke="#E6D5B0"
              strokeWidth="2"
            />

            {/* Dots */}
            {[0, 1, 2, 3, 4, 5].map((i) => (
              <circle key={i} cx={20 + i * 144} cy="16" r="6" fill="#E6D5B0" />
            ))}

            {/* Arrow */}
            <path
              d="M740 16 L760 16 M750 8 L760 16 L750 24"
              stroke="#E6D5B0"
              strokeWidth="2"
              fill="none"
            />
          </svg>
        </div>

        <div className="flex px-4">
          {events.map((event, index) => (
            <div key={index} className="flex flex-1 flex-col items-center">
              <div className="mb-4">
                <event.icon className="h-6 w-6 text-[#E6D5B0]" />
              </div>
              <div className="mb-2 text-sm text-[#E6D5B0]">{event.date}</div>
              <div className="text-center text-sm text-[#E6D5B0]">
                {event.text}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
