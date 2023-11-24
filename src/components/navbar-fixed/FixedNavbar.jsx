// eslint-disable-next-line no-unused-vars
import React, { useRef, useState } from "react";
import styles from "./FixedNavbar.module.css";
import logo from "../../assets/images/icon.webp";
import Cart from "../cart/Cart";
import { useSelector } from "react-redux";
import Overlay from "../../utils/index";

const Catalog = () => {
  const selector = useSelector((state) => state);
  const logoVisible = useRef();
  const fixedCatalog = useRef();
  const [cartActive, setCartActive] = useState(false);
  window.addEventListener("scroll", function () {
    fixedCatalog?.current?.classList.toggle(
      `${styles.sticky}`,
      this.window.scrollY > 230
    );
  });

  if (cartActive) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }



  return (
    <>
      <div className={styles.catalog} ref={fixedCatalog}>
        <div className="container">
          <div className={styles.catalog_wrapper}>
            <div className={styles.catalog_logo} ref={logoVisible}>
              <img src={logo} alt="loading..." />
              <button className={styles.nav_btn}>Kombo</button>
              <button className={styles.nav_btn}>Pitsa</button>
              <button className={styles.nav_btn}>Gazaklar</button>
              <button className={styles.nav_btn}>Ichimliklar</button>
              <button className={styles.nav_btn}>Salatlar</button>
              <button className={styles.nav_btn}>Desertlar</button>
              <button className={styles.nav_btn}>Souslar</button>
            </div>
            <div className={styles.navbarProduct}>
              <div className={styles.navlinks}>
              </div>
            </div>
            <div className={styles.fixed_cart}>
              <div
                className={styles.cart_box}
                onClick={() => setCartActive(true)}
              >
                Savatchada
                <span> | {selector?.cart?.cart?.length}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {cartActive && <Cart callback={setCartActive} />}
      {cartActive && <Overlay callback={setCartActive} />}
    </>
  );
};

export default Catalog;
