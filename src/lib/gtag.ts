/* eslint-disable import/prefer-default-export */
declare global {
  interface Window {
    gtag: (param1: string, param2: string, param3: object) => void;
  }
}

export const pageview = (url: URL) => {
  window.gtag('config', process.env.NEXT_PUBLIC_GA_ID || '', {
    page_path: url,
  });
};

type GTagEvent = {
  action: string;
  category: string;
  label: string;
  value: number;
};

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({ action, category, label, value }: GTagEvent): void => {
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value,
  });
};
