import Header from "./components/Header";
import FeaturedProducts from "./components/FeaturedProducts";
import Slogan from "./components/Slogan";

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
      </>
    </>
  );
}

export default App;
