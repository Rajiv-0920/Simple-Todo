import React from "react";
import Message from "./components/Message";
import Header from "./components/Header";
import Form from "./components/Form";
import Filter from "./components/Filter";
import TodoList from "./components/TodoList";

const App = () => {
  return (
    <div className="bg-gray-100 dark:bg-gray-900 font-sans transition-colors duration-300">
      <div className="min-h-screen flex items-center justify-center py-12 px-4">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-6 w-full max-w-lg transition-colors duration-300">
          <Header />

          <Form />

          <Filter />

          <TodoList />
        </div>
      </div>
    </div>
  );
};

export default App;
