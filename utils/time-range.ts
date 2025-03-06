export function isNowInTimeRange(timeRange: string) {
  const [start, end] = timeRange.split(" - "); // Разделяем строку
  const now = new Date();

  const [startHour, startMinute] = start.split(":").map(Number);
  const [endHour, endMinute] = end.split(":").map(Number);

  const nowHour = now.getHours();
  const nowMinute = now.getMinutes();

  const nowTotal = nowHour * 60 + nowMinute;
  const startTotal = startHour * 60 + startMinute;
  const endTotal = endHour * 60 + endMinute;

  return nowTotal >= startTotal && nowTotal <= endTotal;
}
