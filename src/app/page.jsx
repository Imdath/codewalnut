/* eslint-disable react/jsx-filename-extension */
"use client";
import { useEffect, useState } from "react";
import { fetchPokemons, handleSearch } from "./functions";
import PokemonCard from "@/components/PokemonCard";
import SearchInput from "@/components/SearchInput";
import { layoutStyles } from "./styles";

/**
 * Home Component
 *
 * Displays a list of Pokemon cards and a search input to filter them.
 * Fetches Pokemon data dynamically based on user input.
 *
 * @component
 * @returns {JSX.Element} The main application UI with search and Pokemon grid.
 */
export default function Home() {
  const [search, setSearch] = useState("");
  const [pokemons, setPokemons] = useState(null);

  useEffect(() => {
    fetchPokemons(setPokemons, search);
  }, [search]);

  return (
    <div className={layoutStyles.container}>
      {/* Search Pokemon Input Field */}
      <header className={layoutStyles.header}>
        <SearchInput
          value={search}
          onChange={(e) => handleSearch(e, setSearch)}
        />
      </header>

      {/* Pokemon Cards Container */}
      <main className={layoutStyles.main}>
        <div className={layoutStyles.cardGrid}>
          {pokemons?.map((pokemon) => {
            return <PokemonCard key={pokemon.name} pokemon={pokemon} />;
          })}
        </div>
      </main>
    </div>
  );
}
