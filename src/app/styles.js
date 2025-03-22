export const pokemonCardStyles = {
  container:
    "flex flex-col items-center bg-white p-4 rounded-lg shadow-md border border-gray-300",
  image: "w-24 h-24 object-contain",
  name: "mt-2 text-lg font-medium capitalize text-gray-900",
  typesContainer: "flex items-center gap-1 mt-2",
  typeLabel: "text-sm font-medium text-gray-700",
  typeBadge:
    "px-2 py-1 text-xs font-semibold text-white rounded-full bg-gray-600 capitalize",
};

export const searchInputStyles =
  "border border-gray-400 p-2 rounded-md text-black placeholder-gray-500 bg-white w-full max-w-md";

export const layoutStyles = {
  container:
    "grid grid-rows-[auto_1fr_20px] items-start justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]",
  header: "w-full flex justify-center",
  main: "flex flex-col gap-6 items-center justify-center p-8",
  cardGrid:
    "grid grid-cols-1 min-[500px]:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6",
};

export const loaderStyles = {
  container: "flex justify-center items-center w-full my-6",
  spinner:
    "w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin",
};
