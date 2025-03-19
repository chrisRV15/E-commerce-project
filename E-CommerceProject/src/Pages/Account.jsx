import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles.css";

const Account = () => {
  const [activeTab, setActiveTab] = useState("account");
  const [user, setUser] = useState(null);
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        setLoading(true);
        setError(null);

        const token = localStorage.getItem("token");
        if (!token) {
          setError("No authentication token found. Please log in again.");
          setLoading(false);
          return;
        }

        const response = await fetch("http://localhost:5050/user/me", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });

        // For debugging
        console.log("Response status:", response.status);

        const data = await response.json();
        console.log("Response data:", data);

        if (response.ok) {
          setUser(data);
        } else {
          setError(data.message || "Failed to load user data");

          // If token is invalid, clear it
          if (response.status === 401 || response.status === 403) {
            localStorage.removeItem("token");
          }
        }
      } catch (error) {
        console.error("Error fetching user:", error);
        setError("An error occurred while fetching user data");
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          throw new Error("Not authenticated");
        }

        const response = await fetch("http://localhost:5050/order", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch orders");
        }

        const data = await response.json();
        setOrders(data);
      } catch (error) {
        console.error("Error fetching orders:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    console.log("You are logged out");
    navigate("/");
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!user)
    return (
      <p>
        No user data available. Please <a href="/login">log in</a>.
      </p>
    );

  return (
    <>
      <Header />
      <div className="container py-5">
        <div className="row">
          {/* User Profile Summary */}
          <div className="col-lg-4 mb-4">
            <div className="card border-0 shadow">
              <div className="card-body text-center">
                <h4 className="fw-bold mt-3">
                  {user.firstName} {user.lastName}
                </h4>
                <p className="text-muted">Member</p>
                <div className="d-flex justify-content-center gap-2">
                  <button className="btn btn-dark">Edit Profile</button>
                </div>
              </div>
            </div>

            <div className="card border-0 shadow mt-4">
              <div className="card-body">
                <button
                  onClick={handleLogout}
                  className="btn btn-dark w-100 mt-3"
                >
                  Log Off
                </button>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="col-lg-8">
            <div className="card border-0 shadow">
              <div className="card-header bg-white border-0">
                <ul className="nav nav-tabs card-header-tabs">
                  <li className="nav-item">
                    <button
                      className={`nav-link ${
                        activeTab === "account" ? "active" : ""
                      }`}
                      onClick={() => setActiveTab("account")}
                    >
                      Account Settings
                    </button>
                  </li>
                  <li className="nav-item">
                    <button
                      className={`nav-link ${
                        activeTab === "purchases" ? "active" : ""
                      }`}
                      onClick={() => setActiveTab("purchases")}
                    >
                      Purchase History
                    </button>
                  </li>
                  <li className="nav-item">
                    <button
                      className={`nav-link ${
                        activeTab === "payment" ? "active" : ""
                      }`}
                      onClick={() => setActiveTab("payment")}
                    >
                      Payment Methods
                    </button>
                  </li>
                  <li className="nav-item">
                    <button
                      className={`nav-link ${
                        activeTab === "security" ? "active" : ""
                      }`}
                      onClick={() => setActiveTab("security")}
                    >
                      Security
                    </button>
                  </li>
                </ul>
              </div>

              <div className="card-body">
                {/* Account Settings Tab */}
                {activeTab === "account" && (
                  <div>
                    <h5 className="card-title mb-4">Account Settings</h5>
                    <form>
                      <div className="row mb-3">
                        <div className="col-md-6">
                          <label htmlFor="firstName" className="form-label">
                            {user.firstName}
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="firstName"
                            placeholder="firstName"
                          />
                        </div>
                        <div className="col-md-6">
                          <label htmlFor="lastName" className="form-label">
                            {user.lastName}
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="lastName"
                            placeholder="lastName"
                          />
                        </div>
                      </div>

                      <div className="mb-3">
                        <label htmlFor="email" className="form-label">
                          {user.email}
                        </label>
                        <input
                          type="email"
                          className="form-control"
                          id="email"
                          defaultValue="email@example.com"
                        />
                      </div>

                      <div className="mb-3">
                        <label htmlFor="phone" className="form-label">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          className="form-control"
                          id="phone"
                          defaultValue="+1 (555) 123-4567"
                        />
                      </div>

                      <div className="mb-3">
                        <label htmlFor="address" className="form-label">
                          Address
                        </label>
                        <textarea
                          className="form-control"
                          id="address"
                          rows={3}
                          defaultValue="123 Main Street, Apt 4B, New York, NY 10001"
                        ></textarea>
                      </div>

                      <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                        <button
                          type="button"
                          className="btn btn-outline-dark me-md-2 secondarybtn"
                        >
                          Cancel
                        </button>
                        <button type="submit" className="btn btn-dark">
                          Save Changes
                        </button>
                      </div>
                    </form>
                  </div>
                )}

                {/* Purchase History Tab */}
                {activeTab === "purchases" && (
                  <div>
                    <h5 className="card-title mb-4">Purchase History</h5>
                    <div className="table-responsive">
                      <table className="table table-hover">
                        <thead>
                          <tr>
                            <th scope="col">Order ID</th>
                            <th scope="col">Date</th>
                            <th scope="col">Product</th>
                            <th scope="col">Amount</th>
                            <th scope="col">Status</th>
                          </tr>
                        </thead>
                        <tbody>
                          {orders.map((order) => (
                            <tr key={order._id}>
                              <td>#{order._id.substring(0, 8)}</td>
                              <td>
                                {new Date(order.orderDate).toLocaleDateString()}
                              </td>
                              <td>
                                {order.items.length > 0
                                  ? order.items[0].name +
                                    (order.items.length > 1
                                      ? ` + ${order.items.length - 1} more`
                                      : "")
                                  : "N/A"}
                              </td>
                              <td>${order.totalAmount.toFixed(2)}</td>
                              <td>
                                <span
                                  className={`badge ${
                                    order.status === "Completed"
                                      ? "bg-success"
                                      : "bg-secondary"
                                  }`}
                                >
                                  {order.status}
                                </span>
                              </td>
                              <td></td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}

                {/* Payment Methods Tab */}
                {activeTab === "payment" && (
                  <div>
                    <div className="d-flex justify-content-between align-items-center mb-4">
                      <h5 className="card-title mb-0">Payment Methods</h5>
                      <button className="btn btn-dark btn-sm">
                        Add New Card
                      </button>
                    </div>

                    <div className="card mb-3 border">
                      <div className="card-body">
                        <div className="d-flex justify-content-between align-items-center">
                          <div className="d-flex align-items-center">
                            <div className="me-3">
                              <i className="bi bi-credit-card fs-3"></i>
                            </div>
                            <div>
                              <h6 className="mb-0">Visa ending in 4242</h6>
                              <small className="text-muted">
                                Expires 09/2025
                              </small>
                            </div>
                          </div>
                          <div>
                            <span className="badge bg-dark me-2">Default</span>
                            <button className="btn btn-sm btn-outline-dark secondarybtn">
                              Edit
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>

                    <h5 className="card-title mt-5 mb-4">Billing Address</h5>
                    <form>
                      <div className="row mb-3">
                        <div className="col-md-6">
                          <label htmlFor="billingName" className="form-label">
                            Full Name
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="billingName"
                            defaultValue="John Doe"
                          />
                        </div>
                        <div className="col-md-6">
                          <label
                            htmlFor="billingCompany"
                            className="form-label"
                          >
                            Company (Optional)
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="billingCompany"
                            defaultValue="Acme Inc."
                          />
                        </div>
                      </div>

                      <div className="mb-3">
                        <label htmlFor="billingAddress" className="form-label">
                          Address
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="billingAddress"
                          defaultValue="123 Main Street, Apt 4B"
                        />
                      </div>

                      <div className="row mb-3">
                        <div className="col-md-4">
                          <label htmlFor="billingCity" className="form-label">
                            City
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="billingCity"
                            defaultValue="New York"
                          />
                        </div>
                        <div className="col-md-4">
                          <label htmlFor="billingState" className="form-label">
                            State
                          </label>
                          <select className="form-select" id="billingState">
                            <option value="NY" selected>
                              New York
                            </option>
                            <option value="CA">California</option>
                            <option value="TX">Texas</option>
                            <option value="FL">Florida</option>
                          </select>
                        </div>
                        <div className="col-md-4">
                          <label htmlFor="billingZip" className="form-label">
                            Zip Code
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="billingZip"
                            defaultValue="10001"
                          />
                        </div>
                      </div>

                      <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                        <button type="submit" className="btn btn-dark">
                          Save Address
                        </button>
                      </div>
                    </form>
                  </div>
                )}

                {/* Security Tab */}
                {activeTab === "security" && (
                  <div>
                    <h5 className="card-title mb-4">Security Settings</h5>

                    <div className="mb-5">
                      <h6 className="fw-bold mb-3">Change Password</h6>
                      <form>
                        <div className="mb-3">
                          <label
                            htmlFor="currentPassword"
                            className="form-label"
                          >
                            Current Password
                          </label>
                          <input
                            type="password"
                            className="form-control"
                            id="currentPassword"
                          />
                        </div>
                        <div className="mb-3">
                          <label htmlFor="newPassword" className="form-label">
                            New Password
                          </label>
                          <input
                            type="password"
                            className="form-control"
                            id="newPassword"
                          />
                        </div>
                        <div className="mb-3">
                          <label
                            htmlFor="confirmPassword"
                            className="form-label"
                          >
                            Confirm New Password
                          </label>
                          <input
                            type="password"
                            className="form-control"
                            id="confirmPassword"
                          />
                        </div>
                        <button type="submit" className="btn btn-primary">
                          Update Password
                        </button>
                      </form>
                    </div>

                    <div>
                      <h6 className="fw-bold mb-3 text-danger">Danger Zone</h6>
                      <div className="card border border-danger">
                        <div className="card-body">
                          <h6 className="card-title">Delete Account</h6>
                          <p className="card-text text-muted">
                            Once you delete your account, there is no going
                            back. Please be certain.
                          </p>
                          <button className="btn btn-danger">
                            Delete Account
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Account;
