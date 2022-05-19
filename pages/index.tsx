import type { NextPage } from 'next'
import Layout from "../components/Layout";
import InputField from "../components/InputField";
import OutputList from "../components/OutputList";

const Home: NextPage = () => {
  return (
      <Layout>
          <InputField/>
          <OutputList/>
      </Layout>
  )
}

export default Home
