import React from "react";
import { pokemonCardStyles } from "@/app/styles";
import Image from "next/image";

/**
 * PokemonCard Component
 *
 * Renders a card displaying a Pokémon's image and name.
 *
 * @component
 * @param {Object} props - Component props
 * @param {Object} props.pokemon - Pokémon data
 * @param {string} props.pokemon.name - Pokémon's name
 * @param {string} props.pokemon.image - Pokémon's image URL
 * @returns {JSX.Element} A styled Pokémon card
 */
const PokemonCard = ({ pokemon }) => {
  return (
    <div className={pokemonCardStyles.container}>
      <Image
        src={pokemon.image}
        alt={pokemon.name}
        className={pokemonCardStyles.image}
        width={100}
        height={100}
      />
      <p className={pokemonCardStyles.name}>{pokemon.name}</p>
      <div className={pokemonCardStyles.typesContainer}>
        <p className={pokemonCardStyles.typeLabel}>Type: </p>
        {pokemon.types.map((type, index) => (
          <span key={type} className={pokemonCardStyles.typeBadge}>
            {type}
          </span>
        ))}
      </div>
    </div>
  );
};

export default PokemonCard;
