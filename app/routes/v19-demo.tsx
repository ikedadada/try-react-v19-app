import { CommentsAfterOptimistic } from "@/components/feature/CommentsAfterOptimistic";
import optimisticSnippet from "@/components/feature/CommentsAfterOptimistic/CommentsAfterOptimistic.tsx?raw";
import { CommentsBeforeManualRollback } from "@/components/feature/CommentsBeforeManualRollback";
import optimisticBeforeSnippet from "@/components/feature/CommentsBeforeManualRollback/CommentsBeforeManualRollback.tsx?raw";
import afterRefSnippet from "@/components/feature/InputAfterRefProp/InputAfterRefProp.tsx?raw";
import beforeRefSnippet from "@/components/feature/InputBeforeForwardRef/InputBeforeForwardRef.tsx?raw";
import { MetadataAfterHoisting } from "@/components/feature/MetadataAfterHoisting";
import metadataSnippet from "@/components/feature/MetadataAfterHoisting/MetadataAfterHoisting.tsx?raw";

import {
  // biome-ignore lint/correctness/noUnusedImports: <reference code>
  MetadataBeforeEffect,
  MetadataBeforeEffectCard,
} from "@/components/feature/MetadataBeforeEffect";
import metadataBeforeSnippet from "@/components/feature/MetadataBeforeEffect/MetadataBeforeEffect.tsx?raw";
import { NameAfterUseActionState } from "@/components/feature/NameAfterUseActionState";
import afterActionSnippet from "@/components/feature/NameAfterUseActionState/NameAfterUseActionState.tsx?raw";
import { NameBeforeManualState } from "@/components/feature/NameBeforeManualState";
import beforeActionSnippet from "@/components/feature/NameBeforeManualState/NameBeforeManualState.tsx?raw";
import { RefAfterRefProp } from "@/components/feature/RefAfterRefProp";
import { RefBeforeForwardRef } from "@/components/feature/RefBeforeForwardRef";
import { CodeComparisonAccordion } from "@/components/layout/CodeComparisonAccordion";
import { DemoColumn } from "@/components/layout/DemoColumn";
import { SectionTitle } from "@/components/layout/SectionTitle";

export default function V19DemoRoute() {
  return (
    <main className="mx-auto max-w-6xl space-y-12 px-4 py-10">
      <header className="space-y-3 text-center">
        <p className="text-sm font-semibold uppercase tracking-wide text-primary">
          React 19 Quick Tour
        </p>
        <h1 className="text-3xl font-bold text-foreground">
          React 19 の新機能を Before / After で比較
        </h1>
        <p className="text-base text-muted-foreground">
          Actions、useOptimistic、ref as prop、メタデータの巻き上げなど React 19
          のハイライトをひとつのページで体験できます。
        </p>
      </header>

      <section className="space-y-6">
        <SectionTitle
          description="Pending 状態とエラー処理の手動管理と、useActionState による宣言的なフォームアクションを比較します。"
          title="Actions (useActionState)"
        />
        <div className="grid gap-6 md:grid-cols-2">
          <DemoColumn label="Before React 19">
            <NameBeforeManualState />
          </DemoColumn>
          <DemoColumn label="After React 19">
            <NameAfterUseActionState />
          </DemoColumn>
        </div>
        <CodeComparisonAccordion
          beforeLabel="Before React 19"
          beforeCode={beforeActionSnippet}
          afterLabel="After React 19"
          afterCode={afterActionSnippet}
        />
      </section>

      <section className="space-y-6">
        <SectionTitle
          description="非同期処理の完了を待たずにリストを更新し、結果に応じて自動的に確定・ロールバックされる体験を確認できます。"
          title="Optimistic UI (useOptimistic)"
        />
        <div className="grid gap-6 md:grid-cols-2">
          <DemoColumn label="Before React 19">
            <CommentsBeforeManualRollback />
          </DemoColumn>
          <DemoColumn label="After React 19">
            <CommentsAfterOptimistic />
          </DemoColumn>
        </div>
        <CodeComparisonAccordion
          beforeLabel="Before React 19"
          beforeCode={optimisticBeforeSnippet}
          afterLabel="After React 19"
          afterCode={optimisticSnippet}
        />
      </section>

      <section className="space-y-6">
        <SectionTitle
          description="ref を通常の props として受け渡しできるため、forwardRef のボイラープレートが不要になります。"
          title="Ref as Prop"
        />
        <div className="grid gap-6 md:grid-cols-2">
          <DemoColumn label="Before React 19">
            <RefBeforeForwardRef />
          </DemoColumn>
          <DemoColumn label="After React 19">
            <RefAfterRefProp />
          </DemoColumn>
        </div>
        <CodeComparisonAccordion
          beforeLabel="Before React 19"
          beforeCode={beforeRefSnippet}
          afterLabel="After React 19"
          afterCode={afterRefSnippet}
        />
      </section>

      <section className="space-y-6">
        <SectionTitle
          description="コンポーネントツリー深部から直接メタデータを提供しても SSR 時に自動でドキュメントヘッドへ巻き上げられます。"
          title="Metadata Hoisting & precedence"
        />
        <div className="grid gap-6 md:grid-cols-2">
          <DemoColumn label="Before React 19">
            <MetadataBeforeEffectCard />
          </DemoColumn>
          <DemoColumn label="After React 19">
            <MetadataAfterHoisting />
          </DemoColumn>
        </div>
        <CodeComparisonAccordion
          beforeLabel="Before React 19"
          beforeCode={metadataBeforeSnippet}
          afterLabel="After React 19"
          afterCode={metadataSnippet}
        />
      </section>
    </main>
  );
}
