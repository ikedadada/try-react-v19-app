import { getSingletonHighlighter } from "shiki";

const highlighterPromise = getSingletonHighlighter({
  themes: ["github-light", "github-dark"],
  langs: ["tsx", "ts", "javascript"],
});

export async function highlightCode(
  code: string,
  lang: "tsx" | "ts" | "javascript" | string,
) {
  const highlighter = await highlighterPromise;
  return highlighter.codeToHtml(code, {
    lang,
    themes: {
      light: "github-light",
      dark: "github-dark",
    },
  });
}
