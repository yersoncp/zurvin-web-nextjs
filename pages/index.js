import Layout from '../components/Layout/Layout'
import Welcome from '../components/Welcome/Welcome'
import Portfolio from '../components/Portfolio/Portfolio'
import FreddIntro from '../components/FreddIntro/FreddIntro';

const Index = () => (
   <div>
      <Layout>
         {/* <Welcome /> */}
         <FreddIntro />
         {/* <Portfolio /> */}
      </Layout>
   </div>
)

export default Index;