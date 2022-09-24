import VpsCard from "../VpsCard/VpsCard";
import styles from "./VpsList.module.scss";

const VpsList = () => {
  return (
    <div className={styles.list}>
      <VpsCard />
      <VpsCard />
      <VpsCard />
      <VpsCard />
      <VpsCard />
      <VpsCard />
      <VpsCard />
    </div>
  );
};

export default VpsList;
