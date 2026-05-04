/** Base URL quando existir API real; mock não usa rede. */
export function getApiBase(): string | undefined {
  const url = import.meta.env.VITE_API_URL?.trim();
  return url || undefined;
}

async function simulateNetwork<T>(data: T): Promise<T> {
  await new Promise((r) => setTimeout(r, 180));
  if (data === undefined) return data;
  return structuredClone(data as object & T) as T;
}

export { simulateNetwork };
