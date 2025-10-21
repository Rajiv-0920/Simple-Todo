import React from "react";
import ThemeButton from "./ThemeButton";

const Header = () => {
  return (
    <div className="flex justify-between items-center mb-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white">
          TaskFlow
        </h1>
        <p className="text-gray-500 dark:text-gray-400">Organize Your Day</p>
      </div>
      <ThemeButton />
    </div>
  );
};

export default Header;
