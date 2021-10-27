import s from './FreddIntro.module.css'

const FreddIntro = () => (
   <div className={s.fredd}>

      <div className={s.fredd__featured}>
         <div>
            <div className={s.feature__title}>
               <img width="100px" src="images/fredd-white.svg" />
               <span> shop</span>
            </div>
            <p>Motor de recomendaciones basado en Inteligencia Artificial para e-commerce.</p>
            <a
               className="link"
               target="_blank"
               href="https://hifredd.com/"
               >hifredd.com →</a>
         </div>

         <div>
            <div className={s.feature__title}>
               <img width="100px" src="images/fredd-white.svg" />
               <span> segment</span>
            </div>
            <p>Segmenta usuarios en tiempo real y genera audiencias precisas y preciosas. (Working)</p>
         </div>
      </div>

   </div>
)

export default FreddIntro;