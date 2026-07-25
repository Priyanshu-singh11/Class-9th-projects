import React, { useState, useEffect } from "react";


const Pokemon = () => {
  const [data, setData] = useState([]);

  const getPokeData = async () => {
    let poke = await fetch("https://pokeapi.co/api/v2/pokemon?limit=20");
    let pokeData = await poke.json();
    console.log(pokeData);
    setData(pokeData.results);
  };

  useEffect(() => {
    getPokeData();
  }, []);

  return (
    <div className="container">
      <h1 className="heading">Pokédex</h1>

      <div className="pokemon-grid">
        {data.map((elem) => {
          const id = elem.url.split("/")[6];
          const image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;

          return (
            <div className="card" key={elem.name}>
              <img src={image} alt={elem.name} className="pokemon-img" />

              <h2>{elem.name}</h2>

              <p>Pokémon #{id}</p>

              <button>View Details</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Pokemon;