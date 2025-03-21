/* eslint-disable react/jsx-filename-extension */
"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { fetchPokemons, handleSearch } from "./functions";
import PokemonCard from "@/components/PokemonCard";

export default function Home() {
  const [search, setSearch] = useState("");
  const [pokemons, setPokemons] = useState(null);

  useEffect(() => {
    fetchPokemons(setPokemons, search);
  }, [search]);

  return (
    <div className="grid grid-rows-[auto_1fr_20px] items-start justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      {/* Search Pokemon Input Field */}
      <header className="w-full flex justify-center">
        <input
          id="search"
          type="search"
          name="search"
          className="border border-gray-400 p-2 rounded-md text-black placeholder-gray-500 bg-white w-full max-w-md"
          value={search}
          onChange={(e) => handleSearch(e, setSearch)}
          aria-label="Search Pokemon"
          placeholder="Search Pokemon by name or id"
          autoComplete="off"
        />
      </header>
      {/* Pokemon Cards Container */}
      <main className="flex flex-col gap-6 items-center justify-center p-8">
        <div className="grid grid-cols-1 min-[420px]:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {pokemons?.map((pokemon) => {
            return <PokemonCard pokemon={pokemon} />;
          })}
        </div>
      </main>
    </div>
  );
}
