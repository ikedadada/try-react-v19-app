import { useActionState, useState } from "react";
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

  const [state, submitAction, isPending] = useActionState<
    ActionState,
    FormData
  >(async (_prevState, formData) => {
    const nextName = String(formData.get("name") ?? "");

    try {
      const result = await updateUserName(nextName);
      setSavedName(result.name);
      setNameInput(result.name);
      return { error: null };
    } catch (error) {
      return { error: getErrorMessage(error) };
    }
  }, initialState);

  return (
    <div className="space-y-4 rounded-lg border border-emerald-200 p-4 shadow-sm">
      <form action={submitAction} className="space-y-3">
        <label className="block text-sm font-medium text-emerald-700">
          お名前
          <input
            className="mt-1 w-full rounded border border-emerald-300 px-3 py-2 text-base shadow-sm focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 disabled:cursor-not-allowed disabled:opacity-60"
            name="name"
            onChange={(event) => setNameInput(event.target.value)}
            type="text"
            value={nameInput}
          />
        </label>
        <button
          className="inline-flex items-center justify-center rounded bg-emerald-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 disabled:cursor-wait disabled:opacity-70"
          disabled={isPending}
          type="submit"
        >
          {isPending ? "自動で Pending 中..." : "名前を更新"}
        </button>
      </form>
      <dl className="space-y-1 text-sm">
        <div className="flex items-center justify-between">
          <dt className="font-medium text-emerald-700">保存された名前</dt>
          <dd className="font-semibold text-emerald-900">{savedName}</dd>
        </div>
        <div className="flex items-center justify-between">
          <dt className="font-medium text-emerald-700">Pending状態</dt>
          <dd className="font-mono text-xs">{String(isPending)}</dd>
        </div>
      </dl>
      {state.error ? (
        <p className="rounded-md bg-emerald-50 px-3 py-2 text-sm text-emerald-900">
          {state.error}
        </p>
      ) : null}
    </div>
  );
}
