import Layout from '../layout/Layout/Layout'
import Welcome from '../components/Welcome/Welcome'
import Portfolio from '../components/Portfolio/Portfolio'
import FreddIntro from '../components/FreddIntro/FreddIntro';
import Stack from '../components/Stack/Stack';

const Index = () => (
   <div>
      <Layout>
         <Welcome />
         <FreddIntro />
         {/* <Portfolio /> */}
         <Stack />
      </Layout>
   </div>
)

export default Index;