export interface Alternatives {
  title: string;
  image?: string;
  price: number;
  unit: string;
  category: AlternativesCategory;
}

export interface ShareData {
  files?: File[];
  text?: string;
  title?: string;
  url?: string;
}

export const enum AlternativesCategory {
  necessary = 'necessary',
  funny = 'funny',
  stable = 'stable',
}

export const isAlternativesCategoryKey = (key: string): key is AlternativesCategory => {
  return key === 'necessary' || key === 'funny' || key === 'stable';
};
