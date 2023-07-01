import { FC } from 'react'
import s from "./LabsGrid.module.css";
import Text from '../Text/Text';
import Stack from '../Stack/Stack';

export const LabsGrid = () => {
  return (
    <div className={s.container}>
      <div className={s.item}>
        <Stack gap={2}>
          <img
            className={s.image}
            src="/images/webui-components.jpg"
            alt=""
          />
          <div className={s.content}>
            <Text as='span' color='white' variant='h3'>
              Web UI Components — 
            </Text>
            {" "}
            <Text as='span' color='gray' weight={200} variant='h3'>
              Components created for building a dashboard.
            </Text>
          </div>
        </Stack>
      </div>

      <div className={s.item}>
        <Stack gap={2}>
          <img
            className={s.image}
            src="/images/tetris.jpg"
            alt=""
          />
          <div className={s.content}>
            <Text as='span' color='white' variant='h3'>
              Tetris experiment — 
            </Text>
            {" "}
            <Text as='span' color='gray' weight={200} variant='h3'>
              Famous tetris game to practice my algorithm skills.
            </Text>
          </div>
        </Stack>
      </div>
    </div>
  )
};

export default LabsGrid
