import React from "react";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeSanitize from "rehype-sanitize";
import rehypeStringify from "rehype-stringify";

function ContentRenderer({ content, id }: { content: string; id: string }) {
  React.useEffect(() => {
    unified()
      .use(remarkParse)
      .use(remarkRehype)
      .use(rehypeSanitize)
      .use(rehypeStringify)
      .process(content, (err, file) => {
        if (err) {
          console.error("Error processing content:", err);
        } else {
          const element = document.getElementById(id);

          if (element) {
            element.innerHTML = file?.value as string;
          } else {
            console.log("No content");
          }
        }
      });
  }, [content]);

  return (
    <div
      id={id}
      className="rounded-lg bg-gray-50 dark:bg-gray-800 p-4 text-sm border border-gray-800 "
    />
  );
}
export default ContentRenderer;
