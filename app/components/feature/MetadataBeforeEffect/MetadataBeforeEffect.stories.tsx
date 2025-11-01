import type { Meta, StoryObj } from "@storybook/react";
import { MetadataBeforeEffect } from "./MetadataBeforeEffect";

const meta = {
  title: "Feature/MetadataBeforeEffect",
  component: MetadataBeforeEffect,
  render: () => (
    <div className="space-y-2 text-sm text-muted-foreground">
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
