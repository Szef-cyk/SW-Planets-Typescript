import React, { useState, useEffect, FC } from "react";
import { Link } from "react-router-dom";
import { Planet } from "../context";
const SinglePlanet: FC<Planet> = ({
  name,
  climate,
  terrain,
  orbital_period,
  id,
}): JSX.Element => { //O to też zapytaj: FC + .Element
  const [image, setImage] = useState();

  const fetchImage = async () => {
    try {
      const response = await import(`../images/${id - 1}.webp`);
      setImage(response.default);
    } catch (e) {
      console.error("Image doesn't exists");
    }
  };

  useEffect(() => {
    fetchImage();
  }, []);
  return (
    <div className='single-planet-card' key={id}>
      <header>{name}</header>
      <div className='img-container'>
        <img src={image} alt={name} />
      </div>
      <div className='planet-info'>
        <p>Climate: {climate}</p>
        <p>Terrain: {terrain}</p>
        <p>Orbital Period: {orbital_period}</p>
        <Link to={`/planetcard/${id}`} className='btn'>
          details
        </Link>
      </div>
    </div>
  );
};

export default SinglePlanet;
