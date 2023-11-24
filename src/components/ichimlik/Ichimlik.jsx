import styles from "./Ichimlik.module.css";
import data from "../../dummy-files/ichimlik.json";
import IchimlikTemplate from "../ichimlik-product-template/IchimlikTemplate";
// import PizzaTemplate from "../pizza-product-template/PizzaTemplate";

const Ichimlik = () => {
  return (
    <>
      <div className="container">
        <div className={styles.pizza}>
          <div className={styles.pizza_text}>Ichimlik</div>
          <div className={styles.pizza_wrapper}>
            {data.map((ichimlik) => (
              <div key={ichimlik.id}>
                <IchimlikTemplate ichimlik={ichimlik}/>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Ichimlik;
