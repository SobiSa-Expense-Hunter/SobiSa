export default function detectMobileDevice(agent: string) {
  const mobileRegex = [/Android/i, /iPhone/i, /iPad/i, /iPod/i, /BlackBerry/i, /Windows Phone/i];

  return mobileRegex.some(mobile => agent.match(mobile));
}
