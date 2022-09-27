import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Vps from "../../pages/Vps/Vps";
import styles from "./Home.module.scss";

const Home = () => {
  return (
    <>
      <Header />
      <main className={styles.content}>
        <Vps />
      </main>
      <Footer />
    </>
  );
};

export default Home;
