import type { ReactNode } from "react";
import { useRef } from "react";
import { DeepMetadataComponent } from "@/components/feature/deepMetadata";
import deepMetadataSource from "@/components/feature/deepMetadata/deepMetadataComponent.tsx?raw";
import metadataBeforeSource from "@/components/feature/metadataBefore/metadataBefore.tsx?raw";
import { MyInput } from "@/components/feature/myInput";
import myInputSource from "@/components/feature/myInput/myInput.tsx?raw";
import { OptimisticCommentList } from "@/components/feature/optimisticCommentList";
import optimisticSource from "@/components/feature/optimisticCommentList/optimisticCommentList.tsx?raw";
import { OptimisticCommentListBefore } from "@/components/feature/optimisticCommentListBefore";
import optimisticBeforeSource from "@/components/feature/optimisticCommentListBefore/optimisticCommentListBefore.tsx?raw";
import { LegacyInputBefore } from "@/components/feature/refLegacyInput";
import refLegacySource from "@/components/feature/refLegacyInput/refLegacyInput.tsx?raw";
import { UpdateNameAfter } from "@/components/feature/updateNameAfter";
import updateNameAfterSource from "@/components/feature/updateNameAfter/updateNameAfter.tsx?raw";
import { UpdateNameBefore } from "@/components/feature/updateNameBefore";
import updateNameBeforeSource from "@/components/feature/updateNameBefore/updateNameBefore.tsx?raw";

const beforeActionSnippet = updateNameBeforeSource;
const afterActionSnippet = updateNameAfterSource;
const beforeRefSnippet = refLegacySource;
const afterRefSnippet = myInputSource;
const optimisticBeforeSnippet = optimisticBeforeSource;
const optimisticSnippet = optimisticSource;
const metadataBeforeSnippet = metadataBeforeSource;
const metadataSnippet = deepMetadataSource;

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
            <UpdateNameBefore />
          </DemoColumn>
          <DemoColumn label="After React 19" code={afterActionSnippet}>
            <UpdateNameAfter />
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
            <OptimisticCommentListBefore />
          </DemoColumn>
          <DemoColumn label="After React 19" code={optimisticSnippet}>
            <OptimisticCommentList />
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
            <RefDemo />
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
            <DeepMetadataComponent />
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
      <LegacyInputBefore
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

function RefDemo() {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div className="space-y-3">
      <MyInput ref={inputRef} placeholder="ref を直接渡せます" />
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
