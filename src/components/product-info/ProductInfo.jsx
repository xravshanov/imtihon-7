/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */

import styles from "./ProductInfo.module.css";
import { FiChevronLeft } from "react-icons/fi";
import { CgClose } from "react-icons/cg";
import { useDispatch } from "react-redux";

const ProductInfo = ({ pizzaData, callback }) => {
  const dispatch = useDispatch();

  return (
    <div className={styles.productInfo}>
      <button className={styles.info_close} onClick={() => callback(false)}>
        <FiChevronLeft />
      </button>
      <div className={styles.info_image}>
        <img src={pizzaData?.image} alt="" />
      </div>
      <div className={styles.info_text}>
        <div className={styles.info_wrapper}>
          <div className={styles.info_title}>{pizzaData?.title}</div>
          <p className={styles.info_desc}>{pizzaData?.description}</p>
        </div>
        <div className={styles.info_btn}>
          <span>{`${pizzaData?.price} so'm`}</span>
          <button
            onClick={() =>
              dispatch({
                type: "ADD_TO_CART",
                data: pizzaData,
              })
            }
            // eslint-disable-next-line react/no-unescaped-entities
          >
            Savatga qo'shish
          </button>
        </div>
        <div className={styles.close_btn} onClick={() => callback(false)}>
          <CgClose />
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
