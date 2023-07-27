/**
 * #### formattingExample
 * @return searchDate : '2023.07.27'
 * @return searchTime : 'AM 11:48'
 */
export default function makeTimeFormat(rawDate: Date) {
  const time = rawDate.getHours();
  const ampm = time <= 12 ? `AM` : `PM`;
  const minutes = rawDate.getMinutes();

  return {
    searchDate: `${rawDate.getFullYear()}.${rawDate.getMonth()}.${rawDate.getDate()}`,
    searchTime: `${ampm} ${time > 12 ? time - 12 : time}:${minutes}`,
  };
}
