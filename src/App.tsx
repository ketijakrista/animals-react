import React, { useEffect, useState } from "react";
import "./App.css";
import { Animal, animalData } from "./data/animal-data";
import { animalTypes } from "./data/animal-types";
import FilterOption from "./components/filter-option/filter-option";

function App() {
  const [allAnimals, setAllAnimals] = useState<Animal[]>([]); //Visu dzīvnieku masīvs, kuru nemaina
  const [filteredAnimals, setFilteredAnimals] = useState<Animal[]>([]); //Izfiltrēto dzīvnieku masīvs, šo mainam
  const [allFilterOptions, setAllFilterOptions] = useState<string[]>([]); //Visu filtra opciju masīvs, kuru nemaina
  const [activeFilters, setActiveFilters] = useState<string[]>([]); //Aktīvo filtru masīvs, mainam

  useEffect(() => {
    setAllAnimals([...animalData]);
    setAllFilterOptions([...animalTypes]);
    setActiveFilters([...animalTypes]);
  }, []);

  useEffect(() => {
    const newFilteredAnimals = [...allAnimals].filter((item) =>
      activeFilters.includes(item.type)
    );
    setFilteredAnimals(newFilteredAnimals);
  }, [activeFilters]);

  const updateActiveFilters = (animalType: string) => {
    const filterActive = activeFilters.includes(animalType);

    if (filterActive) {
      const newActiveFilters = [...activeFilters].filter(
        (item) => item !== animalType
      );
      setActiveFilters(newActiveFilters);
    } else {
      const newActiveFilters = [...activeFilters, animalType];
      setActiveFilters(newActiveFilters);
    }
  };

  return (
    <>
      <h1>Animal filter</h1>
      <div className="filter-option-container">
        {allFilterOptions.map((item, i) => {
          return (
            <FilterOption
              key={i}
              animalType={item}
              updateActiveFilters={(animalType) =>
                updateActiveFilters(animalType)
              }
            />
          );
        })}
      </div>

      <div className="animal-container">
        {filteredAnimals.map((item) => {
          return <div key={item.id}>{item.name}</div>;
        })}
      </div>
    </>
  );
}

export default App;
