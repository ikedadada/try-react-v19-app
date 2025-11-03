// tab-data-auto.server.tsx
import { cache, cacheSignal, Suspense } from "react";

const fetchTabData = cache(async (tab: string) => {
  const signal = cacheSignal();
  const response = await fetch("https://api.example.com/tabs/" + tab, {
    signal: signal ? (signal as AbortSignal) : undefined,
  });
  return response.json();
});

export default async function TabDataAuto({ tab }: { tab: string }) {
  const data = await fetchTabData(tab);
  return <div>{data.title}</div>;
}

export function Route() {
  return (
    <Suspense fallback="cacheSignal で読み込み中...">{/* ... */}</Suspense>
  );
}
