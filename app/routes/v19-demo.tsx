import { Info } from "lucide-react";
import type { ReactNode } from "react";
import { useRef } from "react";
import { CommentsAfterOptimistic } from "@/components/feature/commentsAfterOptimistic";
import commentsAfterOptimisticSource from "@/components/feature/commentsAfterOptimistic/optimisticCommentList.tsx?raw";
import { CommentsBeforeManualRollback } from "@/components/feature/commentsBeforeManualRollback";
import commentsBeforeManualRollbackSource from "@/components/feature/commentsBeforeManualRollback/optimisticCommentListBefore.tsx?raw";
import { InputAfterRefProp } from "@/components/feature/inputAfterRefProp";
import inputAfterRefPropSource from "@/components/feature/inputAfterRefProp/myInput.tsx?raw";
import { InputBeforeForwardRef } from "@/components/feature/inputBeforeForwardRef";
import inputBeforeForwardRefSource from "@/components/feature/inputBeforeForwardRef/refLegacyInput.tsx?raw";
import { MetadataAfterHoisting } from "@/components/feature/metadataAfterHoisting";
import metadataAfterHoistingSource from "@/components/feature/metadataAfterHoisting/deepMetadataComponent.tsx?raw";
// biome-ignore lint/correctness/noUnusedImports: <this is reference code>
import { MetadataBeforeEffect } from "@/components/feature/metadataBeforeEffect";
import metadataBeforeEffectSource from "@/components/feature/metadataBeforeEffect/metadataBefore.tsx?raw";
import { NameAfterUseActionState } from "@/components/feature/nameAfterUseActionState";
import nameAfterUseActionStateSource from "@/components/feature/nameAfterUseActionState/updateNameAfter.tsx?raw";
import { NameBeforeManualState } from "@/components/feature/nameBeforeManualState";
import nameBeforeManualStateSource from "@/components/feature/nameBeforeManualState/updateNameBefore.tsx?raw";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Alert, AlertTitle } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CodeBlockClient } from "@/components/CodeBlock.client";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

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
        <CodeAccordion
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
        <CodeAccordion
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
            <RefBeforeDemo />
          </DemoColumn>
          <DemoColumn label="After React 19">
            <RefAfterDemo />
          </DemoColumn>
        </div>
        <CodeAccordion
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
            <Card>
              <CardHeader>
                <CardTitle>命令的なメタデータ管理</CardTitle>
                <CardDescription>
                  useEffect で document.title や meta
                  タグを直接操作する、これまでの代表的な手法です。
                </CardDescription>
              </CardHeader>
              <Separator />
              <CardContent>
                <Alert variant="destructive">
                  <Info />
                  <AlertTitle>
                    メタデータの変更を副作用として手動で管理する必要がありました。
                  </AlertTitle>
                </Alert>
              </CardContent>
            </Card>
          </DemoColumn>
          <DemoColumn label="After React 19">
            <MetadataAfterHoisting />
          </DemoColumn>
        </div>
        <CodeAccordion
          beforeLabel="Before React 19"
          beforeCode={metadataBeforeSnippet}
          afterLabel="After React 19"
          afterCode={metadataSnippet}
        />
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
      <h2 className="text-2xl font-semibold text-foreground">{title}</h2>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  );
}

type DemoColumnProps = {
  label: string;
  children: ReactNode;
};

function DemoColumn({ label, children }: DemoColumnProps) {
  const isAfter = label.toLowerCase().includes("after");
  return (
    <div className="space-y-3">
      <Badge
        variant="outline"
        className={cn(
          "px-3 py-1 text-xs font-semibold uppercase tracking-wide",
          !isAfter && "text-muted-foreground",
        )}
      >
        {label}
      </Badge>
      <div className="space-y-3">
        <div className="min-h-0">{children}</div>
      </div>
    </div>
  );
}

type CodeAccordionProps = {
  beforeLabel: string;
  beforeCode: string;
  afterLabel: string;
  afterCode: string;
};

function CodeAccordion({
  beforeLabel,
  beforeCode,
  afterLabel,
  afterCode,
}: CodeAccordionProps) {
  return (
    <Accordion type="single" collapsible className="rounded-xl border">
      <AccordionItem value="code">
        <AccordionTrigger className="px-4 py-3 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
          実装コードを表示
        </AccordionTrigger>
        <AccordionContent className="px-4 pb-4">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Badge
                variant="outline"
                className="px-3 py-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground"
              >
                {beforeLabel}
              </Badge>
              <CodeBlockClient code={beforeCode} />
            </div>
            <div className="space-y-2">
              <Badge
                variant="outline"
                className="px-3 py-1 text-xs font-semibold uppercase tracking-wide"
              >
                {afterLabel}
              </Badge>
              <CodeBlockClient code={afterCode} />
            </div>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}

function RefBeforeDemo() {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <Card>
      <CardHeader>
        <CardTitle>forwardRef を使った受け渡し</CardTitle>
        <CardDescription>
          ref を渡すには forwardRef
          でラップしたコンポーネントを経由する必要がありました。
        </CardDescription>
      </CardHeader>
      <Separator />
      <CardContent className="space-y-3">
        <InputBeforeForwardRef
          ref={inputRef}
          className="w-full"
          placeholder="forwardRef で受け取る必要がありました"
        />
        <div className="flex justify-end gap-2">
          <Button
            onClick={() => inputRef.current?.focus()}
            size="sm"
            variant="secondary"
            type="button"
          >
            フォーカス
          </Button>
          <Button
            onClick={() => {
              if (inputRef.current) {
                inputRef.current.value = "";
              }
            }}
            variant="outline"
            size="sm"
          >
            クリア
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

function RefAfterDemo() {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <Card>
      <CardHeader>
        <CardTitle>ref を props として渡す</CardTitle>
        <CardDescription>
          forwardRef なしで ref
          を受け取れるため、ボイラープレートが大幅に減ります。
        </CardDescription>
      </CardHeader>
      <Separator />
      <CardContent className="space-y-3">
        <InputAfterRefProp
          ref={inputRef}
          placeholder="ref を props として渡せます"
        />
        <div className="flex justify-end gap-2">
          <Button
            onClick={() => inputRef.current?.focus()}
            variant="secondary"
            size="sm"
          >
            フォーカス
          </Button>
          <Button
            onClick={() => {
              if (inputRef.current) {
                inputRef.current.value = "";
              }
            }}
            size="sm"
            variant="outline"
          >
            クリア
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
