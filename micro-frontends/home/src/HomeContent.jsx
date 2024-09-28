import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getProducts, currency } from "./products";

export default function HomeContent() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productsData = await getProducts();
        setProducts(productsData);
      } catch (error) {
        setProducts([]);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="container mx-auto p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {products.length === 0 ? (
        <p className="text-center text-gray-500 col-span-4">Ürün bulunamadı.</p>
      ) : (
        products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <Link to={`/product/${product.id}`}>
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-64 object-cover rounded-t-lg"
              />
            </Link>

            <div className="p-4">
              <div className="flex justify-between items-center">
                <div className="font-bold text-lg">
                  <Link to={`/product/${product.id}`} className="hover:underline">
                    {product.name}
                  </Link>
                </div>
                <div className="text-xl font-semibold text-green-600">
                  {currency.format(product.price)}
                </div>
              </div>
              <p className="text-sm text-gray-600 mt-2">{product.description}</p>

              <Link
                to={`/product/${product.id}`}
                className="inline-block mt-4 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
              >
                İncele
              </Link>
            </div>
          </div>
        ))
      )}
    </div>
  );
}
