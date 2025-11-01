import type { Meta, StoryObj } from "@storybook/react";
import { Suspense } from "react";
import { CodeBlock } from "./CodeBlock.client";

const meta = {
  title: "Feature/CodeBlock",
  component: CodeBlock,
  parameters: {
    layout: "centered",
  },
  render: (args) => (
    <div className="w-full max-w-xl">
      <Suspense fallback={<div>Loading syntax highlight...</div>}>
        <CodeBlock {...args} />
      </Suspense>
    </div>
  ),
  args: {
    code: "const message: string = \"Hello, world!\";",
    language: "tsx",
  },
} satisfies Meta<typeof CodeBlock>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
