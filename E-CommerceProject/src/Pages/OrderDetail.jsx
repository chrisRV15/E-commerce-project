import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const OrderDetails = () => {
  const { orderId } = useParams();
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchOrderDetails = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          throw new Error("Not authenticated");
        }

        const response = await fetch(`http://localhost:5050/order/${orderId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch order details");
        }

        const data = await response.json();
        setOrder(data);
      } catch (error) {
        console.error("Error fetching order:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchOrderDetails();
  }, [orderId]);

  if (loading)
    return (
      <div className="container mt-5 text-center">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <p className="mt-2">Loading order details...</p>
      </div>
    );

  if (error)
    return (
      <div className="container mt-5">
        <div className="alert alert-danger" role="alert">
          <h4 className="alert-heading">Error!</h4>
          <p>{error}</p>
        </div>
      </div>
    );

  if (!order)
    return (
      <div className="container mt-5">
        <div className="alert alert-warning" role="alert">
          Order not found
        </div>
      </div>
    );

  return (
    <>
      <Header />
      <div className="container my-5">
        <div className="card border-0 shadow-sm">
          <div className="card-header bg-primary text-white">
            <h2 className="mb-0">Order Confirmation</h2>
          </div>

          <div className="card-body">
            <div className="row mb-4">
              <div className="col-md-6">
                <div className="card h-100">
                  <div className="card-body">
                    <h5 className="card-title">Order Information</h5>
                    <div className="mb-3">
                      <span className="badge bg-success">{order.status}</span>
                    </div>
                    <p className="card-text">
                      <strong>Order ID:</strong> {order._id}
                    </p>
                    <p className="card-text">
                      <strong>Order Date:</strong>{" "}
                      {new Date(order.orderDate).toLocaleDateString()}
                    </p>
                    <p className="card-text">
                      <strong>Total Amount:</strong>{" "}
                      <span className="text-primary fw-bold">
                        ${order.totalAmount.toFixed(2)}
                      </span>
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <div className="card h-100">
                  <div className="card-body">
                    <h5 className="card-title">Shipping Address</h5>
                    <address>
                      <strong>{order.shippingAddress.fullName}</strong>
                      <br />
                      {order.shippingAddress.address}
                      <br />
                      {order.shippingAddress.city},{" "}
                      {order.shippingAddress.state}{" "}
                      {order.shippingAddress.zipCode}
                      <br />
                      {order.shippingAddress.country}
                    </address>
                  </div>
                </div>
              </div>
            </div>

            <div className="card mb-4">
              <div className="card-header">
                <h5 className="mb-0">Order Items</h5>
              </div>
              <div className="card-body p-0">
                <div className="table-responsive">
                  <table className="table table-striped mb-0">
                    <thead>
                      <tr>
                        <th>Product</th>
                        <th>Quantity</th>
                        <th className="text-end">Price</th>
                        <th className="text-end">Subtotal</th>
                      </tr>
                    </thead>
                    <tbody>
                      {order.items.map((item, index) => (
                        <tr key={index}>
                          <td>{item.productId}</td>
                          <td>{item.quantity}</td>
                          <td className="text-end">${item.price.toFixed(2)}</td>
                          <td className="text-end">
                            ${(item.price * item.quantity).toFixed(2)}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                    <tfoot className="table-group-divider">
                      <tr>
                        <th colSpan={3} className="text-end">
                          Total:
                        </th>
                        <th className="text-end">
                          ${order.totalAmount.toFixed(2)}
                        </th>
                      </tr>
                    </tfoot>
                  </table>
                </div>
              </div>
            </div>

            <div className="card mb-4">
              <div className="card-header">
                <h5 className="mb-0">Payment Information</h5>
              </div>
              <div className="card-body">
                <p>
                  <strong>Method:</strong> {order.paymentInfo.method}
                </p>
                {order.paymentInfo.last4Digits && (
                  <p>
                    <strong>Card ending in:</strong>{" "}
                    {order.paymentInfo.last4Digits}
                  </p>
                )}
              </div>
            </div>

            <div className="d-flex gap-2 justify-content-end">
              <Link to="/orders" className="btn btn-outline-secondary">
                <i className="bi bi-arrow-left me-1"></i> View All Orders
              </Link>
              <Link to="/" className="btn btn-primary">
                <i className="bi bi-cart me-1"></i> Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default OrderDetails;
