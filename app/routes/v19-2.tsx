import { ActivityAfterActivityBoundary } from "@/components/feature/ActivityAfterActivityBoundary";
import afterActivitySnippet from "@/components/feature/ActivityAfterActivityBoundary/ActivityAfterActivityBoundary.tsx?raw";
import { ActivityBeforeManualToggle } from "@/components/feature/ActivityBeforeManualToggle";
import beforeActivitySnippet from "@/components/feature/ActivityBeforeManualToggle/ActivityBeforeManualToggle.tsx?raw";
import CacheSignalServerExampleSnippet from "@/components/feature/CacheSignalExample/CacheSignalServerExample.tsx?raw";
import ManualAbortExampleSnippet from "@/components/feature/CacheSignalExample/ManualAbortExample.tsx?raw";

import { EffectEventAfterUseEffectEvent } from "@/components/feature/EffectEventAfterUseEffectEvent";
import afterEffectEventSnippet from "@/components/feature/EffectEventAfterUseEffectEvent/EffectEventAfterUseEffectEvent.tsx?raw";
import { EffectEventBeforeDependencyTrap } from "@/components/feature/EffectEventBeforeDependencyTrap";
import beforeEffectEventSnippet from "@/components/feature/EffectEventBeforeDependencyTrap/EffectEventBeforeDependencyTrap.tsx?raw";
import { CodeComparisonAccordion } from "@/components/layout/CodeComparisonAccordion";
import { DemoColumn } from "@/components/layout/DemoColumn";
import { SectionTitle } from "@/components/layout/SectionTitle";
import { Button } from "@/components/ui/button";

export default function React192Route() {
  return (
    <main className="mx-auto max-w-6xl space-y-14 px-4 py-10">
      <section className="space-y-4 text-center">
        <h1 className="text-3xl font-bold text-foreground">
          React 19.2 の新機能デモ
        </h1>
        <p className="text-base text-muted-foreground">
          Activity、useEffectEvent、cacheSignal といった React 19.2
          の主要アップデートを Before / After で体験できます。
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Button asChild>
            <a
              href="https://react.dev/blog/2025/10/01/react-19-2"
              target="_blank"
              rel="noreferrer"
            >
              公式ブログを読む
            </a>
          </Button>
        </div>
      </section>

      <section className="space-y-6">
        <SectionTitle
          title="Activity (visible / hidden モード)"
          description="タブを切り替えても状態を保持しながらバックグラウンドでプリレンダリングする新しい Activity コンポーネント。"
        />
        <div className="grid gap-6 md:grid-cols-2">
          <DemoColumn label="Before React 19.2">
            <ActivityBeforeManualToggle />
          </DemoColumn>
          <DemoColumn label="After React 19.2" variant="after">
            <ActivityAfterActivityBoundary />
          </DemoColumn>
        </div>
        <CodeComparisonAccordion
          beforeLabel="Conditional Rendering"
          beforeCode={beforeActivitySnippet}
          afterLabel="Activity Boundary"
          afterCode={afterActivitySnippet}
        />
      </section>

      <section className="space-y-6">
        <SectionTitle
          title="Effect Events (useEffectEvent)"
          description="外部システムからのイベントを Effect から切り出し、不要な再実行を回避するための新しい Hook。"
        />
        <div className="grid gap-6 md:grid-cols-2">
          <DemoColumn label="Before React 19.2">
            <EffectEventBeforeDependencyTrap />
          </DemoColumn>
          <DemoColumn label="After React 19.2" variant="after">
            <EffectEventAfterUseEffectEvent />
          </DemoColumn>
        </div>
        <CodeComparisonAccordion
          beforeLabel="Effect 内にイベント処理"
          beforeCode={beforeEffectEventSnippet}
          afterLabel="Effect Event で分離"
          afterCode={afterEffectEventSnippet}
        />
      </section>

      <section className="space-y-6">
        <SectionTitle
          title="cacheSignal() (RSC スニペット)"
          description="同じ fetch をサーバーコンポーネントで評価する場合、手動 AbortController と cacheSignal の差分は以下のように実装できます。"
        />
        <CodeComparisonAccordion
          beforeLabel="手動 AbortController"
          beforeCode={ManualAbortExampleSnippet}
          afterLabel="cacheSignal を利用"
          afterCode={CacheSignalServerExampleSnippet}
        />
        <p className="text-xs text-muted-foreground">
          ※ cacheSignal() が AbortSignal
          を返すのは、サーバーコンポーネントのレンダー中に cache()
          を評価した場合のみです。
          <br />※ React Router v7.9.5
          ではRSCが正式サポートされていないため、上記コードはあくまでスニペット例として掲載しています。
        </p>
        <p className="text-xs text-muted-foreground"></p>
      </section>
    </main>
  );
}
