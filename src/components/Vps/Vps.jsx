import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchVpsRequest } from "../../redux/actions/vpsActions";
import Select from "../UI/Select/Select";
import VpsCard from "../VpsCard/VpsCard";
import VpsList from "../VpsList/VpsList";

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
    <section className="flex h-[100%] min-h-[100vh] flex-col">
      <div className="flex flex-col border-b-2 border-solid border-crayola text-dark-greenish-blue">
        <div className="mb-[15px] flex flex-col gap-[11px]">
          <div>
            <p className="text-sm font-light uppercase">Аккаунт</p>
          </div>
          <div>
            <h1 className="text-xl font-bold uppercase">Заказать VPS</h1>
          </div>
        </div>
      </div>
      {pending && !filteredVps.length && (
        <div className="m-auto flex h-[100%] w-[100%] justify-center">
          <p>Идет загрузка...</p>
        </div>
      )}
      {error && !filteredVps.length && (
        <div className="m-auto flex h-[100%] w-[100%] justify-center">
          <p>Произошла ошибка при загрузке</p>
        </div>
      )}
      {!pending && !error && (
        <>
          <div className="mt-4 mb-5 box-border flex max-w-[232px] flex-col gap-3">
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
            <div className="m-auto flex h-[100%] w-[100%] justify-center">
              <p>Ничего не найдено</p>
            </div>
          )}
          {filteredVps.length && (
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
