// import PetShowcase from "./components/PetShowcase";

import Header from "./components/Header";
import Layout from "./Layout";
import Providers from "./providers";
import Routers from "./routers";

function App() {
  return (
    <Providers>
      <Layout>
        <Header />
        <Routers />
        {/* <Footer /> */}
      </Layout>
    </Providers>
  );
}

export default App;

