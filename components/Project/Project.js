import s from './Project.module.css'

const items = () => {
   return [
      {
         img: 'images/fredd-white.svg',
         title: '',
         description: '',
         textLink: '',
         link: ''
      },
      {
         img: 'images/warypos-white.svg',
         title: '',
         description: '',
         textLink: '',
         link: ''
      },
      {
         img: 'images/yakufarma-white.svg',
         title: '',
         description: '',
         textLink: '',
         link: ''
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