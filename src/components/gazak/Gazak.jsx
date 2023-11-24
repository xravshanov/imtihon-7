import styles from "./Gazak.module.css";
import data from "../../dummy-files/gazak.json";
import GazakTemplate from "../gazak-product-template/GazakTemplate";


const Gazak = () => {
  return (
    <>
      <div className="container">
        <div className={styles.pizza}>
          <div className={styles.pizza_text}>Gazak</div>
          <div className={styles.pizza_wrapper}>
            {data.map((gazak) => (
              <div key={gazak.id}>
                <GazakTemplate gazak={gazak}/>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Gazak;
