import type { ComponentPropsWithRef } from "react";

type MyInputProps = ComponentPropsWithRef<"input">;

export function InputAfterRefProp({ ref, className, ...props }: MyInputProps) {
  return (
    <input
      {...props}
      ref={ref}
      className={[
        "w-full rounded border border-purple-300 px-3 py-2 text-sm shadow-sm focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500 disabled:cursor-not-allowed disabled:opacity-60",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    />
  );
}
