import React, { useState, useEffect } from "react";
import { ProductsApi } from "apiClient";
import { apiConfig } from "apiClient/config";
import Item from "../Item/Item";

const RelatedProducts = ({ product }) => {
  const [relatedProducts, setRelatedProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productsApi = new ProductsApi(apiConfig);
        const response = await productsApi.productsList();
        setRelatedProducts(response.data.filter(item => item.category === product.category && item.id !== product.id).slice(0, 8)); // Get 8 related products
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, [product]);

  return (
    <div className="RelatedProducts">
      <h1>Related Products</h1>
      <hr />
      <div className="relatedProducts-item">
        {relatedProducts.map((item) => (
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

export default RelatedProducts;
