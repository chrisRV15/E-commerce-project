import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../CartContext";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles.css";

const CheckoutProcess = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const { cart, getCartTotal, clearCart } = useCart();
  const navigate = useNavigate();
  const [shippingAddress, setShippingAddress] = useState({
    fullName: " ",
    address: " ",
    city: " ",
    state: " ",
    zipCode: " ",
    country: " ",
  });

  const [paymentInfo, setPaymentInfo] = useState({
    cardholderName: " ",
    cardNumber: " ",
    expiryDate: " ",
    cvv: " ",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);

  // Handle shipping form changes
  const handleShippingChange = (e) => {
    const { name, value } = e.target;
    setShippingAddress((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle payment form changes
  const handlePaymentChange = (e) => {
    const { name, value } = e.target;
    setPaymentInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmitOrder = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    // Validate cart has items
    if (cart.length === 0) {
      setError("Your cart is empty");
      setIsSubmitting(false);
      return;
    }

    try {
      // Get token from localStorage
      const token = localStorage.getItem("token");

      if (!token) {
        setError("Please log in to complete your order");
        navigate("/login");
        return;
      }

      // Format items for the API
      const items = cart.map((item) => ({
        productId: item.id,
        name: item.name,
        quantity: item.quantity,
        price: item.price,
      }));

      // Create order object
      const orderData = {
        items,
        shippingAddress,
        paymentInfo: {
          method: "credit_card",
          last4Digits: paymentInfo.cardNumber.slice(-4),
        },
      };

      // Send to your API
      const response = await fetch("http://localhost:5050/order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(orderData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to create order");
      }

      // On success
      clearCart();
      // Navigate to order confirmation
      navigate(`/order/${data.orderId}`);
    } catch (error) {
      console.error("Error creating order:", error);
      setError(
        error.message || "An error occurred while processing your order"
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleStepSubmit = (e) => {
    e.preventDefault();
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  };

  const goBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <>
      /*
      <Header />
      <div className="container py-5">
        <h1 className="mb-4 fw-bold">Checkout</h1>

        {error && <div className="error-message">{error}</div>}

        {/* Checkout Progress */}
        <div className="mb-5">
          <div className="row text-center">
            <div className="col-4">
              <div
                className={`rounded-circle mx-auto d-flex align-items-center justify-content-center ${
                  currentStep >= 1 ? "bg-dark text-white" : "bg-light"
                }`}
                style={{ width: "40px", height: "40px" }}
              >
                1
              </div>
              <div className="mt-2">Shipping</div>
            </div>
            <div className="col-4">
              <div
                className={`rounded-circle mx-auto d-flex align-items-center justify-content-center ${
                  currentStep >= 2 ? "bg-dark text-white" : "bg-light"
                }`}
                style={{ width: "40px", height: "40px" }}
              >
                2
              </div>
              <div className="mt-2">Payment</div>
            </div>
            <div className="col-4">
              <div
                className={`rounded-circle mx-auto d-flex align-items-center justify-content-center ${
                  currentStep >= 3 ? "bg-dark text-white" : "bg-light"
                }`}
                style={{ width: "40px", height: "40px" }}
              >
                3
              </div>
              <div className="mt-2">Review</div>
            </div>
          </div>
          <div className="progress mt-3" style={{ height: "4px" }}>
            <div
              className="progress-bar"
              role="progressbar"
              style={{
                width: `${((currentStep - 1) / 2) * 100}%`,
                backgroundColor: "black",
              }}
              aria-valuenow={((currentStep - 1) / 2) * 100}
              aria-valuemin={0}
              aria-valuemax={100}
            ></div>
          </div>
        </div>

        <div className="row g-5">
          <div className="col-md-8">
            {/* Step 1: Shipping Information */}
            {currentStep === 1 && (
              <form onSubmit={handleStepSubmit}>
                <div className="card" style={{ borderColor: "black" }}>
                  <div className="card-header bg-white">
                    <h3 className="fs-5 mb-0">Shipping Information</h3>
                  </div>
                  <div className="card-body">
                    <div className="row g-3">
                      <div className="col-12">
                        <label htmlFor="fullName" className="form-label">
                          Full Name
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="fullName"
                          name="fullName"
                          value={shippingAddress.fullName}
                          onChange={handleShippingChange}
                          required
                        />
                      </div>
                      <div className="col-12">
                        <label htmlFor="address" className="form-label">
                          Address
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="address"
                          name="address"
                          value={shippingAddress.address}
                          onChange={handleShippingChange}
                          required
                        />
                      </div>
                      <div className="col-md-5">
                        <label htmlFor="city" className="form-label">
                          City
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="city"
                          name="city"
                          value={shippingAddress.city}
                          onChange={handleShippingChange}
                          required
                        />
                      </div>
                      <div className="col-md-4">
                        <label htmlFor="state" className="form-label">
                          State
                        </label>
                        <select
                          className="form-select"
                          id="state"
                          name="state"
                          value={shippingAddress.state}
                          onChange={handleShippingChange}
                          required
                        >
                          <option value="">Choose...</option>
                          <option value="CA">California</option>
                          <option value="NY">New York</option>
                          <option value="TX">Texas</option>
                          <option value="FL">Florida</option>
                          <option value="IL">Illinois</option>
                        </select>
                      </div>
                      <div className="col-md-3">
                        <label htmlFor="zipCode" className="form-label">
                          Zip Code
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="zipCode"
                          name="zipCode"
                          value={shippingAddress.zipCode}
                          onChange={handleShippingChange}
                          required
                        />
                      </div>
                      <div className="col-12">
                        <label htmlFor="country" className="form-label">
                          Country
                        </label>
                        <select
                          className="form-select"
                          id="country"
                          name="country"
                          value={shippingAddress.country}
                          onChange={handleShippingChange}
                          required
                        >
                          <option value="">Choose...</option>
                          <option value="United States">United States</option>
                          <option value="Canada">Canada</option>
                          <option value="Mexico">Mexico</option>
                          <option value="United Kingdom">United Kingdom</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="d-flex justify-content-between mt-4">
                  <div></div>
                  <button type="submit" className="btn btn-dark">
                    Continue
                  </button>
                </div>
              </form>
            )}
            {/* Step 2: Payment Information */}
            {currentStep === 2 && (
              <form onSubmit={handleStepSubmit}>
                <div className="card" style={{ borderColor: "black" }}>
                  <div className="card-header bg-white">
                    <h3 className="fs-5 mb-0">Payment Information</h3>
                  </div>
                  <div className="card-body">
                    <div className="row g-3">
                      <div className="col-12">
                        <label htmlFor="cardholderName" className="form-label">
                          Cardholder Name
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="cardholderName"
                          name="cardholderName"
                          value={paymentInfo.cardholderName}
                          onChange={handlePaymentChange}
                          required
                        />
                      </div>
                      <div className="col-12">
                        <label htmlFor="cardNumber" className="form-label">
                          Card Number
                        </label>
                        <div className="input-group">
                          <span className="input-group-text">💳</span>
                          <input
                            type="text"
                            className="form-control"
                            id="cardNumber"
                            name="cardNumber"
                            value={paymentInfo.cardNumber}
                            onChange={handlePaymentChange}
                            placeholder="XXXX XXXX XXXX XXXX"
                            required
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <label htmlFor="expiryDate" className="form-label">
                          Expiration Date
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="expiryDate"
                          name="expiryDate"
                          value={paymentInfo.expiryDate}
                          onChange={handlePaymentChange}
                          placeholder="MM/YY"
                          required
                        />
                      </div>
                      <div className="col-md-6">
                        <label htmlFor="cvv" className="form-label">
                          CVV
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="cvv"
                          name="cvv"
                          value={paymentInfo.cvv}
                          onChange={handlePaymentChange}
                          placeholder="123"
                          required
                        />
                      </div>
                      <div className="col-12">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="saveCard"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="saveCard"
                          >
                            Save this card for future purchases
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="d-flex justify-content-between mt-4">
                  <button
                    type="button"
                    className="btn btn-outline-dark secondarybtn"
                    onClick={goBack}
                  >
                    Back
                  </button>
                  <button type="submit" className="btn btn-dark">
                    Continue
                  </button>
                </div>
              </form>
            )}
            {/* Step 3: Review Order */}
            {currentStep === 3 && (
              <form onSubmit={handleSubmitOrder}>
                <div className="card" style={{ borderColor: "black" }}>
                  <div className="card-header bg-white">
                    <h3 className="fs-5 mb-0">Review Your Order</h3>
                  </div>
                  <div className="card-body">
                    <h4 className="fs-6 fw-semibold mb-3 mt-4">Order Items</h4>
                    {cart.map((item) => (
                      <div
                        key={item.id}
                        className="d-flex mb-3 border-bottom pb-3 border-black"
                      >
                        <img
                          src={item.image || "/placeholder.svg"}
                          alt={item.name}
                          width={80}
                          height={80}
                          className="rounded me-3"
                        />
                        <div>
                          <h5 className="fs-6 mb-1">{item.name}</h5>
                          <p className="text-muted mb-1">
                            Quantity: {item.quantity}
                          </p>
                          <p className="fw-semibold">
                            Price: ${item.price.toFixed(2)}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <h3 className="fs-4 mx-2">
                    Total: ${getCartTotal().toFixed(2)}
                  </h3>
                </div>
                <div className="d-flex justify-content-between mt-4">
                  <button
                    type="button"
                    className="btn btn-outline-dark secondarybtn"
                    onClick={goBack}
                  >
                    Back
                  </button>
                  <button
                    type="submit"
                    className="btn btn-dark"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Processing..." : "Place Order"}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
      <Footer />
      */
    </>
  );
};

export default CheckoutProcess;
