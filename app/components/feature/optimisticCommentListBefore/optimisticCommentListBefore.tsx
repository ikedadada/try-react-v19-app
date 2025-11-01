import type { FormEvent } from "react";
import { useState } from "react";
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

export function OptimisticCommentListBefore() {
  const [comments, setComments] = useState<Comment[]>(initialComments);
  const [textInput, setTextInput] = useState("");
  const [isSaving, setIsSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const text = String(formData.get("comment") ?? "").trim();
    if (!text) {
      setError("コメントを入力してください。");
      return;
    }

    setError(null);
    setIsSaving(true);

    const pendingComment: Comment = { id: Date.now(), text, pending: true };
    setComments((prev) => [...prev, pendingComment]);
    setTextInput("");

    try {
      const saved = await addComment(text);
      setComments((prev) =>
        prev.map((item) => (item.id === pendingComment.id ? saved : item)),
      );
    } catch (_error) {
      setError("コメントの追加に失敗しました。ロールバックします。");
      setComments((prev) =>
        prev.filter((item) => item.id !== pendingComment.id),
      );
    } finally {
      setIsSaving(false);
    }
  }

  return (
    <div className="space-y-4 rounded-lg border border-slate-200 p-4 shadow-sm">
      <form className="space-y-3" onSubmit={handleSubmit}>
        <label className="block text-sm font-medium text-slate-700">
          新しいコメント
          <textarea
            className="mt-1 w-full rounded border border-slate-300 px-3 py-2 text-sm shadow-sm focus:border-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-500 disabled:cursor-not-allowed disabled:opacity-60"
            name="comment"
            onChange={(event) => setTextInput(event.target.value)}
            rows={3}
            value={textInput}
          />
        </label>
        <button
          className="inline-flex items-center justify-center rounded bg-slate-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 disabled:cursor-wait disabled:opacity-70"
          disabled={isSaving}
          type="submit"
        >
          {isSaving ? "送信中..." : "追加"}
        </button>
      </form>
      <ul className="space-y-2 text-sm">
        {comments.map((comment) => (
          <li
            key={comment.id}
            className="rounded border border-slate-200 bg-slate-50 px-3 py-2 text-slate-800"
          >
            <p>{comment.text}</p>
            {comment.pending ? (
              <span className="mt-1 inline-flex items-center gap-1 text-xs font-medium text-slate-600">
                <span className="h-2 w-2 animate-ping rounded-full bg-slate-400" />
                手動 Pending 管理中...
              </span>
            ) : null}
          </li>
        ))}
      </ul>
      {error ? (
        <p className="rounded-md bg-red-50 px-3 py-2 text-sm text-red-700">
          {error}
        </p>
      ) : null}
      <p className="text-xs text-slate-500">
        成功時は差し替え、失敗時はロールバックを手動で実装しています。
      </p>
    </div>
  );
}
