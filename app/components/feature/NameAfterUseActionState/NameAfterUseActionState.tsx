import { AlertCircle, CheckCircle2Icon } from "lucide-react";
import { useActionState, useState } from "react";
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

type ActionState = {
  error: string | null;
};

const initialState: ActionState = {
  error: null,
};

export function NameAfterUseActionState() {
  const [savedName, setSavedName] = useState("React 19 User");
  const [nameInput, setNameInput] = useState(savedName);

  const [state, submitAction, isPending] = useActionState<ActionState, FormData>(
    async (_prevState, formData) => {
      const nextName = String(formData.get("name") ?? "");

      try {
        const result = await updateUserName(nextName);
        setSavedName(result.name);
        setNameInput(result.name);
        return { error: null };
      } catch (error) {
        return { error: getErrorMessage(error) };
      }
    },
    initialState,
  );

  return (
    <Card>
      <CardHeader>
        <CardTitle>useActionState によるフォーム</CardTitle>
        <CardDescription>
          Pending 管理とエラー処理をフレームワークに委ねる React 19 の推奨スタイルです。
        </CardDescription>
      </CardHeader>
      <Separator />
      <CardContent className="space-y-4">
        <form action={submitAction} className="space-y-3">
          <Label className="flex flex-col items-start gap-1">
            <span>お名前</span>
            <Input
              name="name"
              onChange={(event) => setNameInput(event.target.value)}
              placeholder="例: React 19 User"
              value={nameInput}
            />
          </Label>
          <div className="flex justify-end">
            <Button type="submit" variant="outline" disabled={isPending}>
              {isPending ? "自動で Pending 中..." : "名前を更新"}
            </Button>
          </div>
        </form>
        {state.error ? (
          <Alert variant="destructive">
            <AlertCircle className="h-4 w-4 text-destructive" />
            <AlertTitle className="text-sm text-destructive">
              {state.error}
            </AlertTitle>
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
        <Alert>
          <CheckCircle2Icon className="h-4 w-4 text-primary" />
          <AlertTitle className="text-xs text-muted-foreground">
            Pending 状態やエラーの値は useActionState から自動提供されます。
          </AlertTitle>
        </Alert>
      </CardContent>
    </Card>
  );
}
