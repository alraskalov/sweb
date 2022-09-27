import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import styles from "./Select.module.scss";

const arrow = (
  <svg
    width="14"
    height="8"
    viewBox="0 0 14 8"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="0.63604"
      y="1.59814"
      width="1"
      height="9"
      rx="0.5"
      transform="rotate(-45 0.63604 1.59814)"
      fill="#AFBABF"
    />
    <rect
      x="12.6569"
      y="0.891113"
      width="1"
      height="9"
      rx="0.5"
      transform="rotate(45 12.6569 0.891113)"
      fill="#AFBABF"
    />
  </svg>
);

const Select = ({ data, selected, setSelected }) => {
  const [isActive, setIsActive] = useState(false);
  const activeSelect = isActive ? styles.select__btn_active : "";
  const isSelected = selected ? styles.select__btn_selected : "";

  const toggling = () => setIsActive(!isActive);

  const updateSelected = (option) => {
    setSelected(option);
    setIsActive(!isActive);
  };

  useEffect(() => {
    if (!isActive) return undefined;
    const closeByEscape = (e) => {
      if (e.key === "Escape") {
        setIsActive(!isActive);
      }
    };

    document.addEventListener("keydown", closeByEscape);
    return () => document.removeEventListener("keydown", closeByEscape);
  }, [isActive]);

  useEffect(() => {
    for (let i = 0; i < data.length; i += 1) {
      if (data[i].id === selected[0]?.id) {
        return setSelected([data[i]]);
      }
    }
    return setSelected([data[0]]);
  }, [data, setSelected]);

  return (
    <div className={styles.select}>
      <div
        onMouseDown={toggling}
        role="button"
        tabIndex={0}
        className={`${styles.select__btn} ${activeSelect} ${isSelected}`}
      >
        <p className={styles.select__text}>{selected[0]?.description}</p>
        <div className={styles.select__arrow}>{arrow}</div>
      </div>
      <div
        className={`${styles.select__list} ${
          isActive ? styles.select__list_active : ""
        } ${styles.list}`}
      >
        {data.map((el) => (
          <div
            key={el.id}
            onMouseDown={() => updateSelected([el])}
            role="option"
            aria-selected
            tabIndex={0}
            className={`${styles.list__item} ${
              selected[0]?.id === el.id ? styles.list__item_selected : ""
            }`}
          >
            {el.description}
          </div>
        ))}
      </div>
    </div>
  );
};

Select.propTypes = {
  data: PropTypes.instanceOf(Array).isRequired,
  selected: PropTypes.instanceOf(Object).isRequired,
  setSelected: PropTypes.func.isRequired,
};

export default Select;
