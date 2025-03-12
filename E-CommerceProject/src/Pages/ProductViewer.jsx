import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles.css";

const ProductViewer = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch(`http://localhost:5050/product/${productId}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Product not found");
        }
        return res.json();
      })
      .then((data) => {
        setProduct(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching product:", error);
        setError(error.message);
        setLoading(false);
      });
  }, [productId]);

  const handleGoBack = () => {
    navigate(-1);
  };

  if (loading) {
    return (
      <>
        <Header />
        <div className="container py-5 text-center">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <p className="mt-3">Loading product details...</p>
        </div>
        <Footer />
      </>
    );
  }

  if (error || !product) {
    return (
      <>
        <Header />
        <div className="container py-5 text-center">
          <div className="alert alert-danger" role="alert">
            {error || "Product not found"}
          </div>
          <button className="btn btn-primary mt-3" onClick={handleGoBack}>
            Back to Products
          </button>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <div className="container py-4">
        <div className="row ">
          <div className="col-12 col-md-6 d-flex justify-content-center align-items-center ">
            <img
              src={product.image || "/placeholder.svg"}
              alt={product.name || "Product"}
              className="card h-100 shadow-sm border-0 img-fluid hover-grow"
              style={{
                maxHeight: "500px",
                objectFit: "contain",
                backgroundColor: "#ECECEC",
              }}
            />
          </div>

          <div className="col-12 col-md-6 d-flex flex-column ">
            <div className="small text-muted text-uppercase fw-semibold">
              {product.brand}
            </div>
            <h1 className="fs-3 fw-semibold">{product.name}</h1>
            <div className="fs-4 fw-semibold mt-2">${product.price}</div>
            <p className="fw-medium">
              This watch features exceptional quality and craftsmanship.
            </p>

            <div className="d-flex align-items-center mt-3">
              <button className="btn btn-dark px-4 py-2 fw-semibold">
                Add to Cart
              </button>
            </div>

            <div className="small text-muted mt-3">
              <p>• Free shipping on orders over $349.99</p>
              <p>• 30-day money-back guarantee</p>
              <p>• 24/7 customer support</p>
            </div>

            <div className="mt-4">
              <h3 className="fw-medium mb-2">Product Details:</h3>
              <ul className="text-muted small ps-4">
                <li>High-quality materials</li>
                <li>Durable construction</li>
                <li>Versatile design</li>
                <li>Water-resistant</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductViewer;
