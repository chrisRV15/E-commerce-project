import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles.css";

const ProductPage = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [brands, setBrands] = useState([]);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [priceRange, setPriceRange] = useState([0, 10000]);

  useEffect(() => {
    fetch("http://localhost:5050/product")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setFilteredProducts(data);

        const uniqueBrands = [...new Set(data.map((product) => product.brand))];
        setBrands(uniqueBrands);
      })
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  const handleBrandChange = (brand) => {
    let updatedSelectedBrands = [...selectedBrands];

    if (selectedBrands.includes(brand)) {
      updatedSelectedBrands = updatedSelectedBrands.filter((b) => b !== brand);
    } else {
      updatedSelectedBrands.push(brand);
    }

    setSelectedBrands(updatedSelectedBrands);
    filterProducts(updatedSelectedBrands, priceRange);
  };

  const handlePriceChange = (event) => {
    const newPriceRange = [...priceRange];
    if (event.target.id === "minPrice") {
      newPriceRange[0] = Number(event.target.value);
    } else {
      newPriceRange[1] = Number(event.target.value);
    }

    setPriceRange(newPriceRange);
    filterProducts(selectedBrands, newPriceRange);
  };

  const filterProducts = (selectedBrands, priceRange) => {
    let filtered = products;

    if (selectedBrands.length > 0) {
      filtered = filtered.filter((product) =>
        selectedBrands.includes(product.brand)
      );
    }

    filtered = filtered.filter(
      (product) =>
        product.price >= priceRange[0] && product.price <= priceRange[1]
    );

    setFilteredProducts(filtered);
  };

  return (
    <>
      <>
        <Header />
      </>
      <div className="row">
        <div className="col-12 col-sm-3 d-none d-sm-block">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title mb-3 fw-semibold">Brand</h5>
              <div className="mb-4">
                {brands.map((brand) => (
                  <div key={brand} className="form-check mb-2">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id={`brand-${brand}`}
                      checked={selectedBrands.includes(brand)}
                      onChange={() => handleBrandChange(brand)}
                    />
                    <label
                      className="form-check-label"
                      htmlFor={`brand-${brand}`}
                    >
                      {brand}
                    </label>
                  </div>
                ))}
              </div>

              <h5 className="card-title mb-3">Price Range</h5>
              <div className="mb-3">
                <label htmlFor="minPrice" className="form-label">
                  Min Price: ${priceRange[0]}
                </label>
                <input
                  type="range"
                  className="form-range"
                  id="minPrice"
                  min="0"
                  max="10000"
                  step="100"
                  value={priceRange[0]}
                  onChange={handlePriceChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="maxPrice" className="form-label">
                  Max Price: ${priceRange[1]}
                </label>
                <input
                  type="range"
                  className="form-range"
                  id="maxPrice"
                  min="0"
                  max="10000"
                  step="100"
                  value={priceRange[1]}
                  onChange={handlePriceChange}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="col-12 col-sm-9">
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <div key={product._id} className="col">
                  <div
                    className="card h-100 shadow-sm border-0"
                    style={{ backgroundColor: "#ECECEC" }}
                  >
                    <div style={{ position: "relative", height: "200px" }}>
                      <img
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        className="img-fluid hover-grow"
                        style={{
                          objectFit: "cover",
                          height: "100%",
                          width: "100%",
                        }}
                      />
                    </div>
                    <div className="card-body">
                      <h5 className="card-title">{product.name}</h5>
                      <p className="card-text text-muted">{product.brand}</p>
                      <p className="card-text fw-bold">${product.price}</p>
                    </div>
                    <div className="card-footer bg-transparent border-top-0">
                      <button className="btn btn-dark w-100 fw-semibold">
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-12 text-center py-5">
                <h3>No products found</h3>
                <p className="text-muted">Try adjusting your filters</p>
              </div>
            )}
          </div>
        </div>
      </div>
      <>
        <Footer />
      </>
    </>
  );
};

export default ProductPage;
