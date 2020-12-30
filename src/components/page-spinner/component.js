import React from "react";
import styles from "./style.module.scss";
import classnames from "classnames/bind";

const cx = classnames.bind(styles);

export const PageSpinner = ({ isFetching }) => {
  return (
    <div
      className={cx("wrap", {
        fadeOut: !isFetching,
      })}
      data-testid="loader"
    >
      <div className={styles.loader} />
    </div>
  );
};
