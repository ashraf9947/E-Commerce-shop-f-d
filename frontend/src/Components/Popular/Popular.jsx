import React, { useState, useEffect } from "react";
import Item from "../Item/Item";
import { ProductsApi } from "apiClient";
import { apiConfig } from "apiClient/config";

const Popular = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productsApi = new ProductsApi(apiConfig);
        const response = await productsApi.productsList();
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="popular">
      <h1>POPULAR IN WOMEN</h1>
      <hr />
      <div className="popular-item" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
        {products.slice(0, 3).map((item) => (
          <Item
            key={item.id}
            id={item.id}
            name={item.name}
            image={item.image}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
};

export default Popular;
