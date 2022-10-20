import Layout from '../layout/Layout/Layout'
import Welcome from '../components/Welcome/Welcome'
import Portfolio from '../components/Portfolio/Portfolio'
import Project from '../components/Project/Project';
import Stack from '../components/Stack/Stack';
import Profile from '../components/Profile/Profile';

const Index = () => (
   <div>
      <Layout>
         <Welcome />
         <Project />
         {/* <Portfolio /> */}
         {/* <Stack /> */}
         <br />
         <br />
         {/* <Profile /> */}
      </Layout>
   </div>
)

export default Index;