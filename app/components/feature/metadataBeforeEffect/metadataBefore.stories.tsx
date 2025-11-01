import type { Meta, StoryObj } from "@storybook/react";
import { MetadataBeforeEffect } from "./metadataBefore";

const meta = {
  title: "Feature/MetadataBeforeEffect",
  component: MetadataBeforeEffect,
  render: () => (
    <div className="space-y-2 text-sm text-slate-600">
      <MetadataBeforeEffect />
      <p>
        従来は useEffect などでドキュメントヘッドを命令的に更新していました。
      </p>
    </div>
  ),
} satisfies Meta<typeof MetadataBeforeEffect>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
