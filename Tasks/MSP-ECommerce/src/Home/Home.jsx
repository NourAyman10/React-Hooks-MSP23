// import images
import image1 from "../images/gloves.jpg";
import image2 from "../images/camera.jpg";
import image3 from "../images/t-shirts.jpg";
import image4 from "../images/pants.jpg";
import image5 from "../images/dress.jpg";
import image6 from "../images/shoes.jpg";
import image7 from "../images/bag.jpg";
import image8 from "../images/hat.jpg";
import image9 from "../images/sunglasses.jpg";
import image10 from "../images/lamp.jpg";
import image11 from "../images/towel.jpg";
import image12 from "../images/chairs.jpg";
import image13 from "../images/cushion.jpg";
import image14 from "../images/coffeeCups.jpg";
import image15 from "../images/curtain.jpg";

import React, { Fragment, useState } from "react";
import style from "./Home.module.css";
import logo from "../images/MSPLogo.svg";
import Products from "../Products/Products";
import Cart from "../Cart/Cart";


const Home = () => {
const[products, setProducts] = useState([
  { image: image1, name: "Gloves", oldPrice: 50, offer: 10 },
  { image: image2, name: "Camera", oldPrice: 650, offer: 40 },
  { image: image3, name: "T-Shirts", oldPrice: 1000, offer: 30 },
  { image: image4, name: "Pants", oldPrice: 850, offer: 18 },
  { image: image5, name: "Dress", oldPrice: 680, offer: 44 },
  { image: image6, name: "Shoes", oldPrice: 600, offer: 13 },
  { image: image7, name: "Bag", oldPrice: 300, offer: 5 },
  { image: image8, name: "Hat", oldPrice: 70, offer: 8 },
  { image: image9, name: "Sunglasses", oldPrice: 920, offer: 14 },
  { image: image10, name: "Lamp", oldPrice: 850, offer: 46 },
  { image: image11, name: "Towel", oldPrice: 400, offer: 30 },
  { image: image12, name: "Chairs", oldPrice: 1000, offer: 33 },
  { image: image13, name: "Cushion", oldPrice: 550, offer: 26 },
  { image: image14, name: "CoffeeCups", oldPrice: 140, offer: 28 },
  { image: image15, name: "Curtain", oldPrice: 390, offer: 42 },
])
const[cart, setCart] = useState([])
const[totalPrice, setTotalPrice] = useState(0)

const addToCart = (e, indexToAdd) => {
  // update cart
  setCart([...cart, products[indexToAdd]])

  //update total price
  const {oldPrice, offer} = products[indexToAdd];
  setTotalPrice(totalPrice + (oldPrice * (offer/100)))

  //update products
  setProducts(products.filter((product, idx)=>idx !== indexToAdd))
}

const removeFromCart = (e, indexToRemove) => {
  // update cart
  setProducts([cart[indexToRemove], ...products])

  //update total price
  const {oldPrice, offer} = cart[indexToRemove];
  setTotalPrice(totalPrice - (oldPrice * (offer/100)).toFixed(2))

  //update products
  setCart(cart.filter((product, idx)=>idx !== indexToRemove))
}

return (
    <Fragment>
      <div className={style.mainHome}>
        <header>
          <div className={logo}>
            <img src={logo} alt="logo-MSP" />
          </div>
          <h1>MSP ECommerce</h1>
        </header>
        <section>
          <div className={style.productsHeader}>
            <p>{products.length}</p>
            <h1>Top Home Picks</h1>
          </div>

          <div><Products list={products} addToCart={addToCart} /></div>
        </section>
        <section>
          <div><Cart list={cart} removeFromCart={removeFromCart} /></div>
          <div className={style.cartFooter}>
            <h1>Total Price:</h1>
            <span>
              <sub>EGP</sub>
              <p>{totalPrice}</p>
            </span>
          </div>
        </section>
      </div>
    </Fragment>
  );
};

export default Home;
