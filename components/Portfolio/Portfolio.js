import Link from 'next/link'
import style, { singlePortfolio } from './Portfolio-style'

function getPortfolios() {
   return [
      {
         title: 'ITEC',
         image: './images/zurvin-itec-website.jpg',
         link: '//www.behance.net/gallery/90383431/ITEC-Website-redesign'
      },
      {
         title: 'BBVA',
         image: './images/bbva-screenshot-dribbble.png',
         link: '//dribbble.com/shots/6924425-BBVA-UI-Dashboard-Concept'
      },
      {
         title: 'Tracking People',
         image: './images/tracking-people.png',
         link: '//www.behance.net/gallery/87027401/Tracking-People'
      },
      {
         title: 'TEDx Characato',
         image: './images/baxban-portfolio-tedx.jpg',
         link: '//www.behance.net/gallery/31589921/TEDxCharacato-2015'
      },
      {
         title: 'Tecdel Web',
         image: './images/baxban-portfolio-tecdel.jpg',
         link: '//www.behance.net/gallery/87003665/Tecdel'
      }
   ]
}

const SinglePortfolio = ({ post }) => (
   <div>
      <Link href={ post.link }>
         <a>
            <img
               alt={ post.title }
               src={ post.image }
            />
         </a>
      </Link>

      <style jsx>{ singlePortfolio }</style>
   </div>
)

const Portfolio = () => (
   <div className="portfolio">
      { getPortfolios().map((post, i) => (
         <SinglePortfolio key={ i } post={ post }/>
      )) }

      <style jsx>{ style }</style>
   </div>
)

export default Portfolio;