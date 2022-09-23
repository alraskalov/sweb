import Header from "../Header/Header";
import Vps from "../Vps/Vps";
import styles from "./Home.module.scss";

const Home = () => {
  return (
    <>
      <Header />
      <main className={styles.content}>
        <Vps />
      </main>
    </>
  );
};

export default Home;
