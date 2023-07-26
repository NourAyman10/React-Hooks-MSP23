import React, { Fragment } from "react";
import style from "./Products.module.css";

const Products = ({list, addToCart}) => {
  return (
    <Fragment>
      <div className={style.products}>
        {list.map(({image, name, oldPrice, offer}, idx)=>(
          <div key={idx}>
          <div
            className={style.image}
            style={{ backgroundImage: `url(${image})` }}
          ></div>
          <div className={style.productDetails}>
            <h3>{name}</h3>
            <span>
              <sub>EGP</sub>
              <p>{(oldPrice * (offer/100)).toFixed(2)}</p>
            </span>
            <span>
              <del>{oldPrice}</del>
              <p>{offer}% off</p>
            </span>
            <button onClick={(e)=>addToCart(e, idx)}>Add to cart</button>
          </div>
        </div>
        ))}
      </div>
    </Fragment>
  );
};

export default Products;
