import React, { useEffect, useState } from 'react'
import ProductPreview from '../components/ProductPreview';
import StorePageBanner from '../components/StorePageBanner'
import {motion} from "framer-motion"
import { client } from '../lib/client';
import "../styles/pages/StoreStyles.css";
import loader from "../assets/loader.png"

const BraceletStore = () => {

  const [data, setData] = useState();
  const [load, setLoad] = useState(true);

  const fetchData = async() => {
    const query = `*[_type == "bracelets"]`;

    const products = await client.fetch(query);
    setData(products);
    setLoad(false);
    console.log(products)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div>
      <StorePageBanner bgImage="https://i.ebayimg.com/images/g/Vv0AAOSww8xg3tvQ/s-l500.jpg" />

      <h1 className="storeHeading">Bracelets</h1>

      {load ? (
        <img
          src={loader}
          className="storeLoad"
          alt="load"
        />
      ) : (
        <motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{delay: 0.15, duration: 1}} className="storeLayout">
          {data.map((product, i) => (
            <ProductPreview product={product} index={i} />
          ))}
        </motion.div>
      )}
    </div>
  );
}

export default BraceletStore