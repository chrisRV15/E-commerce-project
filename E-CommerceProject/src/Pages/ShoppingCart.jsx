import Header from "../components/Header";
import Footer from "../components/Footer";
import { useState } from "react";
import "../styles.css";

const ShoppingCart = () => {
  const [cartItems, setCartItems] = useState([]);
  return (
    <>
      <Header />
      <div className="container py-5">
        <h1 className="mb-4 fw-bold">Your Shopping Cart</h1>

        {cartItems.length === 0 ? (
          <div className="text-center py-5">
            <div className="display-4 mb-3">99</div>
            <h2 className="fs-2 fw-semibold mb-2">Your cart is empty</h2>
            <p className="text-muted mb-4">
              Looks like you haven't added anything to your cart yet.
            </p>
            <button className="btn btn-dark btn-lg">Continue Shopping</button>
          </div>
        ) : (
          <div className="row g-4">
            <div className="col-md-8">
              {cartItems.map((item) => (
                <div className="card mb-3">
                  <div className="card-body">
                    <div className="row g-3">
                      <div className="col-sm-3 col-md-2">
                        <Image
                          src="/placeholder.svg"
                          width={100}
                          height={100}
                          className="img-fluid rounded"
                        />
                      </div>
                      <div className="col-sm-9 col-md-10">
                        <div className="d-flex justify-content-between">
                          <h3 className="fs-5 fw-semibold">Watch</h3>
                          <button
                            className="btn btn-sm btn-link text-danger"
                            aria-label="Remove item"
                          >
                            ***
                          </button>
                        </div>
                        <p className="text-primary fw-medium">999.99</p>
                        <div className="d-flex align-items-center mt-3">
                          <div className="ms-auto fw-semibold">999.99</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="col-md-4">
              <div className="card">
                <div className="card-body">
                  <h2 className="fs-4 fw-bold mb-4">Order Summary</h2>
                  <div className="mb-3">
                    <div className="d-flex justify-content-between mb-2">
                      <span>Subtotal</span>
                      <span>999.99</span>
                    </div>
                    <div className="d-flex justify-content-between mb-2">
                      <span>Shipping</span>
                      <span>Free</span>
                    </div>
                    <div className="d-flex justify-content-between mb-2">
                      <span>Estimated Tax</span>
                      <span>999.99</span>
                    </div>
                    <hr />
                    <div className="d-flex justify-content-between fw-bold fs-5">
                      <span>Total</span>
                      <span>999.99</span>
                    </div>
                  </div>
                  <button className="btn btn-dark  w-100">
                    Proceed to Checkout
                  </button>
                  <p className="text-muted small text-center mt-3">
                    Shipping and taxes calculated at checkout
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default ShoppingCart;
