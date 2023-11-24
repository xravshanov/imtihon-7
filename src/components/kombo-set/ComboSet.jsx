/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import styles from "./ComboSet.module.css";
import { FiChevronRight } from "react-icons/fi";
import ComboOption from "../combo-option/ComboOption";
import Overlay from "../../utils";
import { FiChevronLeft } from "react-icons/fi";
import { useDispatch } from "react-redux";

const ComboSet = ({ title, description, price, image, count, callback }) => {
  const dispatch = useDispatch();
  const [firstPizza, setFirstPizza] = useState(null);
  const [secondPizza, setSecondPizza] = useState(null);
  const [secondComboOption, setSecondComboOption] = useState(false);
  const [comboOption, setComboOption] = useState(false);

  const comboDispatch = (data) => {
    const action = {
      type: "ADD_TO_CART",
      data: data,
    };

    dispatch(action);
  };

  return (
    <>
      <div className={styles.combot_set}>
        <div className={styles.combo_wrapper}>
          <div className={styles.set_image}>
            <img src={image} alt="loading..." />
            <div className={styles.set_text}>
              <h2>{title}</h2>
              <p>{description}</p>
            </div>
          </div>
          <div className={styles.set_menu}>
            <div>
              <div
                className={styles.set_box}
                onClick={() => setComboOption(true)}
              >
                {firstPizza ? (
                  <div className={styles.set_pizza}>
                    <img
                      src={firstPizza.image}
                      alt="loading..."
                      width={95}
                      height={95}
                    />
                    <h2>{firstPizza.title}</h2>
                  </div>
                ) : (
                  <>
                    <div className={styles.set_right}>
                      <h4>Pizza 1</h4>
                      <p>Tanlash</p>
                    </div>
                    <span>
                      <FiChevronRight />
                    </span>
                  </>
                )}
              </div>
              <div
                className={styles.set_box}
                onClick={() => {
                  setSecondComboOption(true);
                }}
              >
                {secondPizza ? (
                  <div className={styles.set_pizza}>
                    <img
                      src={secondPizza.image}
                      alt="loading..."
                      width={95}
                      height={95}
                    />
                    <h2>{secondPizza.title}</h2>
                  </div>
                ) : (
                  <>
                    <div className={styles.set_right}>
                      <h4>Pizza 2</h4>
                      <p>Tanlash</p>
                    </div>
                    <span>
                      <FiChevronRight />
                    </span>
                  </>
                )}
              </div>
            </div>
            <div className={styles.set_btn}>
              <div className={styles.set_price}>
                <p>Umumiy narx</p>
                <span>{`${price} so'm`}</span>
              </div>
              {firstPizza && secondPizza ? (
                <button
                  onClick={() => {
                    comboDispatch({ title, description, price, image, count });
                    callback(false);
                  }}
                >
                  Qo'shish
                </button>
              ) : (
                <button disabled style={{ backgroundColor: "#d4d4d4" }}>
                  Qo'shish
                </button>
              )}
            </div>
          </div>
          <button className={styles.set_close} onClick={() => callback(false)}>
            <FiChevronLeft />
          </button>
        </div>
      </div>
      {comboOption && (
        <ComboOption
          firstPizza={setFirstPizza}
          id={1}
          callback={setComboOption}
        />
      )}
      {comboOption && <Overlay callback={setComboOption} combo={comboOption} />}
      {secondComboOption && (
        <ComboOption
          secondPizza={setSecondPizza}
          id={2}
          callback={setSecondComboOption}
        />
      )}
      {secondComboOption && (
        <Overlay callback={setSecondComboOption} combo={secondComboOption} />
      )}
    </>
  );
};

export default ComboSet;
