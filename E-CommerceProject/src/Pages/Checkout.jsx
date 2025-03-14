import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles.css";

const CheckoutProcess = () => {
  const [currentStep, setCurrentStep] = useState(0);
  return (
    <>
      /*
      <Header />
      <div className="container py-5">
        <h1 className="mb-4 fw-bold">Checkout</h1>

        {/* Checkout Progress */}
        <div className="mb-5">
          <div className="row text-center">
            <div className="col-4">
              <div
                className={`rounded-circle mx-auto d-flex align-items-center justify-content-center ${
                  currentStep >= 1 ? "bg-primary text-white" : "bg-light"
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
                  currentStep >= 2 ? "bg-primary text-white" : "bg-light"
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
                  currentStep >= 3 ? "bg-primary text-white" : "bg-light"
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
              style={{ width: `${((currentStep - 1) / 2) * 100}%` }}
              aria-valuenow={((currentStep - 1) / 2) * 100}
              aria-valuemin={0}
              aria-valuemax={100}
            ></div>
          </div>
        </div>

        <div className="row g-5">
          <div className="col-md-8">
            <form onSubmit={handleSubmit}>
              {/* Step 1: Shipping Information */}
              {currentStep === 1 && (
                <div className="card">
                  <div className="card-header bg-white">
                    <h3 className="fs-5 mb-0">Shipping Information</h3>
                  </div>
                  <div className="card-body">
                    <div className="row g-3">
                      <div className="col-md-6">
                        <label htmlFor="firstName" className="form-label">
                          First Name
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="firstName"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <div className="col-md-6">
                        <label htmlFor="lastName" className="form-label">
                          Last Name
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="lastName"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <div className="col-12">
                        <label htmlFor="email" className="form-label">
                          Email
                        </label>
                        <input
                          type="email"
                          className="form-control"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
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
                          value={formData.address}
                          onChange={handleInputChange}
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
                          value={formData.city}
                          onChange={handleInputChange}
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
                          value={formData.state}
                          onChange={handleInputChange}
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
                          value={formData.zipCode}
                          onChange={handleInputChange}
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
                          value={formData.country}
                          onChange={handleInputChange}
                          required
                        >
                          <option value="United States">United States</option>
                          <option value="Canada">Canada</option>
                          <option value="Mexico">Mexico</option>
                          <option value="United Kingdom">United Kingdom</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 2: Payment Information */}
              {currentStep === 2 && (
                <div className="card">
                  <div className="card-header bg-white">
                    <h3 className="fs-5 mb-0">Payment Information</h3>
                  </div>
                  <div className="card-body">
                    <div className="row g-3">
                      <div className="col-12">
                        <label htmlFor="cardName" className="form-label">
                          Name on Card
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="cardName"
                          name="cardName"
                          value={formData.cardName}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <div className="col-12">
                        <label htmlFor="cardNumber" className="form-label">
                          Card Number
                        </label>
                        <div className="input-group">
                          <span className="input-group-text">
                            <CreditCard size={18} />
                          </span>
                          <input
                            type="text"
                            className="form-control"
                            id="cardNumber"
                            name="cardNumber"
                            value={formData.cardNumber}
                            onChange={handleInputChange}
                            placeholder="XXXX XXXX XXXX XXXX"
                            required
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <label htmlFor="expDate" className="form-label">
                          Expiration Date
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="expDate"
                          name="expDate"
                          value={formData.expDate}
                          onChange={handleInputChange}
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
                          value={formData.cvv}
                          onChange={handleInputChange}
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
              )}

              {/* Step 3: Review Order */}
              {currentStep === 3 && (
                <div className="card">
                  <div className="card-header bg-white">
                    <h3 className="fs-5 mb-0">Review Your Order</h3>
                  </div>
                  <div className="card-body">
                    <h4 className="fs-6 fw-semibold mb-3">
                      Shipping Information
                    </h4>
                    <p>
                      {formData.firstName} {formData.lastName}
                      <br />
                      {formData.address}
                      <br />
                      {formData.city}, {formData.state} {formData.zipCode}
                      <br />
                      {formData.country}
                    </p>

                    <h4 className="fs-6 fw-semibold mb-3 mt-4">
                      Payment Method
                    </h4>
                    <p>
                      Credit Card ending in{" "}
                      {formData.cardNumber.slice(-4) || "XXXX"}
                    </p>

                    <h4 className="fs-6 fw-semibold mb-3 mt-4">Order Items</h4>
                    {cartItems.map((item) => (
                      <div
                        key={item.id}
                        className="d-flex mb-3 border-bottom pb-3"
                      >
                        <Image
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
                            {formatPrice(item.price * item.quantity)}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="d-flex justify-content-between mt-4">
                {currentStep > 1 ? (
                  <button
                    type="button"
                    className="btn btn-outline-secondary"
                    onClick={goBack}
                  >
                    Back
                  </button>
                ) : (
                  <div></div>
                )}
                <button type="submit" className="btn btn-primary">
                  {currentStep < 3 ? "Continue" : "Place Order"}
                </button>
              </div>
            </form>
          </div>

          {/* Order Summary */}
          <div className="col-md-4">
            <div className="card">
              <div className="card-header bg-white">
                <h3 className="fs-5 mb-0">Order Summary</h3>
              </div>
              <div className="card-body">
                <div className="d-flex justify-content-between mb-2">
                  <span>Subtotal</span>
                  <span>{formatPrice(subtotal)}</span>
                </div>
                <div className="d-flex justify-content-between mb-2">
                  <span>Shipping</span>
                  <span>{formatPrice(shipping)}</span>
                </div>
                <div className="d-flex justify-content-between mb-2">
                  <span>Estimated Tax</span>
                  <span>{formatPrice(tax)}</span>
                </div>
                <hr />
                <div className="d-flex justify-content-between fw-bold">
                  <span>Total</span>
                  <span>{formatPrice(total)}</span>
                </div>

                <div className="mt-4">
                  <h4 className="fs-6 fw-semibold mb-3">
                    Order Items (
                    {cartItems.reduce((sum, item) => sum + item.quantity, 0)})
                  </h4>
                  {cartItems.map((item) => (
                    <div
                      key={item.id}
                      className="d-flex align-items-center mb-3"
                    >
                      <div
                        className="me-3"
                        style={{ width: "50px", height: "50px", flexShrink: 0 }}
                      >
                        <Image
                          src={item.image || "/placeholder.svg"}
                          alt={item.name}
                          width={50}
                          height={50}
                          className="rounded"
                        />
                      </div>
                      <div className="flex-grow-1">
                        <p className="mb-0 small">{item.name}</p>
                        <p className="mb-0 small text-muted">
                          Qty: {item.quantity}
                        </p>
                      </div>
                      <div className="ms-2 text-end">
                        <p className="mb-0 small fw-semibold">
                          {formatPrice(item.price * item.quantity)}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-4 p-3 bg-light rounded">
                  <div className="d-flex align-items-center">
                    <CheckCircle size={20} className="text-success me-2" />
                    <p className="mb-0 small">
                      Your order qualifies for free shipping after checkout!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      */
    </>
  );
};
