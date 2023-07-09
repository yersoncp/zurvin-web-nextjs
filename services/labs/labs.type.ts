export type Lab = {
  id: string;
  icon?: string;
  properties: {
    title: string;
    description: string;
    image?: string;
    url?: string;
  }
}

export type LabApiResponse = {
  id: string;
  icon?: { emoji: string },
  properties: {
    title: {
      id: string
      title: [{
        plain_text: string,
      }]
    },
    description: {
      id: string
      rich_text: [{
        plain_text: string,
      }]
    },
    image: {
      id: string
      files: [{
        name: string;
        file?: {
          url: string
        };
        external?: {
          url: string
        }
      }]
    },
    url: {
      id: string
      url: string
    },
  }
}
