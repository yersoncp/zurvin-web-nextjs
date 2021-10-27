import Layout from '../layout/Layout/Layout'
import Welcome from '../components/Welcome/Welcome'
import Portfolio from '../components/Portfolio/Portfolio'
import Project from '../components/Project/Project';
import Stack from '../components/Stack/Stack';

const Index = () => (
   <div>
      <Layout>
         <Welcome />
         <Project />
         {/* <Portfolio /> */}
         <Stack />
      </Layout>
   </div>
)

export default Index;