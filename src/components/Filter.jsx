import React from "react";
import { useTodo } from "../context/TodoContext";
import FilterButton from "./FilterButton";

const Filter = () => {
  const { state, setFilter } = useTodo();
  return (
    <div className="flex justify-center space-x-2 mb-4 border-b border-gray-200 dark:border-gray-700 pb-4">
      <FilterButton
        setFilter={setFilter}
        text="all"
        active={state.filter === "all"}
      />
      <FilterButton
        setFilter={setFilter}
        text="active"
        active={state.filter === "active"}
      />
      <FilterButton
        setFilter={setFilter}
        text="completed"
        active={state.filter === "completed"}
      />
    </div>
  );
};

export default Filter;
