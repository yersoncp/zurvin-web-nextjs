import ReactMarkdown from 'react-markdown'
import markdownStyles from './PostBody.module.css'
import rehypeHighlight from 'rehype-highlight'

type Props = {
  content: string
}

const PostBody = ({ content }: Props) => {
  return (
    <div className="max-w-2xl mx-auto">
      <ReactMarkdown
        className={markdownStyles['markdown']}
        children={content}
        rehypePlugins={[rehypeHighlight]}
      />
    </div>
  )
}

export default PostBody