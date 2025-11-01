import type { FormEvent } from "react";
import { useOptimistic, useState } from "react";
import { addComment } from "@/lib/mock-mutations";

type Comment = {
  id: number;
  text: string;
  optimistic?: boolean;
};

const staticComments: Comment[] = [
  { id: 1, text: "React 19 でフォームが楽になりましたね！" },
  { id: 2, text: "useOptimistic の DX が気になる 👀" },
];

export function OptimisticCommentList() {
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
    if (!trimmed) {
      setError("コメントを入力してください。");
      return;
    }

    setError(null);
    const optimisticComment: Comment = {
      id: Date.now(),
      text: trimmed,
      optimistic: true,
    };

    addOptimisticComment(optimisticComment);
    setTextInput("");

    try {
      const saved = await addComment(trimmed);
      setComments((prev) => [...prev, saved]);
    } catch (_error) {
      setError("コメントの追加に失敗しました。");
    }
  }

  return (
    <div className="space-y-4 rounded-lg border border-indigo-200 p-4 shadow-sm">
      <form className="space-y-3" onSubmit={handleSubmit}>
        <label className="block text-sm font-medium text-indigo-700">
          新しいコメント
          <textarea
            className="mt-1 w-full rounded border border-indigo-300 px-3 py-2 text-sm shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 disabled:cursor-not-allowed disabled:opacity-60"
            name="comment"
            onChange={(event) => setTextInput(event.target.value)}
            rows={3}
            value={textInput}
          />
        </label>
        <button
          className="inline-flex items-center justify-center rounded bg-indigo-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2"
          type="submit"
        >
          追加
        </button>
      </form>
      <ul className="space-y-2">
        {optimisticComments.map((comment) => (
          <li
            key={comment.id}
            className="rounded border border-indigo-100 bg-indigo-50 px-3 py-2 text-sm text-indigo-900"
          >
            <p>{comment.text}</p>
            {comment.optimistic ? (
              <span className="mt-1 inline-flex items-center gap-1 text-xs font-medium text-indigo-700">
                <span className="h-2 w-2 animate-pulse rounded-full bg-indigo-500" />
                Pending...
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
    </div>
  );
}
