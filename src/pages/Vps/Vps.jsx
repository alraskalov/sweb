import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchVpsRequest } from "../../redux/actions/vpsActions";
import styles from "./Vps.module.scss";
import Select from "../../components/UI/Select/Select";
import VpsCard from "../../components/VpsCard/VpsCard";
import VpsList from "../../components/VpsList/VpsList";

const Vps = () => {
  const [selectedCategory, setSelectedCategory] = useState([]);
  const [filteredVps, setFilteredVps] = useState([]);
  const dispatch = useDispatch();
  const { pending, error, categories, vpsPlans } = useSelector(
    (state) => state?.vps
  );

  useEffect(() => {
    dispatch(fetchVpsRequest());
  }, [dispatch]);

  useEffect(() => {
    if (selectedCategory[0]?.id === "0") return setFilteredVps([...vpsPlans]);
    return setFilteredVps([
      ...vpsPlans.filter(
        ({ category_id }) => category_id === selectedCategory[0]?.id
      ),
    ]);
  }, [selectedCategory, vpsPlans]);

  return (
    <section className={styles.vps}>
      <div className={`${styles.vps__header} header`}>
        <div className={`${styles.header__container}`}>
          <div>
            <p className={styles.header__title}>Аккаунт</p>
          </div>
          <div>
            <h1 className={styles.header__subtitle}>Заказать VPS</h1>
          </div>
        </div>
      </div>
      {pending && !filteredVps.length && (
        <div className={styles.error}>
          <p>Идет загрузка...</p>
        </div>
      )}
      {error && !filteredVps.length && (
        <div className={styles.error}>
          <p>Произошла ошибка при загрузке</p>
        </div>
      )}
      {!pending && !error && (
        <>
          <div className={styles.vps__category}>
            <div>
              <div>
                <p>Категория</p>
              </div>
            </div>
            <Select
              data={categories || []}
              selected={selectedCategory}
              setSelected={setSelectedCategory}
            />
          </div>
          {!filteredVps.length && (
            <div className={styles.error}>
              <p>Ничего не найдено</p>
            </div>
          )}
          {filteredVps.length > 0 && (
            <VpsList>
              {filteredVps.map((vps) => (
                <VpsCard key={vps.id} vps={vps} />
              ))}
            </VpsList>
          )}
        </>
      )}
    </section>
  );
};

export default Vps;
