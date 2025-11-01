import { CheckCircle2Icon } from "lucide-react";
import { Alert, AlertTitle } from "@/components/ui/alert";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export function MetadataAfterHoisting() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>深い階層からのメタデータ</CardTitle>
        <CardDescription>
          React 19
          ではコンポーネントツリーの任意の位置からメタデータを宣言でき、SSR 時に
          自動でドキュメントヘッドへ巻き上げられます。
        </CardDescription>
      </CardHeader>
      <Separator />
      <CardContent className="space-y-3">
        <Alert>
          <CheckCircle2Icon />
          <AlertTitle>
            このセクションでは
            <code className="mx-1 rounded bg-muted px-1 py-0.5 text-[11px] font-semibold">
              &lt;title&gt;
            </code>
            と
            <code className="mx-1 rounded bg-muted px-1 py-0.5 text-[11px] font-semibold">
              &lt;meta&gt;
            </code>
            を直接レンダーしています。
          </AlertTitle>
        </Alert>
        <Alert>
          <CheckCircle2Icon />
          <AlertTitle>
            precedence を指定したスタイルシートもこの階層から宣言できます。
          </AlertTitle>
        </Alert>
      </CardContent>
      <title>React 19 Metadata Demo</title>
      <meta
        content="React 19 のメタデータ hoisting と precedence 属性のデモ"
        name="description"
      />
      <link
        href="/styles/high-precedence.css"
        precedence="high"
        rel="stylesheet"
      />
    </Card>
  );
}
