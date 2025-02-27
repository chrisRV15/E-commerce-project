import Header from "./components/Header";
import FeaturedProducts from "./components/FeaturedProducts";
import Slogan from "./components/Slogan";
import FeaturedCategories from "./components/FeaturedCategories";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <>
        <div>
          <Slogan />
        </div>
        <div>
          <FeaturedProducts />
        </div>
        <div>
          <FeaturedCategories />
        </div>
        <div>
          <Footer />
        </div>
      </>
    </>
  );
}

export default App;
