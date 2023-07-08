import { getDatabase } from "../../libs/notion";
import { mapperToLabs } from "./labs.mapper";
import { Lab, LabApiResponse } from "./labs.type";

export const getLabs = async (page?: number): Promise<Lab[]> => {
  const labs: LabApiResponse[] = await getDatabase({
    pageSize: page,
    databaseId: process.env.NOTION_LABS_DATABASE_ID
  });

  return labs?.map(lab => mapperToLabs(lab));
}
