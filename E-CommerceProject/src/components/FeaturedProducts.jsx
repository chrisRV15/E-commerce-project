import React from "react";
import "../styles.css";

const watches = [
  {
    id: 1,
    name: "Omega Speedmaster",
    price: 199.99,
    image: "Omega Speedmaster.png",
  },
  {
    id: 2,
    name: "Patek Philippe Nautilus",
    price: 249.99,
    image: "Patek Philippe Nautilus.png",
  },
  {
    id: 3,
    name: "Rolex Datejust",
    price: 299.99,
    image: "Rolex Datejust.png",
  },
  {
    id: 4,
    name: "Rolex Submariner",
    price: 179.99,
    image: "Rolex Submariner.png",
  },

  {
    id: 5,
    name: "Audemars Piguet Royal Oak",
    price: 249.99,
    image: "AudemarsPiguet Royal Oak.png",
  },

  {
    id: 6,
    name: "Rolex Day-Date",
    price: 499.99,
    image: "Rolex Day-Date.png",
  },

  {
    id: 7,
    name: "Rolex GMT-Master II",
    price: 399.99,
    image: "Rolex GMT-Master II.png",
  },

  {
    id: 8,
    name: "Rolex Daytona",
    price: 349.99,
    image: "Rolex Daytona.png",
  },
];

const FeaturedProducts = () => {
  return (
    <section className="bg-white py-5">
      <div className="container">
        <h2 className="text-center mb-5 display-4 fw-bold">Our Best Selling</h2>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
          {watches.map((watch) => (
            <div key={watch.id} className="col">
              <div
                className="card h-100 shadow-sm border-0"
                style={{ backgroundColor: "#ECECEC" }}
              >
                <img
                  src={watch.image}
                  alt={watch.name}
                  className="card-img-top img-fluid hover-grow"
                  style={{ height: "300px", objectFit: "cover" }}
                />
                <div className="card-body">
                  <h3 className="card-title fs-5 fw-semibold">{watch.name}</h3>
                  <p className="card-text text-semibold">
                    ${watch.price.toFixed(2)}
                  </p>
                  <button className="btn btn-dark w-100 fw-semibold">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
