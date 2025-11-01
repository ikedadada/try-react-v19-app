import type { ComponentPropsWithRef } from "react";
import { Input } from "@/components/ui/input";

type MyInputProps = ComponentPropsWithRef<"input">;

export function InputAfterRefProp({ ref, className, ...props }: MyInputProps) {
  return <Input {...props} ref={ref} className={className} />;
}
