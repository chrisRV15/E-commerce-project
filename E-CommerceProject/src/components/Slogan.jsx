import React from "react";
import "./styles.css";

const CarouselWithZoom = () => {
  return (
    <div className="container-fluid p-0 position-relative">
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="Slogan3.jpg"
              className="d-block w-100 zoom-image"
              alt="Image 1"
            />
          </div>
        </div>
      </div>

      <div className="position-absolute top-50 start-50 translate-middle text-center text-white">
        <h1 className="display-3 fw-normal">
          Discover Your Dream Watch on the Premier Marketplace for Luxury
          Timepieces.
        </h1>
      </div>
    </div>
  );
};

export default CarouselWithZoom;
