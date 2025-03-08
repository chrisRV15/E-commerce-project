import { HashRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import ProductsBrowser from "./Pages/ProductsBrowser";
import ProductViewer from "./Pages/ProductViewer";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductsBrowser />} />
        <Route path="/view-product" element={<ProductViewer />} />"
      </Routes>
    </Router>
  );
}

export default App;
