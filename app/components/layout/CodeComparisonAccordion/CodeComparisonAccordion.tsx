import { CodeBlock } from "@/components/feature/CodeBlock";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";

interface CodeComparisonAccordionProps {
  beforeLabel: string;
  beforeCode: string;
  afterLabel: string;
  afterCode: string;
}

export function CodeComparisonAccordion({
  beforeLabel,
  beforeCode,
  afterLabel,
  afterCode,
}: CodeComparisonAccordionProps) {
  return (
    <Accordion type="single" collapsible className="rounded-xl border">
      <AccordionItem value="code">
        <AccordionTrigger className="px-4 py-3 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
          実装コードを表示
        </AccordionTrigger>
        <AccordionContent className="px-4 pb-4">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Badge
                variant="outline"
                className="px-3 py-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground"
              >
                {beforeLabel}
              </Badge>
              <CodeBlock code={beforeCode} />
            </div>
            <div className="space-y-2">
              <Badge
                variant="default"
                className="px-3 py-1 text-xs font-semibold uppercase tracking-wide"
              >
                {afterLabel}
              </Badge>
              <CodeBlock code={afterCode} />
            </div>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
