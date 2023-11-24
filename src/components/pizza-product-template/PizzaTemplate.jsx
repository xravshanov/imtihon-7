/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import ProductInfo from "../product-info/ProductInfo";
import styles from "../pizza/Pizza.module.css";
import Overlay from "../../utils/index";

const PizzaTemplate = ({ pizza }) => {
  const [productInfoActive, setProductInfoActive] = useState(false);

  return (
    <>
      <div
        className={styles.pizza_box}
        onClick={() => setProductInfoActive(true)}
      >
        <div className={styles.pizza_img}>
          <img src={pizza.image} alt="loading..." />
        </div>
        <div className={styles.pizza_desc}>
          <div className={styles.pizza_title}>
            <h3 className={styles.pizza_name}>{pizza.title}</h3>
            <p>{pizza.description}</p>
          </div>
          <button
            className={styles.pizza_price}
          >{`${pizza.price} so'm`}</button>
        </div>
      </div>
      {productInfoActive && (
        <ProductInfo pizzaData={pizza} callback={setProductInfoActive} />
      )}
      {productInfoActive && <Overlay callback={setProductInfoActive} />}
    </>
  );
};

export default PizzaTemplate;
