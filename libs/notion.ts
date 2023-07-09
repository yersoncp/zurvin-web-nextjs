import { Client } from "@notionhq/client";

const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

export const getDatabase = async ({
  databaseId,
  pageSize = 0,
  filter = undefined,
  sorts = undefined,
}) => {
  if (!databaseId) {
    console.error("DatabaseID not found");
    return;
  }

  return notion.databases.query({
    database_id: databaseId,
    page_size: pageSize,
    filter,
    sorts,
  })
    .then((response) => {
      return response?.results;
    })
    .catch((error) => {
      console.error(error);
      return error
    });
};

export const getPage = async (pageId) => {
  return notion.pages.retrieve({ page_id: pageId });
};

export const getBlocks = async (blockId) => {
  const { results } = await notion.blocks.children.list({
    block_id: blockId?.replace(/-/g, ""),
    page_size: 100,
  });

  // Fetches all child blocks recursively - be mindful of rate limits if you have large amounts of nested blocks
  // See https://developers.notion.com/docs/working-with-page-content#reading-nested-blocks
  const childBlocks = results.map(async (block: any) => {
    if (block.has_children) {
      const children = await getBlocks(block.id);
      return { ...block, children };
    }
    return block;
  });

  return await Promise.all(childBlocks).then((blocks) => {
    return blocks.reduce((acc, curr) => {
      if (curr.type === "bulleted_list_item") {
        if (acc[acc.length - 1]?.type === "bulleted_list") {
          acc[acc.length - 1][acc[acc.length - 1].type].children?.push(curr);
        } else {
          acc.push({
            id: getRandomInt(10 ** 99, 10 ** 100).toString(),
            type: "bulleted_list",
            bulleted_list: { children: [curr] },
          });
        }
      } else if (curr.type === "numbered_list_item") {
        if (acc[acc.length - 1]?.type === "numbered_list") {
          acc[acc.length - 1][acc[acc.length - 1].type].children?.push(curr);
        } else {
          acc.push({
            id: getRandomInt(10 ** 99, 10 ** 100).toString(),
            type: "numbered_list",
            numbered_list: { children: [curr] },
          });
        }
      } else {
        acc.push(curr);
      }
      return acc;
    }, []);
  });
};

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// https://github.com/railwayapp/blog/pull/18
export const getChangelogImageSrc = async (blockId: string) => {
  const supportedBlockType = "image"
  const block: any = await notion.blocks.retrieve({ block_id: blockId })

  if (block.type !== supportedBlockType) {
    throw new Error("Block is not an image")
  }

  const image = block[supportedBlockType]

  if (image.type === "external") {
    return image.external.url
  }

  return image.file.url
}