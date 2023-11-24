/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import styles from "./Cart.module.css";
import image from "../../assets/images/empty-cart-icon.svg";
import { useDispatch, useSelector } from "react-redux";
import { CgMathMinus, CgMathPlus, CgClose } from "react-icons/cg";
import Confirmation from "../confirmation/Confirmation";
import Overlay from "../../utils";

const Cart = ({ callback }) => {
  const selector = useSelector((state) => state);
  const dispatch = useDispatch();
  const [confirmationActive, setConfirmationActive] = useState(false);

  return (
    <>
      <div className={styles.cart}>
        <h3 className={styles.cart_text}>Savatcha</h3>
        <div className={styles.cart_close}>
          <span className={styles.close_btn} onClick={() => callback(false)}>
            <CgClose />
          </span>
        </div>
        {selector?.cart?.cart.length > 0 ? (
          <div className={styles.cart_box}>
            {selector?.cart?.cart.map((pizza) => (
              <div key={pizza?.id} className={styles.cart_pizza}>
                <div className={styles.pizza_left}>
                  <img src={pizza?.image} alt="loading..." />
                  <div className={styles.pizza_text}>
                    <h2>{pizza?.title}</h2>
                  </div>
                </div>
                <div className={styles.pizza_right}>
                  <div className={styles.product__count}>
                    <button
                      className={styles.product__buttons}
                      onClick={() => {
                        dispatch({
                          type: "DECREMENT",
                          data: {
                            id: pizza.id,
                            count: pizza.count,
                          },
                        });
                      }}
                    >
                      <CgMathMinus />
                    </button>
                    <span className={styles.product__number}>
                      {pizza?.count}
                    </span>
                    <button
                      className={styles.product__buttons}
                      onClick={() => {
                        dispatch({
                          type: "INCREMENT",
                          data: pizza,
                        });
                      }}
                    >
                      <CgMathPlus />
                    </button>
                  </div>
                </div>
              </div>
            ))}
            <div className={styles.cart_order}>
              <button
                className={styles.order_btn}
                onClick={() => setConfirmationActive(true)}
              >
                Buyurtma qilish
              </button>
            </div>
          </div>
        ) : (
          <div className={styles.cart_empty}>
            <img src={image} alt="loading..." />
            <h2>Hozircha sizning savatchangiz bo'sh 😕</h2>
            <button>Menyuni kurish</button>
          </div>
        )}
      </div>
      {confirmationActive && <Confirmation />}
      {confirmationActive && <Overlay confirmation={confirmationActive} />}
    </>
  );
};

export default Cart;
