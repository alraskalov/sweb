import { useState } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Vps from "../../pages/Vps/Vps";
import styles from "./Home.module.scss";
import SideMenu from "../SideMenu/SideMenu";

const Home = () => {
  const [menuIsActive, setMenuIsActive] = useState(false);

  return (
    <>
      <div className="flex flex-row">
        <SideMenu menuIsActive={menuIsActive} onClickMenu={setMenuIsActive} />
        <div className="mx-0 flex w-full flex-1 flex-col sm:mx-5">
          <Header menuIsActive={menuIsActive} onClickMenu={setMenuIsActive} />
          <main className={styles.content}>
            <Vps />
          </main>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
