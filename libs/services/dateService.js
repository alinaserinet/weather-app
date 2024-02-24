const days = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

function getDayByTimestamp(timestamp, timeZone = 'UTC') {
  const date = new Date(timestamp * 1000);
  return days[date.getDay()];
}

function getTimeByTimestamp(timestamp, timeZone = 'UTC') {
  const date = new Date(timestamp * 1000);
  return date.toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
    timeZone,
  });
}

const exports = {
  getDayByTimestamp,
  getTimeByTimestamp,
};

export default exports;
