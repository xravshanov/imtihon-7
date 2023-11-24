import styles from "./Kombo.module.css";
import data from "../../dummy-files/kombo.json";
import Template from "../combo-template/Template";

const Kombo = () => {
  return (
    <div className="container">
      <div className={styles.kombo}>
        <h2 className={styles.kombo_category}>Kombo</h2>
        <div className={styles.kombo_wrapper}>
          {data.map(({ title, description, image, price, count }, index) => (
            <Template
              key={index}
              title={title}
              description={description}
              image={image}
              price={price}
              count={count}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Kombo;
