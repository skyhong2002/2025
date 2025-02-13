const timeRender = (datetime: string) => {
  const time = new Date(datetime);
  return time.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: false,
    timeZone: "Asia/Taipei",
  });
};

export default timeRender;
