import { Lab, LabApiResponse } from "./labs.type";

export const mapperToLabs = (lab: LabApiResponse): Lab => {
  return {
    id: lab.id,
    icon: lab.icon?.emoji || null,
    properties: {
      title: lab.properties.title.title[0].plain_text,
      description: lab.properties.description.rich_text[0].plain_text,
      image: lab.properties.image?.files?.[0]?.file.url || null,
      url: lab.properties.url?.url || null,
    }
  }
}