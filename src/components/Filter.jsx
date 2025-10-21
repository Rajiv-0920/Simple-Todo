import React from "react";
import { useTodo } from "../context/TodoContext";
import Button from "./Button";

const Filter = () => {
  const { state, setFilter } = useTodo();

  return (
    <div
      id="filter-buttons"
      className="flex justify-center space-x-2 mb-6 border-b border-gray-200 dark:border-gray-700 pb-4"
    >
      <Button
        setFilter={setFilter}
        text="all"
        active={state.filter === "all"}
      />
      <Button
        setFilter={setFilter}
        text="active"
        active={state.filter === "active"}
      />
      <Button
        setFilter={setFilter}
        text="completed"
        active={state.filter === "completed"}
      />
    </div>
  );
};

export default Filter;
