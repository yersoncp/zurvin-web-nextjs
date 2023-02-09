import { ReactNode } from 'react'

type Props = {
  children?: ReactNode
}

const PostTitle = ({ children }: Props) => {
  return (
    <h1
      style={{
        fontSize: "2.4rem", padding: "2rem 0",
        fontFamily: 'IBM Plex Mono', color: '#fff',
      }}
      className="title"
    >
      {children}
    </h1>
  )
}

export default PostTitle