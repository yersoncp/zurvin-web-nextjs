import { FC } from 'react'
import s from "./LabsGrid.module.css";

export const LabsGrid = () => {
  return (
    <div className={s.container}>
      <div className={s.item}>1</div>
      <div className={s.item}>2</div>
      <div className={s.item}>3</div>
      <div className={s.item}>4</div>
    </div>
  )
};

export default LabsGrid
