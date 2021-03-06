import s from './Project.module.css'

const items = () => {
   return [
      {
         img: 'images/fredd-white.svg',
         title: 'shop',
         description: 'Motor de recomendaciones basado en Inteligencia Artificial para e-commerce.',
         textLink: 'hifredd.com',
         link: 'https://hifredd.com/'
      },
      {
         img: 'images/fredd-white.svg',
         title: 'segment',
         description: 'Segmenta usuarios en tiempo real y genera audiencias precisas y preciosas. (Working)',
         textLink: '',
         link: ''
      },
      {
         img: 'images/warypos-white.svg',
         title: '',
         description: 'Gestiona tu negocio de manera simple',
         textLink: 'warypos.com',
         link: 'https://www.warypos.com/'
      },
   ]
}

const Project = () => (
   <div>

      <div className={s.featured}>
         { items().map((item, key) => (
            <div key={key}>
               <div className={s.featured__title}>
                  <img src={ item.img } />
                  <span> { item.title }</span>
               </div>
               <p>{item.description}</p>
               { item.textLink ?
                  <a
                     className="link"
                     target="_blank"
                     href={ item.link }>{ item.textLink }</a>
                  : null
               }
     
            </div>
         ))
         }

      </div>

   </div>
)

export default Project;