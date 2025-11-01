import { useRef } from "react";
import { InputAfterRefProp } from "@/components/feature/InputAfterRefProp";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export function RefAfterRefProp() {
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
            size="sm"
            onClick={() => inputRef.current?.focus()}
            variant="outline"
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
