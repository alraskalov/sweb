import PropTypes from "prop-types";
import styles from "./VpsList.module.scss";

const VpsList = ({ children }) => {
  return <div className={styles.list}>{children}</div>;
};

VpsList.propTypes = {
  children: PropTypes.node.isRequired,
};

export default VpsList;
