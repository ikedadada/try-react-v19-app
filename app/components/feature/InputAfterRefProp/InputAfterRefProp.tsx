import type { ComponentPropsWithRef } from "react";
import { Input } from "@/components/ui/input";

export type InputAfterRefPropProps = ComponentPropsWithRef<"input">;

export function InputAfterRefProp({ ref, className, ...props }: InputAfterRefPropProps) {
  return <Input {...props} ref={ref} className={className} />;
}
