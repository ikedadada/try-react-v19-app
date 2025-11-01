import { Info } from "lucide-react";
import { Alert, AlertTitle } from "@/components/ui/alert";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export function MetadataBeforeEffectCard() {
  return (
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
  );
}
