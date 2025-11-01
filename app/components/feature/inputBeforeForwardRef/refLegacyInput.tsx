import type { ComponentPropsWithoutRef } from "react";
import { forwardRef } from "react";

export type InputBeforeForwardRefProps = ComponentPropsWithoutRef<"input">;

export const InputBeforeForwardRef = forwardRef<
  HTMLInputElement,
  InputBeforeForwardRefProps
>(function InputBeforeForwardRef(props, ref) {
    return <input ref={ref} {...props} />;
});
