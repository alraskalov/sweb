import PropTypes from "prop-types";
import logo from "../../assets/logo.svg";
import { menuItem } from "../../utils/data";
import styles from "./SideMenu.module.scss";

const SideMenu = ({ menuIsActive, onClickMenu }) => {
  const handleClickMenu = () => onClickMenu(!menuIsActive);

  return (
    <nav
      className={`${styles.container} ${
        menuIsActive ? styles.container_active : ""
      }`}
    >
      <div className={styles.menu}>
        <div className={styles.menu__logo}>
          <div>
            <img src={logo} alt="Логотип SpaceWeb" />
          </div>
          <div className={styles.menu__btn}>
            <button type="button" className="h-4" onClick={handleClickMenu}>
              <svg
                width="20"
                height="16"
                viewBox="0 0 20 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="20" height="2" rx="1" fill="#fff" />
                <rect y="7" width="20" height="2" rx="1" fill="#fff" />
                <rect y="14" width="20" height="2" rx="1" fill="#fff" />
              </svg>
            </button>
          </div>
        </div>
        <ul className={styles.menu__list}>
          {menuItem.map((el) => (
            <li
              key={el.id}
              className={`${styles.menu__item} ${
                el.id === "vps" ? styles.menu__item_current : ""
              } item`}
            >
              <div className={styles.item__container}>
                <div className={styles.item__icon}>
                  <img src={el.img} alt={el.text} />
                </div>
                <div>
                  <p className={styles.item__text}>{el.text}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

SideMenu.propTypes = {
  menuIsActive: PropTypes.bool.isRequired,
  onClickMenu: PropTypes.func.isRequired,
};

export default SideMenu;
