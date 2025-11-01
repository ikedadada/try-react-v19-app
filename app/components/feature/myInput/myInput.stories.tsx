import { useRef } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { MyInput } from "./myInput";

const WithRef = () => {
  const ref = useRef<HTMLInputElement>(null);
  return <MyInput ref={ref} placeholder="ref をそのまま渡せます" />;
};

const meta = {
  title: "Feature/MyInput",
  component: MyInput,
  parameters: {
    layout: "centered",
  },
  render: () => <WithRef />,
} satisfies Meta<typeof MyInput>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
