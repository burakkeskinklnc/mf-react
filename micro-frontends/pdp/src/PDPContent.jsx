import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProductById, currency } from "home/products";

export default function PDPContent() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (id) {
      getProductById(id)
        .then((result) => {
          if (result) {
            setProduct(result);
            setError(false);
          } else {
            setError(true);
          }
        })
        .catch(() => {
          setError(true);
        });
    } else {
      setProduct(null);
      setError(true);
    }
  }, [id]);

  if (error) {
    return (
      <div className="container mx-auto p-8 text-center">
        <h1 className="text-2xl font-bold text-red-600">Ürün Detayına Ulaşılamadı</h1>
        <p className="text-lg text-gray-700 mt-4">
          Aradığınız ürün mevcut değil veya bir hata oluştu. Lütfen daha sonra tekrar deneyin.
        </p>
      </div>
    );
  }

  if (!product) return null;

  return (
    <div className="container mx-auto p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex justify-center">
          <img
            src={product.image}
            alt={product.name}
            className="rounded-lg shadow-lg max-w-full object-cover"
          />
        </div>

        <div className="flex flex-col justify-center">
          <div className="flex justify-between items-center">
            <h1 className="font-bold text-4xl text-gray-800">{product.name}</h1>
            <div className="font-bold text-4xl text-green-600">
              {currency.format(product.price)}
            </div>
          </div>

          <div className="mt-6 text-gray-600 text-lg">{product.description}</div>

          <div className="mt-8 text-gray-500 text-base leading-relaxed border-t pt-4">
            {product.longDescription}
          </div>

          <button className="mt-10 bg-blue-500 text-white px-6 py-3 rounded-lg text-lg font-semibold shadow-md hover:bg-blue-600 transition duration-300">
            Sepete Ekle
          </button>
        </div>
      </div>
    </div>
  );
}
