import React from "react";

export default function Pokemon({ pokemon }) {
  return (
    <div className="pokemon">
      <div className="pokemon__name">
        <p>{pokemon.name}</p>
      </div>
      <div className="pokemon__meta">
        <span>{pokemon.maxHP}</span>
        <span>{pokemon.maxCP}</span>
      </div>
      <div className="pokemon__img">
        <img src={pokemon.image} alt={pokemon.id} />
      </div>
      <div className="pokemon__attacks">
        {pokemon.attacks.special.slice(0, 3).map((a) => (
          <span key={`${a.name}_${a.damage}`}>{a.name}</span>
        ))}
      </div>
    </div>
  );
}
