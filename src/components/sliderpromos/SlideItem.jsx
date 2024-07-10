// import React from "react";
import styles from "../header/header.module.css";
const SlideItem = ({ children, ...params }) => {
  // export default () => (
  return (
    <div className={styles.swiperslide} {...params}>
      <span>{children}</span>
    </div>
  );
};

export default SlideItem;
