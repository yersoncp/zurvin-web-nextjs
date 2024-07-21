import s from "./LabsGrid.module.css";
import Text from "../Text/Text";
import Stack from "../Stack/Stack";
import Link from "next/link";
import { Lab } from "../../services/labs/labs.type";

const labs: Lab[] = [
  {
    id: "1",
    properties: {
      title: "Zurvin",
      description: "Aprende a construir aplicaciones web con React y Next.js",
      image: "/images/webui-components.jpg",
      url: "/zurvin",
    },
  },
  {
    id: "2",
    properties: {
      title: "Zurvin",
      description: "Aprende a construir aplicaciones web con React y Next.js",
      image: "/images/bbva-call-center.png",
      url: "/zurvin",
    },
  },
  {
    id: "3",
    properties: {
      title: "Zurvin",
      description: "Aprende a construir aplicaciones web con React y Next.js",
      image: "/images/webui-components.jpg",
      url: "/zurvin",
    },
  },
];

export const LabsGrid = () => {
  return (
    <div className={s.container}>
      {labs?.map((lab) => (
        <Link key={lab.id} className={s.item} href={lab.properties?.url}>
          <Stack gap={2}>
            {lab.properties?.image && (
              <img
                className={s.image}
                src={lab.properties.image}
                alt={lab.properties.title}
              />
            )}
            <div className={s.content}>
              <Text as="span" color="white" variant="h5">
                {lab.properties.title} —
              </Text>{" "}
              <Text as="span" color="gray" variant="h5">
                {lab.properties.description}
              </Text>
            </div>
          </Stack>
        </Link>
      ))}
    </div>
  );
};

export default LabsGrid;
