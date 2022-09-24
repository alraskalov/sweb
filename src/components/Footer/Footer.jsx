import styles from "./Footer.module.scss";
import play from "../../assets/play.svg";
import ios from "../../assets/ios.svg";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__container}>
        <div>
          <p>
            &#169; 2001-{new Date().getFullYear()}
            <a
              className={styles.footer__link}
              href="https://sweb.ru/"
              target="_blank"
              rel="noreferrer"
            >
              &nbsp; «СпейсВэб»
            </a>
            <br />
            Все права защищены. <br />
            <a
              className={styles.footer__link}
              href="https://sweb.ru/documents/#%D1%81ertificates"
              target="_blank"
              rel="noreferrer"
            >
              Лицензия №163230
            </a>
          </p>
        </div>
        <div className={`${styles.footer__market} market`}>
          <div>
            <p>Скачать приложение</p>
          </div>
          <div className={styles.market__links}>
            <div>
              <a
                href="https://play.google.com/store/apps/details?id=ru.sweb.app&hl=ru&gl=US"
                target="_blank"
                rel="noreferrer"
              >
                <img src={play} alt="Google Play" />
              </a>
            </div>
            <div>
              <a
                href="https://apps.apple.com/ru/app/spaceweb-%D1%85%D0%BE%D1%81%D1%82%D0%B8%D0%BD%D0%B3/id1583597572"
                target="_blank"
                rel="noreferrer"
              >
                <img src={ios} alt="Apple Store" />
              </a>
            </div>
          </div>
        </div>
        <div>
          <div>
            <p>
              <a className={styles.footer__link} href="tel:+7-812-334-12-22">
                +7 (812) 334-12-22
              </a>
              &nbsp;(в Санкт-Петербурге)
            </p>
            <p>
              <a className={styles.footer__link} href="tel:+7-495-663-16-12">
                +7 (495) 663-16-12
              </a>
              &nbsp;(в Москве)
            </p>
            <p>
              <a className={styles.footer__link} href="tel:+7-800-100-16-15">
                +7 (800) 100-16-15
              </a>
              &nbsp;(бесплатно по России)
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
