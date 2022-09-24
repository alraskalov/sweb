import { useState } from "react";
import styles from "./Checkbox.module.scss";

const Checkbox = () => {
  const [checked, setChecked] = useState(false);

  const handleCheckboxChange = (e) => {
    setChecked(e.target.checked);
  };
  return (
    <label className={styles.label} htmlFor="checkbox">
      <input
        id="checkbox"
        type="checkbox"
        checked={checked || false}
        className={styles.label__checkbox}
        onChange={(e) => handleCheckboxChange(e)}
      />
      <div className={styles.label__div} />
      <div className={styles.label__container}>
        <p
          className={`${styles.label__text} ${
            !checked ? styles.label__text_checked : ""
          }`}
        >
          Санкт-Петербург
        </p>
        <p
          className={`${styles.label__text} ${
            checked ? styles.label__text_checked : ""
          }`}
        >
          Москва
        </p>
      </div>
    </label>
  );
};

export default Checkbox;
