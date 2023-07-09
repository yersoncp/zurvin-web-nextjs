import { getDatabase } from "../../libs/notion";
import { mapperToLabs } from "./labs.mapper";
import { Lab, LabApiResponse } from "./labs.type";

export const getLabs = async (page?: number): Promise<Lab[]> => {
  const labs: LabApiResponse[] = await getDatabase({
    pageSize: page,
    databaseId: process.env.NOTION_LABS_DATABASE_ID,
    sorts: [
      {
        property: "date",
        direction: "descending"
      }
    ],
    filter: {
      and: [
        {
          property: "status",
          status: {
            equals: "Done",
          }
        },
        {
          property: "image",
          files: {
            is_not_empty: true
          }
        }
      ]
    }
  });

  return labs?.map(lab => mapperToLabs(lab));
}
