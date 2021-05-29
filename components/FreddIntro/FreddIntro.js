import s from './FreddIntro.module.css'

const FreddIntro = () => (
   <div className={s.fredd}>

      <div className={s.fredd__inner}>
         <h2 className={s.title}>
            Estamos <b>construyendo</b> algo que nos <b>apasiona</b> desde el corazón
         </h2>
      </div>

      <div>
         <br />
         <p>___</p>
         <br />
      </div>

      <div>
         <h3>Projectos</h3>
      </div>

      <div className={s.fredd__featured}>
         <div>
            <img width="100px" src="images/fredd-white.svg" />
            <p>Motor de recomendaciones basado en Inteligencia Artificial para e-commerce.</p>
            <a
               className="link"
               target="_blank"
               href="https://hifredd.com/"
               >hifredd.com →</a>
         </div>

         <div>
            <h3 className={s.feature__title}>Fredd Segment</h3>
            <p>Segmenta usuarios en tiempo real y genera audiencias precisas y preciosas. (Working)</p>
         </div>
      </div>

   </div>
)

export default FreddIntro;