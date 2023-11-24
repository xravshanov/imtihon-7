import styles from "./Pizza.module.css";
import data from "../../dummy-files/pizza.json";
import PizzaTemplate from "../pizza-product-template/PizzaTemplate";

const Pizza = () => {
  return (
    <>
      <div className="container">
        <div className={styles.pizza}>
          <div className={styles.pizza_text}>Pitsa</div>
          <div className={styles.pizza_wrapper}>
            {data.map((pizza) => (
              <div key={pizza.id}>
                <PizzaTemplate pizza={pizza} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Pizza;
