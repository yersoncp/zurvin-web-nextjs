import { FC } from 'react'
import s from "./LabsGrid.module.css";
import Text from '../Text/Text';
import Stack from '../Stack/Stack';
import Link from 'next/link';
import { Lab } from '../../services/labs/labs.type';

type LabsGridProps = {
  labs: Lab[],
}

export const LabsGrid = ({ labs }: LabsGridProps) => {
  return (
    <div className={s.container}>
      {labs?.map((lab) => (
        <Link
          key={lab.id}
          className={s.item}
          href={lab.properties?.url}
        >
          <Stack gap={2}>
            {lab.properties?.image && (
              <img
                className={s.image}
                src={lab.properties.image}
                alt={lab.properties.title}
              />
            )}
            <div className={s.content}>
              <Text as='span' color='white' variant='h4'>
                {lab.properties.title} —
              </Text>
              {" "}
              <Text as='span' color='gray' weight={200} variant='h4'>
                {lab.properties.description}
              </Text>
            </div>
          </Stack>
        </Link>
      ))}
    </div>
  )
};

export default LabsGrid
