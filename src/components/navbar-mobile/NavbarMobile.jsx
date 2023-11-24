/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from "react";
import styles from "./NavbarMobile.module.css";
import { FiChevronDown, FiPhoneCall } from "react-icons/fi";
import { CgClose } from "react-icons/cg";

const NavbarMobile = ({ callback, headerCity }) => {
  const [cityListActive, setCityListActive] = useState(false);
  const [cityName, setCityName] = useState("" || "Toshkent");
  const cities = [
    "Qo'qon",
    "Samarqand",
    "Buxoro",
    "Qarshi",
    "Farg'ona",
    "Sirdaryo",
    "Namangan",
  ];

  return (
    <div className={styles.navbar}>
      <div className={styles.navbar_wrapper}>
        <div
          className={styles.navbar_region}
          onClick={() => setCityListActive(!cityListActive)}
        >
          <h2>{cityName}</h2>
          <FiChevronDown />
        </div>
        <ul
          className={styles.navbar_list}
          style={cityListActive ? { display: "flex" } : { display: "none" }}
        >
          {cities.map((city, index) => (
            <li
              key={index}
              className={styles.navbar_item}
              onClick={() => {
                setCityListActive(false);
                setCityName(city);
                headerCity(city);
              }}
            >
              {city}
            </li>
          ))}
        </ul>
        <div className={styles.navbar_call}>
          <a href="tel: +998 94 124 55 59">
            <FiPhoneCall className={styles.call_text} />
            <span className={styles.call_text}>Bizga qo'ng'iroq qilish</span>
          </a>
        </div>
        <button className={styles.navbar_close} onClick={() => callback(false)}>
          <CgClose />
        </button>
      </div>
    </div>
  );
};

export default NavbarMobile;
