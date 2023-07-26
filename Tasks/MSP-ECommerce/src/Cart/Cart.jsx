import React, { Fragment } from "react";
import style from "./Cart.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const Cart = ({ list, removeFromCart }) => {
  return (
    <Fragment>
      <div className={style.cartIconContainer}>
        <div className={style.iconContainer}>
          <FontAwesomeIcon icon={faCartShopping} className={style.cartIcon} />
          <p>{list.length}</p>
        </div>
        <main>
          <div className={style.mainCart}>
            {list.map(({image, name, oldPrice, offer}, idx) => (
              <Fragment key={idx}>
                <div>
                  <div className={style.image} style={{ backgroundImage: `url(${image})` }}></div>
                  <div className={style.details}>
                    <h3>{name}</h3>
                    <div className={style.cartfooter}>
                      <div className={style.price}>
                        <span>
                          <sub>EGP</sub>
                          <p>{(oldPrice * (offer/100)).toFixed(2)}</p>
                        </span>
                        <span>
                          <del>{oldPrice}</del>
                          <p>{offer}% off</p>
                        </span>
                      </div>
                      <button onClick={(e)=>removeFromCart(e, idx)}>Remove</button>
                    </div>
                  </div>
                </div>
                <div className={style.hr}></div>
              </Fragment>
            ))}
          </div>
        </main>
      </div>
    </Fragment>
  );
};

export default Cart;
