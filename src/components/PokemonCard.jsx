import Image from "next/image";
import React from "react";

const PokemonCard = ({ pokemon }) => {
  return (
    <div
      key={pokemon.name}
      className="flex flex-col items-center bg-white p-4 rounded-lg shadow-md border border-gray-300"
    >
      <Image
        src={pokemon.image}
        alt={pokemon.name}
        className="w-24 h-24 object-contain"
        width={100}
        height={100}
      />
      <p className="mt-2 text-lg font-medium capitalize text-gray-900">
        {pokemon.name}
      </p>
    </div>
  );
};

export default PokemonCard;
