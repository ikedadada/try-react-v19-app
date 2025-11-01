import { useEffect } from "react";

export function MetadataBeforeEffect() {
  useEffect(() => {
    document.title = "Legacy Metadata";
    const meta = document.createElement("meta");
    meta.name = "description";
    meta.content = "Legacy imperative metadata management";
    document.head.append(meta);

    return () => {
      meta.remove();
    };
  }, []);

  return null;
}
