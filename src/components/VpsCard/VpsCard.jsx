import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import styles from "./VpsCard.module.scss";
import nvme from "../../assets/nvme.svg";
import hdd from "../../assets/hdd.svg";
import turbo from "../../assets/turbo.svg";
import Select from "../UI/Select/Select";
import Checkbox from "../UI/Checkbox/Checkbox";
import Button from "../UI/Button/Button";
import { sortArr } from "../../utils/utils";

const VpsCard = ({ vps }) => {
  const {
    cpu_cores,
    name,
    price_per_month,
    ram,
    volume_disk,
    disk_type,
    datacenters,
    category,
  } = vps;
  const [selectedOs, setSelectedOs] = useState([]);
  const [selectedPanel, setSelectedPanel] = useState([]);
  const [selectedDatacenters, setSelectedDatacenters] = useState({});
  const [panel, setPanel] = useState([]);
  const { selectOs, selectPanel } = useSelector((state) => state?.vps);

  const setImageCard = () => {
    if (category === "nvme") {
      return nvme;
    }
    if (category === "turbo") {
      return turbo;
    }
    return hdd;
  };

  const setGhzCard = () => {
    if (category === "nvme") {
      return "2,8";
    }
    if (category === "turbo") {
      return "5";
    }
    return "2,1";
  };

  const getPanelList = async () => {
    if (selectedOs[0] === undefined) return undefined;
    const panelType = await selectedOs[0]?.panel_type;
    const arr = [];
    for (let i = 0; i < panelType.length; i += 1) {
      for (let j = 0; j < selectPanel.length; j += 1) {
        if (selectPanel[j].name.indexOf(panelType[i]) !== -1) {
          arr.push(selectPanel[j]);
        }
      }
    }
    return setPanel([...arr.sort((prev, next) => sortArr(prev, next))]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // eslint-disable-next-line no-alert
    alert(
      `Вы заказали:\n${vps.name}\nДистрибутив: ${selectedOs[0].description}\nПрограммное обеспечение: ${selectedPanel[0].description}\nДата-центр: ${selectedDatacenters.location}`
    );
  };

  useEffect(() => {
    getPanelList();
  }, [selectedOs]);

  return (
    <div
      className={`${styles.card} ${category === "hdd" ? styles.card_hdd : ""} ${
        category === "turbo" ? styles.card_turbo : ""
      }`}
    >
      <div className={styles.card__container}>
        <div className={styles.card__header}>
          <div>
            <img src={setImageCard()} alt={category} />
          </div>
          <div>
            <p className={styles.card__title}>{name}</p>
          </div>
        </div>
        <div className={styles.card__price}>
          <p>{price_per_month} &#8381;/мес.</p>
        </div>
        <div className={`${styles.card__specifications} specifications`}>
          <div className={styles.specifications__item}>
            <p className={styles.specifications__text}>CPU</p>
            <span className={styles.specifications__span}>
              {cpu_cores} x {setGhzCard()} ГГц
            </span>
          </div>
          <div className={styles.specifications__item}>
            <p className={styles.specifications__text}>RAM</p>
            <span className={styles.specifications__span}>{ram} МБ</span>
          </div>
          <div className={styles.specifications__item}>
            <p className={styles.specifications__text}>DISK</p>
            <span className={styles.specifications__span}>
              {volume_disk} {disk_type}
            </span>
          </div>
        </div>
        <form onSubmit={handleSubmit} className={`${styles.card__form} form`}>
          <div className={`${styles.form__element} element`}>
            <div className={styles.element__text}>
              <p>Дистрибутив</p>
            </div>
            <Select
              data={selectOs}
              selected={selectedOs}
              setSelected={setSelectedOs}
            />
          </div>
          <div className={styles.form__element}>
            <div className={styles.element__text}>
              <p>Программное обеспечение</p>
            </div>
            <Select
              data={panel}
              selected={selectedPanel}
              setSelected={setSelectedPanel}
            />
          </div>
          <div className={styles.form__element}>
            <div className={styles.element__text}>
              <p>Дата-центр</p>
            </div>
            <Checkbox
              vpsDatacenters={datacenters}
              selected={selectedDatacenters}
              setSelected={setSelectedDatacenters}
            />
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
              {category !== "hdd" && <p>3 резервных копии</p>}
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

VpsCard.propTypes = {
  vps: PropTypes.instanceOf(Object).isRequired,
};

export default VpsCard;
