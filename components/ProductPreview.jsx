import React from 'react'
import { urlFor } from "../lib/client";
import styles from "../styles/ProductPreview.module.css"
import { useRouter } from "next/router";

const ProductPreview = ({ product }) => {

  const router = useRouter();

  return (
    <div className={styles.prodPrevBody} onClick={() => router.push(`/product/${product.slug.current}`)}>
      <img src={urlFor(product.image)} alt="product" />
      <div>
        <h1>{product.name}</h1>
        <h2>₹ {product.price}/-</h2>
      </div>
    </div>
  );
}

export default ProductPreview