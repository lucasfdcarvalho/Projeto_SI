import type { SiteInfo } from '@/types/models';
import { siteInfo as mockSite } from '@/data/site';
import { getApiBase, simulateNetwork } from '@/services/config';

export interface ContactPayload {
  name: string;
  email: string;
  phone?: string;
  message: string;
}

export async function getSiteInfo(): Promise<SiteInfo> {
  const base = getApiBase();
  if (base) {
    const res = await fetch(`${base}/site`);
    if (!res.ok) throw new Error('Falha ao carregar dados do site');
    return res.json() as Promise<SiteInfo>;
  }
  return simulateNetwork(mockSite);
}

/** Envio mock: em produção substituir por POST real. */
export async function submitContact(_payload: ContactPayload): Promise<{ ok: true }> {
  const base = getApiBase();
  if (base) {
    const res = await fetch(`${base}/contact`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(_payload),
    });
    if (!res.ok) throw new Error('Não foi possível enviar sua mensagem.');
    return { ok: true };
  }
  await new Promise((r) => setTimeout(r, 400));
  return { ok: true };
}
