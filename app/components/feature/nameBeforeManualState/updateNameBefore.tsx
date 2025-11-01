import type { FormEvent } from "react";
import { useState } from "react";
import { getErrorMessage } from "@/components/utils/getErrorMessage";
import { updateUserName } from "@/lib/mock-mutations";

export function NameBeforeManualState() {
  const [savedName, setSavedName] = useState("React Router User");
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
    <div className="space-y-4 rounded-lg border border-slate-200 p-4 shadow-sm">
      <form className="space-y-3" onSubmit={handleSubmit}>
        <label className="block text-sm font-medium text-slate-700">
          お名前
          <input
            className="mt-1 w-full rounded border border-slate-300 px-3 py-2 text-base shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:cursor-not-allowed disabled:opacity-60"
            name="name"
            onChange={(event) => setNameInput(event.target.value)}
            type="text"
            value={nameInput}
          />
        </label>
        <button
          className="inline-flex items-center justify-center rounded bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 disabled:cursor-wait disabled:opacity-70"
          disabled={isPending}
          type="submit"
        >
          {isPending ? "更新中..." : "名前を更新"}
        </button>
      </form>
      <dl className="space-y-1 text-sm">
        <div className="flex items-center justify-between">
          <dt className="font-medium text-slate-700">保存された名前</dt>
          <dd className="font-semibold text-slate-900">{savedName}</dd>
        </div>
        <div className="flex items-center justify-between">
          <dt className="font-medium text-slate-700">Pending状態</dt>
          <dd className="font-mono text-xs">{String(isPending)}</dd>
        </div>
      </dl>
      {error ? (
        <p className="rounded-md bg-red-50 px-3 py-2 text-sm text-red-700">
          {error}
        </p>
      ) : null}
    </div>
  );
}
