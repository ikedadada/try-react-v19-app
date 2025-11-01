import type { ComponentPropsWithoutRef } from "react";
import { forwardRef } from "react";

export type LegacyInputProps = ComponentPropsWithoutRef<"input">;

export const LegacyInputBefore = forwardRef<HTMLInputElement, LegacyInputProps>(
  function LegacyInputBefore(props, ref) {
    return <input ref={ref} {...props} />;
  },
);
