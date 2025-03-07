import { HashRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import ProductsBrowser from "./Pages/ProductsBrowser";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductsBrowser />} />
      </Routes>
    </Router>
  );
}

export default App;
