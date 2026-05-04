import { faqItems as mockFaq } from '@/data/faq';
import type { FaqItem } from '@/types/models';
import { getApiBase, simulateNetwork } from '@/services/config';

export async function getFaq(): Promise<FaqItem[]> {
  const base = getApiBase();
  if (base) {
    const res = await fetch(`${base}/faq`);
    if (!res.ok) throw new Error('Falha ao carregar FAQ');
    return res.json() as Promise<FaqItem[]>;
  }
  return simulateNetwork(mockFaq);
}
