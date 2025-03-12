import { useState } from "react";
import Register from "./CreateAccount";

const Account = () => {
  const [activeTab, setActiveTab] = useState("account");

  return (
    <div className="container py-5">
      <div className="row">
        {/* User Profile Summary */}
        <div className="col-lg-4 mb-4">
          <div className="card border-0 shadow">
            <div className="card-body text-center">
              <img
                src="/placeholder.svg?height=150&width=150"
                className="rounded-circle mb-3"
                alt="User Avatar"
                width="150"
                height="150"
              />
              <h4 className="fw-bold">John Doe</h4>
              <p className="text-muted">Premium Member</p>
              <div className="d-flex justify-content-center gap-2">
                <button className="btn btn-primary">Edit Profile</button>
                <button className="btn btn-outline-secondary">Messages</button>
              </div>

              <div className="mt-4">
                <div className="d-flex justify-content-between mb-2">
                  <span className="text-muted">Profile Completion</span>
                  <span className="text-muted">85%</span>
                </div>
                <div className="progress" style={{ height: "8px" }}>
                  <div
                    className="progress-bar bg-success"
                    role="progressbar"
                    style={{ width: "85%" }}
                    aria-valuenow={85}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  ></div>
                </div>
              </div>
            </div>
          </div>

          <div className="card border-0 shadow mt-4">
            <div className="card-body">
              <h5 className="card-title fw-bold mb-3">Membership Details</h5>
              <div className="d-flex justify-content-between mb-2">
                <span className="text-muted">Plan</span>
                <span className="fw-bold">Premium</span>
              </div>
              <div className="d-flex justify-content-between mb-2">
                <span className="text-muted">Billing Cycle</span>
                <span className="fw-bold">Annual</span>
              </div>
              <div className="d-flex justify-content-between mb-2">
                <span className="text-muted">Next Payment</span>
                <span className="fw-bold">Oct 15, 2023</span>
              </div>
              <button className="btn btn-outline-primary w-100 mt-3">
                Manage Subscription
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
                          First Name
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="firstName"
                          defaultValue="John"
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
                          defaultValue="Doe"
                        />
                      </div>
                    </div>

                    <div className="mb-3">
                      <label htmlFor="email" className="form-label">
                        Email Address
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        defaultValue="john.doe@example.com"
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

                    <div className="mb-3">
                      <label htmlFor="bio" className="form-label">
                        Bio
                      </label>
                      <textarea
                        className="form-control"
                        id="bio"
                        rows={3}
                        defaultValue="Product designer and developer based in New York."
                      ></textarea>
                    </div>

                    <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                      <button
                        type="button"
                        className="btn btn-outline-secondary me-md-2"
                      >
                        Cancel
                      </button>
                      <button type="submit" className="btn btn-primary">
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
                          <th scope="col">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>#ORD-7895</td>
                          <td>Sep 25, 2023</td>
                          <td>Premium Plan - Annual</td>
                          <td>$199.99</td>
                          <td>
                            <span className="badge bg-success">Completed</span>
                          </td>
                          <td>
                            <button className="btn btn-sm btn-outline-primary">
                              View
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td>#ORD-7823</td>
                          <td>Aug 12, 2023</td>
                          <td>Design Course Bundle</td>
                          <td>$89.99</td>
                          <td>
                            <span className="badge bg-success">Completed</span>
                          </td>
                          <td>
                            <button className="btn btn-sm btn-outline-primary">
                              View
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td>#ORD-7801</td>
                          <td>Jul 05, 2023</td>
                          <td>UI Component Library</td>
                          <td>$59.99</td>
                          <td>
                            <span className="badge bg-success">Completed</span>
                          </td>
                          <td>
                            <button className="btn btn-sm btn-outline-primary">
                              View
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td>#ORD-7756</td>
                          <td>Jun 18, 2023</td>
                          <td>Premium Plan - Monthly</td>
                          <td>$19.99</td>
                          <td>
                            <span className="badge bg-secondary">Refunded</span>
                          </td>
                          <td>
                            <button className="btn btn-sm btn-outline-primary">
                              View
                            </button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <nav aria-label="Purchase history pagination">
                    <ul className="pagination justify-content-center">
                      <li className="page-item disabled">
                        <a
                          className="page-link"
                          href="#"
                          tabIndex={-1}
                          aria-disabled="true"
                        >
                          Previous
                        </a>
                      </li>
                      <li className="page-item active">
                        <a className="page-link" href="#">
                          1
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="#">
                          2
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="#">
                          3
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="#">
                          Next
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              )}

              {/* Payment Methods Tab */}
              {activeTab === "payment" && (
                <div>
                  <div className="d-flex justify-content-between align-items-center mb-4">
                    <h5 className="card-title mb-0">Payment Methods</h5>
                    <button className="btn btn-primary btn-sm">
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
                          <span className="badge bg-primary me-2">Default</span>
                          <button className="btn btn-sm btn-outline-secondary">
                            Edit
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="card mb-3 border">
                    <div className="card-body">
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="d-flex align-items-center">
                          <div className="me-3">
                            <i className="bi bi-credit-card fs-3"></i>
                          </div>
                          <div>
                            <h6 className="mb-0">Mastercard ending in 8790</h6>
                            <small className="text-muted">
                              Expires 12/2024
                            </small>
                          </div>
                        </div>
                        <div>
                          <button className="btn btn-sm btn-outline-secondary me-2">
                            Make Default
                          </button>
                          <button className="btn btn-sm btn-outline-secondary">
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
                        <label htmlFor="billingCompany" className="form-label">
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
                      <button type="submit" className="btn btn-primary">
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
                        <label htmlFor="currentPassword" className="form-label">
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
                        <label htmlFor="confirmPassword" className="form-label">
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

                  <div className="mb-5">
                    <h6 className="fw-bold mb-3">Two-Factor Authentication</h6>
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <div>
                        <p className="mb-0">
                          Add an extra layer of security to your account
                        </p>
                        <small className="text-muted">
                          We'll send a verification code to your phone when you
                          sign in.
                        </small>
                      </div>
                      <div className="form-check form-switch">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="twoFactorSwitch"
                        />
                      </div>
                    </div>
                    <button className="btn btn-outline-primary">
                      Set Up Two-Factor Authentication
                    </button>
                  </div>

                  <div className="mb-5">
                    <h6 className="fw-bold mb-3">Login Sessions</h6>
                    <p className="text-muted mb-3">
                      These are devices that have logged into your account.
                      Revoke any sessions that you do not recognize.
                    </p>

                    <div className="card mb-2 border">
                      <div className="card-body">
                        <div className="d-flex justify-content-between align-items-center">
                          <div>
                            <h6 className="mb-0">MacBook Pro - New York</h6>
                            <small className="text-muted">
                              Current active device
                            </small>
                          </div>
                          <span className="badge bg-success">Active Now</span>
                        </div>
                      </div>
                    </div>

                    <div className="card mb-2 border">
                      <div className="card-body">
                        <div className="d-flex justify-content-between align-items-center">
                          <div>
                            <h6 className="mb-0">iPhone 13 - New York</h6>
                            <small className="text-muted">
                              Last active: 2 hours ago
                            </small>
                          </div>
                          <button className="btn btn-sm btn-outline-danger">
                            Revoke
                          </button>
                        </div>
                      </div>
                    </div>

                    <div className="card mb-2 border">
                      <div className="card-body">
                        <div className="d-flex justify-content-between align-items-center">
                          <div>
                            <h6 className="mb-0">Windows PC - Chicago</h6>
                            <small className="text-muted">
                              Last active: Yesterday at 2:43 PM
                            </small>
                          </div>
                          <button className="btn btn-sm btn-outline-danger">
                            Revoke
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h6 className="fw-bold mb-3 text-danger">Danger Zone</h6>
                    <div className="card border border-danger">
                      <div className="card-body">
                        <h6 className="card-title">Delete Account</h6>
                        <p className="card-text text-muted">
                          Once you delete your account, there is no going back.
                          Please be certain.
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
  );
};

export default Account;
