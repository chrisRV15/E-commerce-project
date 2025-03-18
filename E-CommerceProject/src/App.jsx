import { HashRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import ProductsBrowser from "./Pages/ProductsBrowser";
import ProductViewer from "./Pages/ProductViewer";
import LoginRegister from "./Pages/Login&Register";
import CreateAccount from "./Pages/CreateAccount";
import Account from "./Pages/Account";
import ShoppingCart from "./Pages/ShoppingCart";
import CheckoutProcess from "./Pages/Checkout";
import OrderDetails from "./Pages/OrderDetail";
import { CartProvider } from "./CartContext";

function App() {
  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductsBrowser />} />
          <Route path="/product/:productId" element={<ProductViewer />} />
          <Route path="/login" element={<LoginRegister />} />
          <Route path="/register" element={<CreateAccount />} />
          <Route path="/account" element={<Account />} />
          <Route path="/shoppingcart" element={<ShoppingCart />} />
          <Route path="/checkout" element={<CheckoutProcess />} />
          <Route path="/order/:orderId" element={<OrderDetails />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
