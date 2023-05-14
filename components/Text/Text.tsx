import { FC, ReactNode } from "react"
import s from "./Text.module.css"

type TextProps = {
  children: ReactNode
}

const Text: FC<TextProps> = ({ children }) => {
  return (
    <>
      <h2 className={s.text}>
        {children}
      </h2>
    </>
  )
}

export default Text
