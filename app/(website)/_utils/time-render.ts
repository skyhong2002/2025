const timeRender = (datetime: string) => {
  const time = new Date(datetime);
  return time.toLocaleTimeString("zh-TW", {
    hour: "numeric",
    minute: "2-digit",
    hour12: false,
  });
};

export default timeRender;
