import React, { FC, useState } from "react";
import { animalTypes } from "../../data/animal-types";

type Props = {
  animalType: string;
  updateActiveFilters: (animalType: string) => void;
};

const FilterOption: FC<Props> = ({ animalType, updateActiveFilters }) => {
  const [selected, setSelected] = useState<boolean>(true);

  const toggleCheckbox = () => {
    setSelected(!selected);
    updateActiveFilters(animalType)
  };

  return (
    <div>
      <span>{animalType}</span>
      <input
        checked={selected}
        type="checkbox"
        onChange={() => toggleCheckbox()}
      ></input>
    </div>
  );
};

export default FilterOption;
