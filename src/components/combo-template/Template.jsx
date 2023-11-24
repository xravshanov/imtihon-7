/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import ComboSet from "../kombo-set/ComboSet";
import styles from "./Template.module.css";

const Template = ({ title, description, price, image, count }) => {
  const [komboSetActive, setKomboSetActive] = useState(false);

  if (komboSetActive) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }

  return (
    <>
      <div className={styles.product_box} onClick={() => setKomboSetActive(true)}>
        <img src={image} alt="" />
        <h3 className={styles.product_title}>{title}</h3>
        <p className={styles.product_desc}>{description}</p>
        <button className={styles.product_price}>{`${price} so'm`}</button>
      </div>
      {komboSetActive && (
        <ComboSet
          title={title}
          description={description}
          price={price}
          image={image}
          count={count}
          callback={setKomboSetActive}
        />
      )}
    </>
  );
};

export default Template;
