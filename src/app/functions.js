// Handling search of pokemon
export const handleSearch = (e, setSearch) => {
  setSearch(e.target.value);
};

// Fetching pokemon data and transforming to an array of objects each with name and image of the pokemon
export const fetchPokemons = async (setPokemons, searchText) => {
  try {
    const result = await fetch(
      "https://pokeapi.co/api/v2/pokemon?limit=50&offset=0",
    );
    const data = await result.json();

    const pokemonDetails = await Promise.all(
      data.results.map(async (pokemon) => {
        const res = await fetch(pokemon.url);
        const details = await res.json();
        return {
          name: pokemon.name,
          image: details.sprites.front_default,
        };
      }),
    );

    const filteredPokemons = pokemonDetails.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(searchText.toLowerCase()),
    );

    setPokemons(filteredPokemons);
  } catch (error) {
    console.log(error);
  }
};
