import { useState } from "react";
import styles from "./VpsCard.module.scss";
import nvme from "../../assets/nvme.svg";
import Select from "../UI/Select/Select";
import Checkbox from "../UI/Checkbox/Checkbox";
import Button from "../UI/Button/Button";

const VpsCard = () => {
  const [selected, setSelected] = useState("");

  return (
    <div className={styles.card}>
      <div className={styles.card__container}>
        <div className={styles.card__header}>
          <div>
            <img src={nvme} alt="nvme" />
          </div>
          <div>
            <p className={styles.card__title}>KVM-160</p>
          </div>
        </div>
        <div className={styles.card__price}>
          <p>349 &#8381;/мес.</p>
        </div>
        <div className={`${styles.card__specifications} specifications`}>
          <div className={styles.specifications__item}>
            <p className={styles.specifications__text}>CPU</p>
            <span className={styles.specifications__span}>2 x 2,8 ГГц</span>
          </div>
          <div className={styles.specifications__item}>
            <p className={styles.specifications__text}>RAM</p>
            <span className={styles.specifications__span}>1024 МБ</span>
          </div>
          <div className={styles.specifications__item}>
            <p className={styles.specifications__text}>DISK</p>
            <span className={styles.specifications__span}>10 ГБ NVMe</span>
          </div>
        </div>
        <form className={`${styles.card__form} form`}>
          <div className={`${styles.form__element} element`}>
            <div className={styles.element__text}>
              <p>Дистрибутив</p>
            </div>
            <Select selected={selected} setSelected={setSelected} />
          </div>
          <div className={styles.form__element}>
            <div className={styles.element__text}>
              <p>Программное обеспечение</p>
            </div>
            <Select selected={selected} setSelected={setSelected} />
          </div>
          <div className={styles.form__element}>
            <div className={styles.element__text}>
              <p>Дата-центр</p>
            </div>
            <Checkbox />
          </div>
          <div className={`${styles.card__bonus} bonus`}>
            <svg
              width="16"
              height="16"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="5.5"
                y="0.5"
                width="1"
                height="11"
                rx="0.5"
                fill="#3DBDF6"
              />
              <rect
                x="11.5"
                y="5.5"
                width="1"
                height="11"
                rx="0.5"
                transform="rotate(90 11.5 5.5)"
                fill="#3DBDF6"
              />
            </svg>
            <div className={styles.bonus__text}>
              <p>2 IP-адреса (lPv4 + lPv6)</p>
              <p>3 резервных копии</p>
            </div>
          </div>
          <div className={styles.card__button}>
            <Button text="Заказать" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default VpsCard;
