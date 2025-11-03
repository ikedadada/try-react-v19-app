import { useState } from "react";

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

function DashboardPanel() {
  return (
    <div className="space-y-2">
      <p className="text-sm text-muted-foreground">
        現在の指標はアクティブユーザーが 120%、コンバージョンが 48% 向上しています。
      </p>
      <ul className="grid gap-2 text-sm">
        <li className="rounded-lg border border-dashed px-3 py-2">
          次に閲覧する可能性が高いビュー: レポート、設定
        </li>
        <li className="rounded-lg border border-dashed px-3 py-2">
          バックグラウンドでプリフェッチされているページはありません。
        </li>
      </ul>
    </div>
  );
}

function SettingsPanel() {
  const [draft, setDraft] = useState("ユーザー入力はタブを切り替えると失われます。");
  const [autoSave, setAutoSave] = useState(false);

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
      <p className="rounded-lg border border-destructive/40 bg-destructive/10 px-3 py-2 text-xs text-destructive">
        タブを閉じるとフォームがアンマウントされ、入力内容が消えます。
      </p>
    </div>
  );
}

export function ActivityBeforeManualToggle() {
  const [activeTab, setActiveTab] = useState<(typeof TABS)[number]>("ダッシュボード");

  return (
    <Card>
      <CardHeader>
        <CardTitle>条件分岐による表示切り替え</CardTitle>
        <CardDescription>
          表示/非表示を切り替える度にコンポーネントがアンマウントされ、内部状態がリセットされます。
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
        {activeTab === "ダッシュボード" ? <DashboardPanel /> : <SettingsPanel />}
      </CardContent>
    </Card>
  );
}
