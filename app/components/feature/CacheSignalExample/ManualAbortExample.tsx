// tab-data-manual.server.tsx
import { cache, Suspense } from "react";

const fetchTabData = cache(async (tab: string) => {
  const controller = new AbortController();
  try {
    const response = await fetch("https://api.example.com/tabs/" + tab, {
      signal: controller.signal,
    });
    return response.json();
  } catch (error) {
    controller.abort();
    throw error;
  }
});

export default async function TabDataManual({ tab }: { tab: string }) {
  const data = await fetchTabData(tab);
  return <div>{data.title}</div>;
}

export function Route() {
  return <Suspense fallback="手動で読み込み中...">{/* ... */}</Suspense>;
}
