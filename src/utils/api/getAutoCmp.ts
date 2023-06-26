import axios from 'axios';

import type { NaverShopAutoCmp, NaverMainAutoCmp } from '@/types/autoCmp';

export async function getNaverMainAutoCmp({ text }: { text: string }) {
  const { data }: { data: NaverMainAutoCmp } = await axios.get('/api/autocmp/navermain', {
    params: { text },
  });
  return data;
}

export async function getNaverShopAutoCmp({ text }: { text: string }) {
  const { data }: { data: NaverShopAutoCmp } = await axios.get('/api/autocmp/navershop', {
    params: { text },
  });
  return data;
}
