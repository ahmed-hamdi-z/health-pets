import Header from "./components/Header";
import Layout from "./Layout";
import Providers from "./providers";
import Routers from "./routers";
import Footer from "./components/Footer";
import "swiper/swiper-bundle.css";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/captions.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";

function App() {
  return (
    <Providers>
      <Layout>
        <Header />
        <Routers />
        <Footer />
      </Layout>
    </Providers>
  );
}

export default App;

