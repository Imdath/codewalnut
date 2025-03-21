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
      type="search"
      name="search"
      className={searchInputStyles}
      value={value}
      onChange={onChange}
      aria-label="Search"
      placeholder="Search Pokemon by name or id"
      autoComplete="off"
    />
  );
};

export default SearchInput;
