import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles.css";

const ProductViewer = () => {
  return (
    <>
      <Header />
      <div className="container mx-auto px-4 py-8">
        <div className="grind md: grid-cols-2 gap-8">
          <div className="flex justify-center items-center">
            <img
              src="/placeholder.svg"
              alt="Product"
              className="rounded-lg shadow-md max-h-[600px] w-auto object-cover"
            />
          </div>
          <div className="flex flex-col space-y-4">
            <div className="flex flex-col space-y-4">
              <div className="text-sm text-muted-foreground uppercae tracking-wide">
                Brand
              </div>
              <h1 className="text-3xl font-semibold">Product Name</h1>
              <div className="text-2xl font-semibold mt-2">price</div>
              <div className="border-t border-b py-4 my-4">
                <div className="text-muted-foreground">
                  <p className="text-muted-foreground">Luxury Watch</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <div className="font-medium">Quantity:</div>
                  <div className="flex items-center"></div>
                </div>
              </div>

              <div className="text-sm text-muted-foreground mt-4">
                <p>• Free shipping on orders over $50</p>
                <p>• 30-day money-back guarantee</p>
                <p>• 24/7 customer support</p>
              </div>
              <div className="mt-6">
                <h3 className="font-medium mb-2">Product Details:</h3>
                <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
                  <li>High-quality materials</li>
                  <li>Durable construction</li>
                  <li>Versatile design</li>
                  <li>Easy to clean and maintain</li>
                  <li>Available in multiple colors (shown: Classic Black)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductViewer;
