"use client";

import { useEffect, useState } from "react";

// biome-ignore lint/suspicious/noExplicitAny: <trusted code>
let highlighterPromise: Promise<any> | null = null;

function getHighlighter() {
  if (!highlighterPromise) {
    highlighterPromise = import("shiki/bundle/web").then((shiki) =>
      shiki.getSingletonHighlighter({
        themes: ["github-light", "github-dark"],
        langs: ["tsx", "ts", "javascript", "jsx"],
      }),
    );
  }
  return highlighterPromise;
}

export function CodeBlock({
  code,
  language = "tsx",
}: {
  code: string;
  language?: string;
}) {
  const [html, setHtml] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    let cleanup: (() => void) | undefined;

    async function run() {
      const highlighter = await getHighlighter();
      if (cancelled) return;

      const media = window.matchMedia("(prefers-color-scheme: dark)");
      const render = () => {
        const theme = media.matches ? "github-dark" : "github-light";
        const result = highlighter.codeToHtml(code, {
          lang: language,
          theme,
        });
        if (!cancelled) {
          setHtml(result);
        }
      };

      render();
      media.addEventListener("change", render);
      cleanup = () => media.removeEventListener("change", render);
    }

    run();

    return () => {
      cancelled = true;
      cleanup?.();
    };
  }, [code, language]);

  if (!html) {
    return (
      <pre className="overflow-auto rounded-md border border-border/60 bg-muted/40 p-4 text-xs text-muted-foreground">
        <code>{code}</code>
      </pre>
    );
  }

  return (
    <div
      className="shiki-wrapper overflow-auto rounded-md border border-border/60 text-xs"
      // biome-ignore lint/security/noDangerouslySetInnerHtml: <trusted code>
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
