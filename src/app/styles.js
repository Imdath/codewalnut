export const pokemonCardStyles = {
  container:
    "flex flex-col items-center bg-white p-4 rounded-lg shadow-md border border-gray-300",
  image: "w-24 h-24 object-contain",
  name: "mt-2 text-lg font-medium capitalize text-gray-900",
};

export const searchInputStyles =
  "border border-gray-400 p-2 rounded-md text-black placeholder-gray-500 bg-white w-full max-w-md";

export const layoutStyles = {
  container:
    "grid grid-rows-[auto_1fr_20px] items-start justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]",
  header: "w-full flex justify-center",
  main: "flex flex-col gap-6 items-center justify-center p-8",
  cardGrid:
    "grid grid-cols-1 min-[420px]:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6",
};
