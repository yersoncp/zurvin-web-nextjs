import { FC } from 'react'
import s from "./LabsGrid.module.css";

export const LabsGrid = () => {
  return (
    <div className={s.container}>
      <div className={s.item}></div>
      <div className={s.item}></div>
      <div className={s.item}></div>
      <div className={s.item}></div>
    </div>
  )
};

export default LabsGrid
