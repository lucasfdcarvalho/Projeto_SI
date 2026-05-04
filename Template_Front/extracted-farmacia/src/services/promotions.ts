import { promotions as mockPromotions } from '@/data/promotions';
import type { Promotion } from '@/types/models';
import { getApiBase, simulateNetwork } from '@/services/config';

export async function getPromotions(): Promise<Promotion[]> {
  const base = getApiBase();
  if (base) {
    const res = await fetch(`${base}/promotions`);
    if (!res.ok) throw new Error('Falha ao carregar promoções');
    return res.json() as Promise<Promotion[]>;
  }
  return simulateNetwork(mockPromotions);
}
