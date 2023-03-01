import React, { useEffect, useState } from "react";
import ProductPreview from "../components/ProductPreview";
import StorePageBanner from "../components/StorePageBanner";
import { client } from "../lib/client";
import styles from "../styles/StoreStyles.module.css";
import loader from "../assets/loader.png";
import Image from "next/image";

const CrystalStore = () => {
  const [data, setData] = useState();
  const [load, setLoad] = useState(true);

  const fetchData = async () => {
    const query = `*[_type == "bracelets"]`;

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
      <StorePageBanner bgImage="https://trulyexperiences.com/blog/wp-content/uploads/2020/12/AdobeStock_154014422-scaled-e1607077599935.jpeg" />

      <h1 className={styles.storeHeading}>Crystals</h1>

      {load ? (
        <Image src={loader} className={styles.storeLoad} alt="load" />
      ) : (
        <div className={styles.storeLayout}>
          {data.map((product, i) => (
            <ProductPreview product={product} store="crystals" index={i} key={i} />
          ))}
        </div>
      )}
    </div>
  );
};

export default CrystalStore;
