import { useRef } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { InputAfterRefProp } from "./myInput";

const WithRef = () => {
  const ref = useRef<HTMLInputElement>(null);
  return <InputAfterRefProp ref={ref} placeholder="ref をそのまま渡せます" />;
};

const meta = {
  title: "Feature/InputAfterRefProp",
  component: InputAfterRefProp,
  parameters: {
    layout: "centered",
  },
  render: () => <WithRef />,
} satisfies Meta<typeof InputAfterRefProp>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
