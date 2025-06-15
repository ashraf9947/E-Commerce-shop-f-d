import React, { useContext } from "react";
import "./CSS/ShopCategory.css";
import { ShopContext } from "../context/ShopContext";
import dropdown_icon from "../Components/Assets/dropdown_icon.png";
import Item from "../Components/Item/Item";

const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);

  if (!all_product || !Array.isArray(all_product)) {
    return <div style={{ padding: "2rem" }}>Loading products...</div>;
  }

  const filteredProducts = all_product.filter(
    (item) => item.category.toLowerCase() === props.category.toLowerCase()
  );

  return (
    <div className="shop-category">
      <img className="shopCategory-banner" src={props.banner} alt="banner" />

      <div className="shopCategory-indexSort">
        <p>
          <span>Showing {filteredProducts.length}</span> products
        </p>
        <div className="shopCategory-short">
          sort by <img src={dropdown_icon} alt="dropdown" />
        </div>
      </div>

      <div className="shopCategory-products">
        {filteredProducts.map((item) => (
          <Item
            key={item.id}
            id={item.id}
            name={item.name}
            image={item.image}
            new_price={item.new_price}
            old_price={item.old_price}
          />
        ))}
      </div>

      <div className="shopCategory-loadMore">Explore more</div>
    </div>
  );
};

export default ShopCategory;
