import React, { useContext, useState } from "react";
import { client, urlFor } from "../../../lib/client";
import {
  AiOutlineMinus,
  AiOutlinePlus,
  AiOutlineStar,
  AiFillStar,
} from "react-icons/ai";
import { Context } from "../../../context/StateContext";
import styles from "../../../styles/ProductSlug.module.css";

const ProductDetails = ({ product }) => {

  const { decQty, incQty, qty, onAdd, setShowCart } = useContext(Context);

  const handleBuyNow = () => {
    onAdd(product, qty);
    setShowCart(true);
  };

  return (
    <div className={styles.productDetailContainer}>
      <div className={styles.productDetailImage}>
        <img src={urlFor(product.image)} />
      </div>

      <div className={styles.productDetailDesc}>
        <h1>{product.name}</h1>

        <h3>Details: </h3>
        <p>{product.description}</p>
        <p className={styles.price}>Rs. {product.price}</p>
        <div className={styles.quantity}>
          <h4>Quantity:</h4>
          <p className={styles.quantityDesc}>
            <span className={styles.minus} onClick={decQty}>
              <AiOutlineMinus />
            </span>
            <span className={styles.num}>{qty}</span>
            <span className={styles.plus} onClick={incQty}>
              <AiOutlinePlus />
            </span>
          </p>
        </div>
        <div className={styles.buttons}>
          <button
            type="button"
            className={styles.addToCart}
            onClick={() => onAdd(product, qty)}
          >
            Add to Cart
          </button>
          <button
            type="button"
            className={styles.buyNow}
            onClick={handleBuyNow}
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export const getStaticProps = async ({ params: { slug } }) => {
  const query = `*[_type == "bracelets" && slug.current == '${slug}'][0]`;
  const productsQuery = `*[_type == "bracelets"]`;

  const product = await client.fetch(query);
  const products = await client.fetch(productsQuery);

  return {
    props: { products, product },
  };
};

export const getStaticPaths = async () => {
  const query = `*[_type == "bracelets"] {
    slug {
      current
    }
  }`;

  const products = await client.fetch(query);

  const paths = products.map((product) => ({
    params: {
      slug: product.slug.current,
    },
  }));

  return {
    paths,
    fallback: "blocking",
  };
};

export default ProductDetails;
