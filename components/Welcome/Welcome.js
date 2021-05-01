import Link from 'next/link'
import style from './Welcome-style'

const linkDribbble = '//dribbble.com/yerson';
const linkMedium = '//medium.com/zurvin';

const Welcome = () => (
   <div className="welcome">
      <h2>
         Somos cinturón negro en <b>JavaScript</b> y amamos construir aplicaciones <b>web</b><br />
         {/* Nos divierte <Link href={linkMedium}><a target="_blank">escribir</a></Link> y <Link href={linkDribbble}><a target="_blank">diseñar</a></Link> */}
      </h2>

      <div className="stack">
         <div><img alt="Angular" src='./stack/angular.png' /></div>
         <div><img alt="Vuejs" src='./stack/vuejs.png' /></div>
         <div><img alt="react" src='./stack/react.png' /></div>
         <div><img alt="nestjs" src='./stack/nestjs.png' /></div>
         <div><img alt="ReactiveX" src='./stack/rxlogo.png' /></div>
         <div><img alt="NodeJS" src='./stack/nodejs.png' /></div>
      </div>

      <style jsx>{ style }</style>
   </div>
)

export default Welcome;