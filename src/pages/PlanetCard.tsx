import React from "react";
import Navbar from "../components/navbar";
import Loading from "./Loading";
import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";

const PlanetCard = () => {
  const { id } = useParams();
  type Planet = {
    name: string;
    rotation_period: string;
    diameter: string;
    climate: string;
    gravity: string;
    terrain: string;
    surface_water: string;
    population: string;
  };
  const [planet, setPlanet] = useState<Planet>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log("render");
    async function getPlanet() {
      setLoading(true);
      try {
        const response = await fetch(`https://swapi.dev/api/planets/${id}/`);
        const data: Planet = await response.json();
        const {
          name,
          rotation_period,
          diameter,
          climate,
          gravity,
          terrain,
          surface_water,
          population,
        } = data;

        let newPlanet: Planet = {
          name,
          rotation_period,
          diameter,
          climate,
          gravity,
          terrain,
          surface_water,
          population,
        };

        setPlanet(newPlanet);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
    getPlanet();
  }, []);

  if (!planet || loading) return <Loading />;

  // const {
  //   name,
  //   rotation_period,
  //   diameter,
  //   climate,
  //   gravity,
  //   terrain,
  //   surface_water,
  //   population,
  // } = planet; //WRÓĆ DO TEGO

  return (
    <>
      <Navbar />
      <h2>planet you chose</h2>
      {planet.name}
      <Link to='/'>
        <button className='btn'>Go back</button>
      </Link>
    </>
  );
};

export default PlanetCard;
