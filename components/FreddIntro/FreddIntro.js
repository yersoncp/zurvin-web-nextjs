import style from './FreddIntro-style'

const FreddIntro = () => (
   <div className="fredd">

      <div className="fredd__inner">
         <img width="100px" src="images/fredd-white.svg" />
         <h2>
            Motor de inteligencia predictiva para negocios digitales
         </h2>
         <h3>
            Algoritmos de inteligencia artificial para procesamiento predictivo de datos
         </h3>
      </div>

      <div className="fredd__featured">
         <div>
            <p className="emoji">👨🏻‍💻</p>
            <p>Integración API RESTful con cualquier plataforma.</p>
         </div>
         <div>
            <p className="emoji">🛒</p>
            <p>Usos para ecommerce, blogs y aplicaciones web y móviles.</p>
         </div>
         <div>
            <p className="emoji">🛍</p>
            <p>Recomendación de productos, contenido e imágenes.</p>
         </div>
      </div>

      <style jsx>{ style }</style>
   </div>
)

export default FreddIntro;