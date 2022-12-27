import React, { useEffect, useState } from "react";
import ProductPreview from "../components/ProductPreview";
import StorePageBanner from "../components/StorePageBanner";
import { client } from "../lib/client";
import styles from "../styles/StoreStyles.module.css";
import loader from "../assets/loader.png";

const BookStore = () => {
  const [data, setData] = useState();
  const [load, setLoad] = useState(true);

  const fetchData = async () => {
    const query = `*[_type == "ebooks"]`;

    const products = await client.fetch(query);
    setData(products);
    setLoad(false);
    console.log(products);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <StorePageBanner bgImage="https://image.shutterstock.com/image-photo/row-books-grungy-background-free-260nw-204592774.jpg" />

      <h1 className={styles.storeHeading}>E-Books</h1>

      {load ? (
        <img src={loader} className={styles.storeLoad} alt="load" />
      ) : (
        <div className={styles.storeLayout}>
          {data.map((product, i) => (
            <ProductPreview product={product} index={i} />
          ))}
        </div>
      )}
    </div>
  );
};

export default BookStore;
