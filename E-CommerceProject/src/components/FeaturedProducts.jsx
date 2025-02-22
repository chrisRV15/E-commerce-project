import React from "react";

const watches = [
  {
    id: 1,
    name: "Fossil",
    price: 199.99,
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: 2,
    name: "Fossil",
    price: 249.99,
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: 3,
    name: "Fossil",
    price: 299.99,
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: 4,
    name: "Fossil",
    price: 179.99,
    image: "/placeholder.svg?height=300&width=300",
  },
];

const FeaturedProducts = () => {
  return (
    <section className="bg-white py-5">
      <div className="container">
        <h2 className="text-center mb-5 display-4 fw-bold">
          Featured Products
        </h2>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
          {watches.map((watch) => (
            <div key={watch.id} className="col">
              <div className="card h-100 shadow-sm border-0">
                <img
                  src={watch.image || "/placeholder.svg"}
                  alt={watch.name}
                  className="card-img-top img-fluid"
                  style={{ height: "300px", objectFit: "cover" }}
                />
                <div className="card-body">
                  <h3 className="card-title fs-5 fw-semibold">{watch.name}</h3>
                  <p className="card-text text-muted">
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
