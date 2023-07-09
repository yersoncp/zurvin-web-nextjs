import NextImage from "next/image"
import { useState } from "react"

type NotionImageProps = {
  src: string
  alt: string
  blockId: string
}

export const NotionImage = ({
  src,
  alt,
  blockId,
}: NotionImageProps) => {
  const [imageSrc, setImageSrc] = useState(src)

  return (
    <NextImage
      width={1060}
      height={600}
      src={imageSrc}
      alt={alt}
      unoptimized={process.env.NODE_ENV !== "production"}
      onError={async () => {
        const res = await fetch(`/api/image?blockId=${blockId}`)
          .then((res) => res.json())

        setImageSrc(res.imageSrc)
      }}
    />
  )
}
