import PropTypes from "prop-types";
import { useEffect } from "react";
import styles from "./Header.module.scss";

const Header = ({ menuIsActive, onClickMenu }) => {
  useEffect(() => {
    if (!menuIsActive) return undefined;
    const closeByEscape = (e) => {
      if (e.key === "Escape") {
        onClickMenu(!menuIsActive);
      }
    };

    document.addEventListener("keydown", closeByEscape);
    return () => document.removeEventListener("keydown", closeByEscape);
  }, [menuIsActive]);

  const handleClickMenu = () => onClickMenu(!menuIsActive);

  const handleLogout = () => alert("Вы вышли из аккаунта :)");

  return (
    <header className={styles.header}>
      <div className={`${styles.header__nav} nav`}>
        <div className={styles.nav__container}>
          <div className={styles.nav__wrapper}>
            <div className={styles["nav__menu-btn"]}>
              {!menuIsActive && (
                <button type="button" className="h-4" onClick={handleClickMenu}>
                  <svg
                    width="20"
                    height="16"
                    viewBox="0 0 20 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="20" height="2" rx="1" fill="#062436" />
                    <rect y="7" width="20" height="2" rx="1" fill="#062436" />
                    <rect y="14" width="20" height="2" rx="1" fill="#062436" />
                  </svg>
                </button>
              )}
            </div>
            <div className={`${styles.nav__info} info`}>
              <div className={styles.info__balance}>
                <div>
                  <p>3467 &#8381;</p>
                </div>
                <div className={styles.info__notification}>
                  <div className="h-4.5">
                    <button type="button">
                      <svg
                        width="16"
                        height="18"
                        viewBox="0 0 16 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M14.3761 13.9528C14.2104 14.3362 13.8522 14.572 13.4785 14.5463L10.1887 14.5037L10.0991 14.899C9.98793 15.3925 9.60501 16.2545 8.29874 16.4854C8.20404 16.5012 8.10111 16.5012 8.00126 16.5092C7.90038 16.5012 7.79641 16.5012 7.70171 16.4844C6.39545 16.2545 6.01252 15.3925 5.90135 14.899L5.8118 14.5037L2.52195 14.5463C2.14829 14.572 1.79007 14.3352 1.62434 13.9528C1.44523 13.5406 1.49155 12.9391 1.998 12.521C2.72885 11.9176 3.59352 10.9683 3.79836 8.97077C4.03717 6.65416 4.88434 5.00539 6.25031 4.11759C7.3157 3.42598 8.68373 3.42598 9.74912 4.11759C11.1151 5.0044 11.9633 6.65416 12.2021 8.97176C12.4069 10.9683 13.2716 11.9176 14.0025 12.522C14.5089 12.9391 14.5552 13.5406 14.3761 13.9528ZM8.00023 1.49085C8.22978 1.49085 8.41609 1.67019 8.41609 1.89214C8.41609 2.1131 8.22978 2.29245 8.00023 2.29245C7.77068 2.29245 7.58334 2.1131 7.58334 1.89214C7.58334 1.67019 7.77068 1.49085 8.00023 1.49085ZM14.6726 11.7689C14.0519 11.2567 13.3941 10.5105 13.2263 8.87367C12.8856 5.56423 11.5237 3.45669 9.14488 2.73139C9.3312 2.49755 9.44546 2.20822 9.44546 1.89214C9.44546 1.12423 8.79696 0.5 8.00023 0.5C7.20247 0.5 6.55397 1.12423 6.55397 1.89214C6.55397 2.19633 6.65897 2.47575 6.8319 2.70563C4.45304 3.43192 3.11486 5.55928 2.77414 8.87367C2.60636 10.5105 1.94859 11.2567 1.32788 11.7689C0.428219 12.5101 0.351016 13.5921 0.674237 14.3342C1.01084 15.1121 1.78595 15.5956 2.56827 15.5351L3.44426 15.5242C3.91365 15.5183 4.89772 15.4995 4.89772 15.4995C4.89772 15.4995 5.38976 16.2446 5.65328 16.5161C6.11958 16.9947 6.75881 17.3256 7.5154 17.4594C7.66877 17.4861 7.8345 17.4911 7.99817 17.5C7.9992 17.5 8.00023 17.5 8.00126 17.5H8.00229C8.16493 17.4911 8.33065 17.4861 8.48403 17.4594C9.24164 17.3256 9.88088 16.9947 10.3472 16.5161C10.6169 16.2396 11.1861 15.4529 11.1861 15.4529C11.1861 15.4529 12.095 15.5183 12.5552 15.5242L13.4322 15.5361C14.2145 15.5956 14.9896 15.1121 15.3262 14.3342C15.6484 13.5921 15.5722 12.5111 14.6726 11.7689Z"
                          fill="#7A8185"
                        />
                      </svg>
                    </button>
                  </div>
                  <div>
                    <p>username</p>
                  </div>
                </div>
              </div>
              <div>
                <button type="button" onClick={handleLogout}>
                  Выйти
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  menuIsActive: PropTypes.bool.isRequired,
  onClickMenu: PropTypes.func.isRequired,
};

export default Header;
