/* eslint-disable react/jsx-filename-extension */
"use client";
import { useEffect, useState } from "react";
import { fetchPokemons, handleSearch } from "./functions";
import PokemonCard from "@/components/PokemonCard";
import SearchInput from "@/components/SearchInput";
import { layoutStyles } from "./styles";
import Loader from "@/components/Loader";
import { localKeys } from "./localKeys";

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
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Minimized api calls while searching pokemons
    const delay = setTimeout(() => {
      fetchPokemons(setPokemons, search, setLoading);
    }, 500);
    return () => clearTimeout(delay);
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

      {/* Loader */}
      {loading && <Loader />}

      {/* Pokemon Cards Container */}
      {!loading && pokemons?.length > 0 ? (
        <main className={layoutStyles.main}>
          <div className={layoutStyles.cardGrid}>
            {pokemons?.map((pokemon) => {
              return <PokemonCard key={pokemon.name} pokemon={pokemon} />;
            })}
          </div>
        </main>
      ) : (
        !loading &&
        pokemons?.length === 0 && <h2>{localKeys.noPokemonFound}</h2>
      )}
    </div>
  );
}
