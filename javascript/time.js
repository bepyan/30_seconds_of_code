const formatDuration = (ms) => {
  if (ms < 0) ms = -ms;
  const time = {
    일: Math.floor(ms / 86400000),
    시간: Math.floor(ms / 3600000) % 24,
    분: Math.floor(ms / 60000) % 60,
    초: Math.floor(ms / 1000) % 60,
    // millisecond: Math.floor(ms) % 1000,
  };
  return (
    Object.entries(time)
      // 값이 있는 친구들만
      .filter((val) => val[1] !== 0)
      .map(([key, val]) => `${val}${key}`)
      .join(" ") + " 전 "
  );
};

console.log(formatDuration(1001));
console.log(formatDuration(34325055574));
