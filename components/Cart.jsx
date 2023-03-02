import React, { useContext, useRef } from "react";
import Link from "next/link";
import {
  AiOutlineMinus,
  AiOutlinePlus,
  AiOutlineLeft,
  AiOutlineShopping,
} from "react-icons/ai";
import { TiDeleteOutline } from "react-icons/ti";
import toast from "react-hot-toast";

import { Context } from "../context/StateContext";
import { urlFor } from "../lib/client";
import styles from "../styles/Cart.module.css";
// import getStripe from "../lib/getStripe";

const Cart = () => {
  const cartRef = useRef();
  const {
    totalPrice,
    totalQuantities,
    cartItems,
    setShowCart,
    toggleCartItemQuantity,
    onRemove,
  } = useContext(Context);

  // const handleCheckout = async () => {
  //   const stripe = await getStripe();

  //   const response = await fetch("/api/stripe", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(cartItems),
  //   });

  //   if (response.statusCode === 500) return;

  //   const data = await response.json();

  //   toast.loading("Redirecting...");

  //   stripe.redirectToCheckout({ sessionId: data.id });
  // };

  // const textMsg = `${cartItems[0].name} : ₹${cartItems[0].price}\n Total: ₹${totalPrice}`
  
  const handleCheckout = () => {
    let textMsg = "";
    let tempMsg = "";
    let finalMsg = "";
    let priceMsg = "";
    let details = "";
    let date = new Date();
    let price="";
    date = date.toLocaleString();
    
    cartItems.map(item => {
      price = item.price.toString();
      details = price.concat(" ", `(${item.quantity})`)
      tempMsg = item.name.concat(" : ", details)
      textMsg = textMsg.concat("%0a", tempMsg);
      priceMsg = textMsg.concat("%0aTotal Price: ", totalPrice);
      finalMsg = priceMsg.concat(`%0aInvoice Time: `, date);
    })
    window.open(
      `https://api.whatsapp.com/send?phone=+919999898562&text=${finalMsg}`,
      "_blank"
    );
  }

  return (
    <div className={styles.cartWrapper} ref={cartRef}>
      {cartItems.length < 1 && (
        <div className={styles.emptyCart}>
          <AiOutlineShopping size={150} />
          <h3>Your shopping bag is empty</h3>
          <Link href="/">
            <button
              type="button"
              onClick={() => setShowCart(false)}
              className={styles.btn}
            >
              Continue Shopping
            </button>
          </Link>
        </div>
      )}
      <div className={styles.cartContainer}>
        {cartItems.length >= 1 && (
          <button
            type="button"
            className={styles.cartHeading}
            onClick={() => setShowCart(false)}
          >
            <AiOutlineLeft />
            <span className={styles.heading}>Your Cart </span>
            <span className={styles.cartNumItems}>
              ({totalQuantities} items)
            </span>
          </button>
        )}

        <div className={styles.productContainer}>
          {cartItems.length >= 1 &&
            cartItems.map((item) => (
              <div className={styles.product} key={item._id}>
                <img src={urlFor(item?.image)} className={styles.cartProductImage} />
                <div className={styles.itemDesc}>
                  <div className={styles.flexTop}>
                    <h4>{item.name}</h4>
                    <h5>Rs. {item.price}</h5>
                    <h6>Total Quanity: {item.quantity}</h6>
                  </div>

                  <div className={styles.flexBottom}>
                    <button
                      type="button"
                      className={styles.removeItem}
                      onClick={() => onRemove(item)}
                    >
                      Remove Item
                      <TiDeleteOutline />
                    </button>
                  </div>
                </div>
              </div>
            ))}
        </div>

        {cartItems.length >= 1 && (
          <div className={styles.cartBottom}>
            <div className={styles.total}>
              <h3>Subtotal:</h3>
              <h3>Rs. {totalPrice}</h3>
            </div>
            <div className={styles.btnContainer}>
              <button
                type="button"
                className={styles.checkoutbtn}
                onClick={handleCheckout}
              >
                Proceed to WhatsApp
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;


{/* <div className={styles.product} key={item._id}>
  <img src={urlFor(item?.image)} className={styles.cartProductImage} />
  <div className={styles.itemDesc}>
    <div className={styles.flexTop}>
      <h5>{item.name}</h5>
      <h4>Rs. {item.price}</h4>
    </div>
    <div className={styles.flexBottom}>
      <div>
        <p className={styles.quantityDesc}>
          <span
            className={styles.minus}
            onClick={() => toggleCartItemQuanitity(item._id, "dec")}
          >
            <AiOutlineMinus />
          </span>
          <span className={styles.num} onClick="">
            {item.quantity}
          </span>
          <span
            className={styles.plus}
            onClick={() => toggleCartItemQuanitity(item._id, "inc")}
          >
            <AiOutlinePlus />
          </span>
        </p>
      </div>
      <button
        type="button"
        className={styles.removeItem}
        onClick={() => onRemove(item)}
      >
        <TiDeleteOutline />
      </button>
    </div>
  </div>
</div>; */}

{/* <div className={styles.cartProductList}>
              <img src={urlFor(item?.image)} alt="item" />
              <div className={styles.cardProductDetails}>
                <h3>{item.name}</h3>
                <h4>{item.price}</h4>
              </div>
            </div> */}