import { ReactNode } from 'react'

type Props = {
  children?: ReactNode
}

const PostTitle = ({ children }: Props) => {
  return (
    <h1
      style={{
        fontSize: "2.4rem", padding: "2rem 0",
        fontFamily: 'Poppins', color: '#fff',
        fontWeight: 400,
      }}
      className="title"
    >
      {children}
    </h1>
  )
}

export default PostTitle