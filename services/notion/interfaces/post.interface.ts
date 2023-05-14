export interface IPostItem {
  id: string;
  cover?: string;
  icon?: string;
  properties: {
    page: string;
    slug: string;
    excerpt: string;
    date: string;
    published: boolean;
  }
}

export interface IPostItemApiResponse {
  id: string;
  cover: {
    external: {
      url: string
    }
  },
  icon: {
    emoji: string
  },
  properties: PostProperty
}

interface PostProperty {
  page: {
    id: string
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
    rich_text: [
      {
        type: string
        text: {
          content: string
        },
      }
    ]
  },
  excerpt: {
    id: string
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
    date: {
      start: string
    }
  },
  published: {
    id: string
    checkbox: boolean
  },
}