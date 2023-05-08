export type PostType = {
  id: string;
  cover: {
    external: any
  },
  icon: {
    emoji: string
  },
  properties: PostProperty
}

type PostProperty = {
  page: {
    id: string
    type: string
    title: [
      {
        text: {
          content: string
        },
      }
    ]
  }
  slug: {
    id: string
    type: string
    rich_text: [
      {
        type: string
        text: {
          content: string
        },
      }
    ]
  },
  date: {
    id: string
    type: string
    date: {
      start: string
    }
  },
  published: {
    id: string
    type: string
    checkbox: boolean
  },
}