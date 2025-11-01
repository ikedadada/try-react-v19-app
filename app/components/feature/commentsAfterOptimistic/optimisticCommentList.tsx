import { AlertCircle, CheckCircle2Icon } from "lucide-react";
import type { FormEvent } from "react";
import { startTransition, useOptimistic, useState } from "react";
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

const staticComments: Comment[] = [
  { id: 1, text: "React 19 でフォームが楽になりましたね！" },
  { id: 2, text: "useOptimistic の DX が気になる 👀" },
];

export function CommentsAfterOptimistic() {
  const [comments, setComments] = useState<Comment[]>(staticComments);
  const [optimisticComments, addOptimisticComment] = useOptimistic(
    comments,
    (state, comment: Comment) => [...state, comment],
  );
  const [textInput, setTextInput] = useState("");
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const trimmed = textInput.trim();

    setError(null);
    const optimisticComment: Comment = {
      id: Date.now(),
      text: trimmed,
      pending: true,
    };

    addOptimisticComment(optimisticComment);
    setTextInput("");

    startTransition(async () => {
      try {
        const saved = await addComment(trimmed);
        setComments((prev) => [...prev, saved]);
      } catch (error) {
        setError(getErrorMessage(error));
      }
    });
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>useOptimistic によるリスト更新</CardTitle>
        <CardDescription>
          追加後すぐに UI
          に反映し、結果に応じて自動的に確定・ロールバックされるパターンです。
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
            <Button type="submit" variant="outline">
              追加
            </Button>
          </div>
        </form>
        <ul className="space-y-2 text-sm">
          {optimisticComments.map((comment) => (
            <li
              key={comment.id}
              className="rounded-md border border-primary/20 bg-primary/5 px-3 py-2 text-primary"
            >
              <p>{comment.text}</p>
              {comment.pending ? (
                <span className="mt-1 inline-flex items-center gap-1 text-xs font-medium text-muted-foreground">
                  <span className="h-2 w-2 animate-ping rounded-full bg-muted-foreground" />
                  Pending 管理中...
                </span>
              ) : null}
            </li>
          ))}
        </ul>
        {error ? (
          <Alert variant="destructive">
            <AlertCircle className="h-4 w-4 text-destructive" />
            <AlertTitle className="text-sm text-destructive">
              {error}
            </AlertTitle>
          </Alert>
        ) : null}
        <Separator />
        <Alert>
          <CheckCircle2Icon />
          <AlertTitle>
            Pending 状態は useOptimistic が自動的に確定・ロールバックします。
          </AlertTitle>
        </Alert>
      </CardContent>
    </Card>
  );
}
