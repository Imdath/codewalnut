import { loaderStyles } from "@/app/styles";
import React from "react";

/**
 * Loader Component
 *
 * Displays a spinning loader while data is being fetched.
 *
 * @component
 * @returns {JSX.Element} The loading animation.
 */
const Loader = () => {
  return (
    <div className={loaderStyles.container}>
      <div className={loaderStyles.spinner}></div>
    </div>
  );
};

export default Loader;
