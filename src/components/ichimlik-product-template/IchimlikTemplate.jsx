
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import ProductInfo from "../product-info/ProductInfo";
import styles from "../pizza/Pizza.module.css";
import Overlay from "../../utils/index";

const IchimlikTemplate = ({ ichimlik }) => {
  const [productInfoActive, setProductInfoActive] = useState(false);

  return (
    <>
      <div
        className={styles.pizza_box}
        onClick={() => setProductInfoActive(true)}
      >
        <div className={styles.pizza_img}>
          <img src={ichimlik.image} alt="loading..." />
        </div>
        <div className={styles.pizza_desc}>
          <div className={styles.pizza_title}>
            <h3 className={styles.pizza_name}>{ichimlik.title}</h3>
            <p>{ichimlik.description}</p>
          </div>
          <button
            className={styles.pizza_price}
          >{`${ichimlik.price} so'm`}</button>
        </div>
      </div>
      {productInfoActive && (
        <ProductInfo pizzaData={ichimlik} callback={setProductInfoActive} />
      )}
      {productInfoActive && <Overlay callback={setProductInfoActive} />}
    </>
  );
};

export default IchimlikTemplate;
