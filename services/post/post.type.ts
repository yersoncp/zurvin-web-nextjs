export type Post = {
  id: string;
  cover?: string;
  icon?: string;
  properties: {
    page: string;
    slug: string;
    excerpt: string;
    date: string;
    published: boolean;
    url: string;
  }
}

export type PostApiResponse = {
  id: string;
  cover: {
    external: {
      url: string
    }
  },
  icon: {
    emoji: string
  },
  properties: {
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
    url: {
      id: string;
      url: string;
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
}
