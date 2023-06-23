export interface NaverMainAutoCmp {
  query: string[];
  answer: string[];
  intend: string[];
  items: string[][][];
}

export interface NaverShopAutoCmp {
  items: [NotUse, [cmpNames: string[]]];
  query: string[];
}

type NotUse = null;
