import s from './Welcome.module.css'

const Welcome = () => (
   <div>
      <div className={s.inner}>
         <h2 className={s.title}>
            I design and build custom <span className="color-gradient"><b>web</b></span> experiences
         </h2>
         <br />
      </div>
   </div>
)

export default Welcome;