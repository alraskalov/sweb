import { useState } from "react";
import Select from "../UI/Select/Select";
import VpsList from "../VpsList/VpsList";

const Vps = () => {
  const [selectedCategory, setSelectedCategory] = useState("");

  return (
    <section>
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
      <div className="mt-4 mb-5 box-border flex max-w-[232px] flex-col gap-3">
        <div>
          <div>
            <p>Категория</p>
          </div>
        </div>
        <Select selected={selectedCategory} setSelected={setSelectedCategory} />
      </div>
      <VpsList />
    </section>
  );
};

export default Vps;
