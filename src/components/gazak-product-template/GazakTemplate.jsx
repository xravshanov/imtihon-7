
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import ProductInfo from "../product-info/ProductInfo";
import styles from "../gazak/Gazak.module.css";
import Overlay from "../../utils/index";

const GazakTemplate = ({ gazak }) => {
  const [productInfoActive, setProductInfoActive] = useState(false);

  return (
    <>
      <div
        className={styles.pizza_box}
        onClick={() => setProductInfoActive(true)}
      >
        <div className={styles.pizza_img}>
          <img src={gazak.image} alt="loading..." />
        </div>
        <div className={styles.pizza_desc}>
          <div className={styles.pizza_title}>
            <h3 className={styles.pizza_name}>{gazak.title}</h3>
            <p>{gazak.description}</p>
          </div>
          <button
            className={styles.pizza_price}
          >{`${gazak.price} so'm`}</button>
        </div>
      </div>
      {productInfoActive && (
        <ProductInfo pizzaData={gazak} callback={setProductInfoActive} />
      )}
      {productInfoActive && <Overlay callback={setProductInfoActive} />}
    </>
  );
};

export default GazakTemplate;
