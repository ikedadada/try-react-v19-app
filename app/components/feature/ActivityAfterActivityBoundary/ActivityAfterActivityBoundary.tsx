import { Activity, useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const TABS = ["ダッシュボード", "設定"] as const;

function DashboardPanel({ nextTab }: { nextTab: string }) {
  return (
    <div className="space-y-2">
      <p className="text-sm text-muted-foreground">
        Activity により非表示領域をバックグラウンドで更新できます。
      </p>
      <ul className="grid gap-2 text-sm">
        <li className="rounded-lg border border-dashed px-3 py-2">
          次に開きそうなビュー「{nextTab}」を hidden
          モードでプリレンダリング中。
        </li>
        <li className="rounded-lg border border-dashed px-3 py-2">
          visible な内容の描画と競合しないよう優先度が自動調整されます。
        </li>
      </ul>
    </div>
  );
}

function SettingsPanel() {
  const [draft, setDraft] = useState(
    "Activity なら非表示でも状態を維持できます。",
  );
  const [autoSave, setAutoSave] = useState(true);

  return (
    <div className="space-y-4">
      <label className="flex flex-col gap-2 text-sm">
        <span className="font-medium text-foreground">サマリーテキスト</span>
        <textarea
          className="rounded-lg border bg-background p-3 text-sm"
          value={draft}
          onChange={(event) => setDraft(event.target.value)}
        />
      </label>
      <label className="flex items-center gap-2 text-sm font-medium text-foreground">
        <input
          type="checkbox"
          checked={autoSave}
          onChange={(event) => setAutoSave(event.target.checked)}
          className="size-4 rounded border"
        />
        自動保存を有効にする
      </label>
      <p className="rounded-lg border border-primary/40 bg-primary/10 px-3 py-2 text-xs text-primary">
        hidden モードでは描画されませんが、state は保持されます。
      </p>
    </div>
  );
}

export function ActivityAfterActivityBoundary() {
  const [activeTab, setActiveTab] =
    useState<(typeof TABS)[number]>("ダッシュボード");
  const nextTab = useMemo(
    () => (activeTab === "ダッシュボード" ? "設定" : "ダッシュボード"),
    [activeTab],
  );

  return (
    <Card>
      <CardHeader>
        <CardTitle>&lt;Activity /&gt; によるモード管理</CardTitle>
        <CardDescription>
          visible / hidden
          の切り替えでバックグラウンドレンダリングしつつ内部状態を温存します。
        </CardDescription>
      </CardHeader>
      <Separator />
      <CardContent className="space-y-4">
        <div className="flex gap-2">
          {TABS.map((tab) => (
            <Button
              key={tab}
              variant={tab === activeTab ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </Button>
          ))}
        </div>
        <Activity mode={activeTab === "ダッシュボード" ? "visible" : "hidden"}>
          <DashboardPanel nextTab={nextTab} />
        </Activity>
        <Activity mode={activeTab === "設定" ? "visible" : "hidden"}>
          <SettingsPanel />
        </Activity>
      </CardContent>
    </Card>
  );
}
