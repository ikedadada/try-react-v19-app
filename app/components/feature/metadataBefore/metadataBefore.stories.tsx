import type { Meta, StoryObj } from "@storybook/react";
import { MetadataBefore } from "./metadataBefore";

const meta = {
  title: "Feature/MetadataBefore",
  component: MetadataBefore,
  render: () => (
    <div className="space-y-2 text-sm text-slate-600">
      <MetadataBefore />
      <p>従来は useEffect などでドキュメントヘッドを命令的に更新していました。</p>
    </div>
  ),
} satisfies Meta<typeof MetadataBefore>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
