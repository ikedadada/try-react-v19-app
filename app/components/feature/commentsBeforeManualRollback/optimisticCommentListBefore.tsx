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
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { getErrorMessage } from "@/components/utils/getErrorMessage";
import { addComment } from "@/lib/mock-mutations";

type Comment = {
  id: number;
  text: string;
  pending?: boolean;
};

const initialComments: Comment[] = [
  { id: 1, text: "React 18 ではここが大変でした" },
  { id: 2, text: "State のロールバックを忘れがち" },
];

export function CommentsBeforeManualRollback() {
  const [comments, setComments] = useState<Comment[]>(initialComments);
  const [textInput, setTextInput] = useState("");
  const [isSaving, setIsSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const trimmed = textInput.trim();

    setError(null);
    setIsSaving(true);

    const pendingComment: Comment = {
      id: Date.now(),
      text: trimmed,
      pending: true,
    };
    setComments((prev) => [...prev, pendingComment]);
    setTextInput("");

    try {
      const saved = await addComment(trimmed);
      setComments((prev) =>
        prev.map((item) => (item.id === pendingComment.id ? saved : item)),
      );
    } catch (error) {
      setError(getErrorMessage(error));
      setComments((prev) =>
        prev.filter((item) => item.id !== pendingComment.id),
      );
    } finally {
      setIsSaving(false);
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>手動ロールバックのコメントフォーム</CardTitle>
        <CardDescription>
          楽観的にアイテムを追加し、自前でロールバック処理を管理する従来パターンです。
        </CardDescription>
      </CardHeader>
      <Separator />
      <CardContent className="space-y-4">
        <form className="space-y-3" onSubmit={handleSubmit}>
          <Label className="flex flex-col items-start gap-1">
            <span>新しいコメント</span>
            <Textarea
              name="comment"
              onChange={(event) => setTextInput(event.target.value)}
              placeholder="コメントを入力"
              rows={3}
              value={textInput}
            />
          </Label>
          <div className="flex justify-end">
            <Button type="submit" variant="outline" disabled={isSaving}>
              {isSaving ? "送信中..." : "追加"}
            </Button>
          </div>
        </form>
        <ul className="space-y-2 text-sm">
          {comments.map((comment) => (
            <li
              key={comment.id}
              className="rounded-md border border-border/60 bg-muted/40 px-3 py-2 text-foreground"
            >
              <p>{comment.text}</p>
              {comment.pending ? (
                <span className="mt-1 inline-flex items-center gap-1 text-xs font-medium text-muted-foreground">
                  <span className="h-2 w-2 animate-ping rounded-full bg-muted-foreground" />
                  手動 Pending 管理中...
                </span>
              ) : null}
            </li>
          ))}
        </ul>
        {error ? (
          <Alert variant="destructive">
            <AlertCircle />
            <AlertTitle>{error}</AlertTitle>
          </Alert>
        ) : null}
        <Separator />
        <Alert variant="destructive">
          <Info />
          <AlertTitle>
            成功時は差し替え、失敗時はロールバックをすべて自前で実装しています。
          </AlertTitle>
        </Alert>
      </CardContent>
    </Card>
  );
}
