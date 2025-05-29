import React from 'react'
import './Item.css'
import { Link } from 'react-router-dom'

const Item = (props) => {
  return (
    <div className='item'>
      {/* При клике на изображение переходим на страницу товара и скроллим вверх */}
      <Link to={`/product/${props.id}`}>
        <img onClick={() => window.scrollTo(0, 0)} src={props.image} alt="-product-" />
      </Link>

      {/* Название товара */}
      <p>{props.name}</p>

      {/* Цены */}
      <div className="item-prices">
        <div className="item-price-new">
            ${props.new_price}
        </div>
        <div className="item-price-old">
            ${props.old_price}
        </div>
      </div>
    </div>
  )
}

export default Item
