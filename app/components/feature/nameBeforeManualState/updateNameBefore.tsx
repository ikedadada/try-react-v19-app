import { AlertCircle, Info } from "lucide-react";
import type { FormEvent } from "react";
import { useState } from "react";
import { Alert, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { getErrorMessage } from "@/components/utils/getErrorMessage";
import { updateUserName } from "@/lib/mock-mutations";

export function NameBeforeManualState() {
  const [savedName, setSavedName] = useState("");
  const [nameInput, setNameInput] = useState(savedName);
  const [error, setError] = useState<string | null>(null);
  const [isPending, setIsPending] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsPending(true);
    setError(null);

    try {
      const result = await updateUserName(nameInput);
      setSavedName(result.name);
    } catch (err) {
      setError(getErrorMessage(err));
    } finally {
      setIsPending(false);
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>手動状態管理フォーム</CardTitle>
        <CardDescription>
          Pending 状態やエラーの追跡を useState で都度管理する従来の実装例です。
        </CardDescription>
      </CardHeader>
      <Separator />
      <CardContent className="space-y-4">
        <form className="space-y-3" onSubmit={handleSubmit}>
          <Label className="flex flex-col items-start gap-1">
            <span>お名前</span>
            <Input
              name="name"
              onChange={(event) => setNameInput(event.target.value)}
              placeholder="例: React 18 User"
              value={nameInput}
            />
          </Label>
          <div className="flex justify-end">
            <Button type="submit" variant="outline" disabled={isPending}>
              {isPending ? "更新中..." : "名前を更新"}
            </Button>
          </div>
        </form>
        {error ? (
          <Alert variant="destructive">
            <AlertCircle />
            <AlertTitle>{error}</AlertTitle>
          </Alert>
        ) : null}
        <Separator />
        <dl className="flex flex-col gap-2 text-sm">
          <div className="flex items-center justify-between">
            <dt className="text-muted-foreground">保存された名前</dt>
            <dd className="font-medium">{savedName}</dd>
          </div>
          <div className="flex items-center justify-between">
            <dt className="text-muted-foreground">Pending状態</dt>
            <dd className="font-mono text-xs">{String(isPending)}</dd>
          </div>
        </dl>
        <Separator />
        <Alert variant="destructive">
          <Info />
          <AlertTitle>
            成功・失敗に応じたロールバックやメッセージ表示を自前で記述しています。
          </AlertTitle>
        </Alert>
      </CardContent>
    </Card>
  );
}
