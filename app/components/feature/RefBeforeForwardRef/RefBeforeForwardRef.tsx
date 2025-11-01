import { useRef } from "react";
import { InputBeforeForwardRef } from "@/components/feature/InputBeforeForwardRef";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export function RefBeforeForwardRef() {
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
            size="sm"
            variant="outline"
            onClick={() => inputRef.current?.focus()}
          >
            フォーカス
          </Button>
          <Button
            size="sm"
            variant="destructive"
            onClick={() => {
              if (inputRef.current) {
                inputRef.current.value = "";
              }
            }}
          >
            クリア
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
