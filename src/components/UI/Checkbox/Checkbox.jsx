/* eslint-disable jsx-a11y/label-has-associated-control */
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styles from "./Checkbox.module.scss";

const Checkbox = ({ vpsDatacenters, selected, setSelected }) => {
  const datacenters = useSelector((state) => state?.vps?.datacenters);
  const [checked, setChecked] = useState(false);
  const disabledCheckbox =
    vpsDatacenters.length < 2 ? styles.label_disabled : "";

  const handleCheckboxChange = (e) => {
    setChecked(e.target.checked);
    setSelected(e.target.checked ? datacenters[1] : datacenters[0]);
  };

  useEffect(() => {
    setSelected(checked ? datacenters[1] : datacenters[0]);
  }, [checked, datacenters, setSelected]);

  return (
    <label className={`${styles.label} ${disabledCheckbox}`}>
      <input
        id="checkbox"
        type="checkbox"
        checked={checked}
        className={styles.label__checkbox}
        onChange={(e) => handleCheckboxChange(e)}
        disabled={disabledCheckbox}
        value={selected}
      />
      <div className={styles.label__div} />
      <div className={styles.label__container}>
        {datacenters.map((datacenter) => (
          <p key={datacenter.id} className={styles.label__text}>
            {datacenter.location}
          </p>
        ))}
      </div>
    </label>
  );
};

Checkbox.propTypes = {
  vpsDatacenters: PropTypes.instanceOf(Array).isRequired,
  selected: PropTypes.instanceOf(Object).isRequired,
  setSelected: PropTypes.func.isRequired,
};

export default Checkbox;
