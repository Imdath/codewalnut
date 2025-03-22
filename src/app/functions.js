// Handling search of pokemon
export const handleSearch = (e, setSearch) => {
  setSearch(e.target.value);
};

// Fetching pokemon data and transforming to an array of objects each with name and image of the pokemon
export const fetchPokemons = async (setPokemons, searchText, setLoading) => {
  try {
    setLoading(true);
    const result = await fetch(
      "https://pokeapi.co/api/v2/pokemon?limit=50&offset=0",
    );
    const data = await result.json();

    const pokemonDetails = await Promise.all(
      data.results.map(async (pokemon) => {
        const res = await fetch(pokemon.url);
        const details = await res.json();

        const id = pokemon.url.split("/").filter(Boolean).pop();

        const types = details.types.map((typeInfo) => typeInfo.type.name);

        return {
          id,
          name: pokemon.name,
          image: details.sprites.front_default,
          types,
        };
      }),
    );

    // Filtering data based on our search text incase of name or id of the pokemon
    const filteredPokemons = pokemonDetails.filter(
      (pokemon) =>
        pokemon.name.toLowerCase().includes(searchText.toLowerCase()) ||
        pokemon.id === searchText,
    );

    setPokemons(filteredPokemons);
  } catch (error) {
    console.log(error);
  } finally {
    setLoading(false);
  }
};
