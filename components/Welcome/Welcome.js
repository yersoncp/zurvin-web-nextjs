import s from './Welcome.module.css'

const Welcome = () => (
   <div>
      <div className={s.inner}>
         <h2 className={s.title}>
            We develop high-quality <span className="color-gradient"><b>Software</b></span> for the modern web.
         </h2>
         <br />
      </div>
   </div>
)

export default Welcome;