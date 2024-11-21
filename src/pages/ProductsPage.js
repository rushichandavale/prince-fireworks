const ProductsPage = () => {
    const products = [
      {
        name: "Sparklers",
        description: "Create beautiful sparkles for every occasion.",
        image:
          "https://unsplash.com/photos/vUXxF1iz48M/download?ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjg0NzA0OTI3&force=true",
      },
      {
        name: "Rockets",
        description: "High-flying rockets that light up the sky.",
        image:
          "https://unsplash.com/photos/LzKcHRVV02k/download?ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjg0NzA0OTI3&force=true",
      },
      {
        name: "Chakkars",
        description: "Mesmerizing spinning fireworks for the ground.",
        image:
          "https://unsplash.com/photos/Mr8HH9oFqHo/download?ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjg0NzA0OTI3&force=true",
      },
    ];
  
    return (
      <div className="products-page py-20 bg-gray-100">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold text-center mb-10">Our Products</h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div
                key={index}
                className="product-card bg-white shadow-md rounded-lg overflow-hidden"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h2 className="text-xl font-bold">{product.name}</h2>
                  <p className="text-gray-700">{product.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default ProductsPage;
  