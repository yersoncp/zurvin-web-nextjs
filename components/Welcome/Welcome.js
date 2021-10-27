import s from './Welcome.module.css'

const Welcome = () => (
   <div>
      <div className={s.inner}>
         <h2 className={s.title}>
            Construimos aplicaciones web con el <span className="color-gradient"><b>corazón</b></span>
         </h2>
         <br />
         <p className={s.subtitle}>Construimos aplicaciones web con React y cualquier framework JavaScript moderno</p>
      </div>
   </div>
)

export default Welcome;