import React from "react";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeSanitize from "rehype-sanitize";
import rehypeStringify from "rehype-stringify";
import { MarkdownRendererProps } from "@/types/chat/chat-types";
function MarkdownRenderer({
  content,
  isVideoDescription,
}: MarkdownRendererProps) {
  React.useEffect(() => {
    unified()
      .use(remarkParse) // Convert into markdown AST
      .use(remarkRehype) // Transform to HTML AST
      .use(rehypeSanitize) // Sanitize HTML input
      .use(rehypeStringify) // Convert AST into serialized HTML
      .process(content, function (err, file) {
        if (err) {
          console.error("Error processing content:", err);
        } else {
          const element = document.getElementById("content");

          if (element) {
            element.innerHTML = file?.value as string;
          } else {
            console.log("No content");
          }
        }
      });
  }, [content]);
  if (isVideoDescription) {
    return <div id="content" className="justify-end " />;
  }
  return (
    <div
      className="text-base p-3 bg-gradient-to-t from-slate-200 to-slate-100 rounded-md "
      id="content"
    />
  );
}
export default MarkdownRenderer;
