import { localKeys } from "@/app/localKeys";
import { searchInputStyles } from "@/app/styles";

/**
 * SearchInput Component
 *
 * A reusable search input field for filtering Pokémon.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {string} props.value - The input value.
 * @param {Function} props.onChange - The function to call on input change.
 * @returns {JSX.Element} The search input field.
 */
const SearchInput = ({ value, onChange }) => {
  return (
    <input
      type={localKeys.search}
      name={localKeys.search}
      className={searchInputStyles}
      value={value}
      onChange={onChange}
      aria-label={localKeys.searchPascalCase}
      placeholder={localKeys.searchPokemonPlaceholder}
      autoComplete={localKeys.off}
    />
  );
};

export default SearchInput;
