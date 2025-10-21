import React from "react";

const Button = ({ text, setFilter, active }) => {
  return (
    <button
      onClick={() => setFilter(text)}
      className={
        active
          ? `filter-btn px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors text-sm font-medium`
          : "filter-btn px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors text-sm font-medium"
      }
    >
      {text.charAt(0).toUpperCase() + text.slice(1)}
    </button>
  );
};

export default Button;
