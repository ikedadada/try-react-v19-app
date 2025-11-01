import type { ReactNode } from "react";
import { useRef } from "react";
import { MetadataAfterHoisting } from "@/components/feature/metadataAfterHoisting";
import metadataAfterHoistingSource from "@/components/feature/metadataAfterHoisting/deepMetadataComponent.tsx?raw";
import { MetadataBeforeEffect } from "@/components/feature/metadataBeforeEffect";
import metadataBeforeEffectSource from "@/components/feature/metadataBeforeEffect/metadataBefore.tsx?raw";
import { InputAfterRefProp } from "@/components/feature/inputAfterRefProp";
import inputAfterRefPropSource from "@/components/feature/inputAfterRefProp/myInput.tsx?raw";
import { InputBeforeForwardRef } from "@/components/feature/inputBeforeForwardRef";
import inputBeforeForwardRefSource from "@/components/feature/inputBeforeForwardRef/refLegacyInput.tsx?raw";
import { CommentsAfterOptimistic } from "@/components/feature/commentsAfterOptimistic";
import commentsAfterOptimisticSource from "@/components/feature/commentsAfterOptimistic/optimisticCommentList.tsx?raw";
import { CommentsBeforeManualRollback } from "@/components/feature/commentsBeforeManualRollback";
import commentsBeforeManualRollbackSource from "@/components/feature/commentsBeforeManualRollback/optimisticCommentListBefore.tsx?raw";
import { NameAfterUseActionState } from "@/components/feature/nameAfterUseActionState";
import nameAfterUseActionStateSource from "@/components/feature/nameAfterUseActionState/updateNameAfter.tsx?raw";
import { NameBeforeManualState } from "@/components/feature/nameBeforeManualState";
import nameBeforeManualStateSource from "@/components/feature/nameBeforeManualState/updateNameBefore.tsx?raw";

const beforeActionSnippet = nameBeforeManualStateSource;
const afterActionSnippet = nameAfterUseActionStateSource;
const beforeRefSnippet = inputBeforeForwardRefSource;
const afterRefSnippet = inputAfterRefPropSource;
const optimisticBeforeSnippet = commentsBeforeManualRollbackSource;
const optimisticSnippet = commentsAfterOptimisticSource;
const metadataBeforeSnippet = metadataBeforeEffectSource;
const metadataSnippet = metadataAfterHoistingSource;

export default function V19DemoRoute() {
  return (
    <main className="mx-auto max-w-6xl space-y-12 px-4 py-10">
      <header className="space-y-3 text-center">
        <p className="text-sm font-semibold uppercase tracking-wide text-blue-600">
          React 19 Quick Tour
        </p>
        <h1 className="text-3xl font-bold text-slate-900">
          React 19 の新機能を Before / After で比較
        </h1>
        <p className="text-base text-slate-600">
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
          <DemoColumn label="Before React 19" code={beforeActionSnippet}>
            <NameBeforeManualState />
          </DemoColumn>
          <DemoColumn label="After React 19" code={afterActionSnippet}>
            <NameAfterUseActionState />
          </DemoColumn>
        </div>
      </section>

      <section className="space-y-6">
        <SectionTitle
          description="非同期処理の完了を待たずにリストを更新し、結果に応じて自動的に確定・ロールバックされる体験を確認できます。"
          title="Optimistic UI (useOptimistic)"
        />
        <div className="grid gap-6 md:grid-cols-2">
          <DemoColumn label="Before React 19" code={optimisticBeforeSnippet}>
            <CommentsBeforeManualRollback />
          </DemoColumn>
          <DemoColumn label="After React 19" code={optimisticSnippet}>
            <CommentsAfterOptimistic />
          </DemoColumn>
        </div>
      </section>

      <section className="space-y-6">
        <SectionTitle
          description="ref を通常の props として受け渡しできるため、forwardRef のボイラープレートが不要になります。"
          title="Ref as Prop"
        />
        <div className="grid gap-6 md:grid-cols-2">
          <DemoColumn label="Before React 19" code={beforeRefSnippet}>
            <RefBeforeDemo />
          </DemoColumn>
          <DemoColumn label="After React 19" code={afterRefSnippet}>
            <RefAfterDemo />
          </DemoColumn>
        </div>
      </section>

      <section className="space-y-6">
        <SectionTitle
          description="コンポーネントツリー深部から直接メタデータを提供しても SSR 時に自動でドキュメントヘッドへ巻き上げられます。"
          title="Metadata Hoisting & precedence"
        />
        <div className="grid gap-6 md:grid-cols-2">
          <DemoColumn label="Before React 19" code={metadataBeforeSnippet}>
            <div className="flex h-full items-center justify-center rounded-lg border border-dashed border-slate-300 bg-slate-100/70 p-6 text-center text-sm text-slate-500">
              useEffect などで imperative に head を操作する必要がありました。
            </div>
          </DemoColumn>
          <DemoColumn label="After React 19" code={metadataSnippet}>
            <MetadataAfterHoisting />
          </DemoColumn>
        </div>
      </section>
    </main>
  );
}

type SectionTitleProps = {
  title: string;
  description: string;
};

function SectionTitle({ title, description }: SectionTitleProps) {
  return (
    <div className="space-y-2 text-center md:text-left">
      <h2 className="text-2xl font-semibold text-slate-900">{title}</h2>
      <p className="text-sm text-slate-600">{description}</p>
    </div>
  );
}

type DemoColumnProps = {
  label: string;
  code: string;
  children: ReactNode;
};

function DemoColumn({ label, code, children }: DemoColumnProps) {
  return (
    <div className="space-y-4 rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
      <div className="flex items-center justify-between">
        <span className="text-xs font-semibold uppercase tracking-wide text-slate-500">
          {label}
        </span>
      </div>
      <div>{children}</div>
      <CodeBlock code={code} />
    </div>
  );
}

type CodeBlockProps = {
  code: string;
};

function CodeBlock({ code }: CodeBlockProps) {
  const formatted = code.trim();
  return (
    <pre className="overflow-auto rounded-lg bg-slate-950/95 p-4 text-xs text-slate-100">
      <code>{formatted}</code>
    </pre>
  );
}

function RefBeforeDemo() {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div className="space-y-3">
      <InputBeforeForwardRef
        ref={inputRef}
        className="w-full rounded border border-slate-300 px-3 py-2 text-sm shadow-sm focus:border-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-500"
        placeholder="forwardRef で受け取る必要がありました"
      />
      <div className="flex gap-2">
        <button
          className="inline-flex items-center justify-center rounded bg-slate-600 px-3 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2"
          onClick={() => inputRef.current?.focus()}
          type="button"
        >
          フォーカス
        </button>
        <button
          className="inline-flex items-center justify-center rounded border border-slate-300 px-3 py-1.5 text-xs font-semibold text-slate-700 transition-colors hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-slate-300 focus:ring-offset-2"
          onClick={() => {
            if (inputRef.current) {
              inputRef.current.value = "";
            }
          }}
          type="button"
        >
          クリア
        </button>
      </div>
    </div>
  );
}

function RefAfterDemo() {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div className="space-y-3">
      <InputAfterRefProp
        ref={inputRef}
        placeholder="ref を props として渡せます"
      />
      <div className="flex gap-2">
        <button
          className="inline-flex items-center justify-center rounded bg-purple-600 px-3 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2"
          onClick={() => inputRef.current?.focus()}
          type="button"
        >
          フォーカス
        </button>
        <button
          className="inline-flex items-center justify-center rounded border border-purple-200 px-3 py-1.5 text-xs font-semibold text-purple-700 transition-colors hover:bg-purple-50 focus:outline-none focus:ring-2 focus:ring-purple-200 focus:ring-offset-2"
          onClick={() => {
            if (inputRef.current) {
              inputRef.current.value = "";
            }
          }}
          type="button"
        >
          クリア
        </button>
      </div>
    </div>
  );
}
