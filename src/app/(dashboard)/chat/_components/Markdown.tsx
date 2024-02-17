import { marked } from 'marked'
import React from 'react'
import { unified } from 'unified'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import rehypeSanitize from 'rehype-sanitize'
import rehypeStringify from 'rehype-stringify'
interface MarkdownRendererProps {
  content: string
}

//  function MarkdownRenderer({ content }: MarkdownRendererProps) {
//   console.log('content', content);
//   const htmlContent : string =  marked.parse(content);
//   const element = document.getElementById('content');
//   if (element) {
//     element.innerHTML = htmlContent;
//   } else {
//     console.log('No content');
//   }
//    return <div  className="mt-10  rounded-10 shadow-md bg-white break-words" id="content" />;
// }
function MarkdownRenderer({ content }: MarkdownRendererProps) {
  React.useEffect(() => {
    unified()
      .use(remarkParse) // Convert into markdown AST
      .use(remarkRehype) // Transform to HTML AST
      .use(rehypeSanitize) // Sanitize HTML input
      .use(rehypeStringify) // Convert AST into serialized HTML
      .process(content, function (err, file) {
        if (err) {
          console.error('Error processing content:', err)
        } else {
          const element = document.getElementById('content')

          if (element) {
            element.innerHTML = file?.value as string
          } else {
            console.log('No content')
          }
        }
      })
  }, [content])

  return (
    <div
      className="text-base p-3 bg-gradient-to-t from-slate-200 to-slate-100 rounded-md "
      id="content"
    />
  )
}
export default MarkdownRenderer
