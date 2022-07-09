import React from "react";
import { useEffect } from "react";
import { useGlobalContext } from "../context";
import SinglePlanet from "./singlePlanet";

const PlanetsList = () => {
  const { data, amountOfCards, setNewData, newData } = useGlobalContext();
  interface Planet {
    name: string;
    climate: string;
    terrain: string;
    orbital_period: string;
    id: number;
  }
  const randomizeShufflomize = () => {
    const d = data
      .sort(() => (Math.random() > 0.5 ? 1 : -1))
      .slice(0, amountOfCards);
    setNewData(d);
    console.log('randomize');
  };

  useEffect(() => {
    if (!data.length || newData.length) return;
    randomizeShufflomize();
    console.log('useEffect');
  }, [amountOfCards]);

  return (
    <section className='planets-section'>
      <div className='planets-container'>
        {newData.map((planet: Planet) => {
          return <SinglePlanet key={planet.id} {...planet} />;
        })}
      </div>
    </section>
  );
};

export default PlanetsList;
