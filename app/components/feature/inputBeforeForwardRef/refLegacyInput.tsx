import type { ComponentPropsWithoutRef } from "react";
import { forwardRef } from "react";
import { Input } from "@/components/ui/input";

export type InputBeforeForwardRefProps = ComponentPropsWithoutRef<"input">;

export const InputBeforeForwardRef = forwardRef<
  HTMLInputElement,
  InputBeforeForwardRefProps
>(function InputBeforeForwardRef(props, ref) {
    return <Input ref={ref} {...props} />;
});
