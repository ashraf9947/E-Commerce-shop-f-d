import React, { useState, useEffect } from "react";
import { ProductsApi } from "../apiClient";
import { apiConfig } from "../apiClient/config";
import dropdown_icon from "../Components/Assets/dropdown_icon.png";
import Item from "../Components/Item/Item";

const ShopCategory = (props) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productsApi = new ProductsApi(apiConfig);
        const response = await productsApi.productsList();
        setProducts(response.data.filter(item => item.category.toLowerCase() === props.category.toLowerCase()));
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, [props.category]);

  return (
    <div className="shop-category">
      <img className="shopCategory-banner" src={props.banner} alt="banner" />
      <div className="shopCategory-indexSort">
        <p>
          <span>Showing {products.length}</span> products
        </p>
        <div className="shopCategory-short">
          sort by <img src={dropdown_icon} alt="dropdown" />
        </div>
      </div>
      <div className="shopCategory-products" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
        {products.map((item) => (
          <Item key={item.id} id={item.id} name={item.name} image={item.image} price={item.price} />
        ))}
      </div>
      <div className="shopCategory-loadMore">Explore more</div>
    </div>
  );
};

export default ShopCategory;
