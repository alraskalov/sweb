import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import styles from "./Select.module.scss";

const arr = ["Все", "NVMe (KVM)", "Большого объема (HDD)", "HighCPU (TURBO)"];

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

const Select = ({ selected, setSelected }) => {
  const [isActive, setIsActive] = useState(false);
  const activeSelect = isActive ? styles.select__btn_active : "";
  const isSelected = selected ? styles.select__btn_selected : "";

  const handleClickSelectBtn = () => {
    setIsActive(!isActive);
  };

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
    setSelected(arr[0]);
  }, [setSelected]);

  return (
    <div className={styles.select}>
      <div
        onMouseDown={handleClickSelectBtn}
        role="button"
        tabIndex={0}
        className={`${styles.select__btn} ${activeSelect} ${isSelected}`}
      >
        <p className={styles.select__text}>{selected || arr[0]}</p>
        <div className={styles.select__arrow}>{arrow}</div>
      </div>
      {isActive && (
        <div className={`${styles.select__list} ${styles.list}`}>
          {arr.map((el) => (
            <div
              key={el}
              onMouseDown={() => updateSelected(el)}
              role="option"
              aria-selected
              tabIndex={0}
              className={`${styles.list__item} ${
                selected === el ? styles.list__item_selected : ""
              }`}
            >
              {el}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

Select.propTypes = {
  selected: PropTypes.string.isRequired,
  setSelected: PropTypes.func.isRequired,
};

export default Select;
