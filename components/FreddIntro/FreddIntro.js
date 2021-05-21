import s from './FreddIntro.module.css'

const FreddIntro = () => (
   <div className={s.fredd}>

      <div className={s.fredd__inner}>
         <img width="100px" src="images/fredd-white.svg" />
         <h2 className={s.title}>
            Motor de <b>inteligencia predictiva</b> para negocios digitales
         </h2>
         <h3 className={s.subtitle}>
            Algoritmos de inteligencia artificial para procesamiento predictivo de datos.
         </h3>
      </div>

      <div className={s.fredd__featured}>
         <div>
            <p className={s.emoji}>👨🏻‍💻</p>
            <p>Integración API RESTful con cualquier plataforma.</p>
         </div>
         <div>
            <p className={s.emoji}>🛒</p>
            <p>Usos para ecommerce, blogs y aplicaciones web y móviles.</p>
         </div>
         <div>
            <p className={s.emoji}>🛍</p>
            <p>Recomendación de productos, contenido e imágenes.</p>
         </div>
      </div>

   </div>
)

export default FreddIntro;