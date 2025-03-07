import React from "react";

const FeaturedCategories = () => {
  const categories = [
    { name: "Rolex" },
    { name: "Omega" },
    { name: "Audemars Piguet" },
    { name: "Patek Philippe" },
  ];

  return (
    <section className="container my-5 p-4">
      <h2 className="text-center mb-4">SHOP BY BRAND</h2>
      <div className="d-flex justify-content-center flex-wrap gap-3">
        {categories.map((category, index) => (
          <div
            key={index}
            className="px-3 py-2 text-center"
            style={{
              backgroundColor: "#ECECEC",
              borderRadius: "20px",
              minWidth: "150px",
              cursor: "pointer",
              transition: "0.3s",
              boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = "#D6D6D6")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = "#ECECEC")
            }
          >
            <a href="#" className="text-decoration-none">
              <h6 className="text-dark fw-semibold m-0">{category.name}</h6>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedCategories;
