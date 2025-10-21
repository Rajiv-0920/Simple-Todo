import React from "react";
import { useTodo } from "../context/TodoContext";
import TodoItem from "./TodoItem";
import Message from "./Message";

const TodoList = () => {
  const { state } = useTodo();

  let message = "No tasks here. Add one above! 🎉";
  const filteredTodos = () => {
    if (state.filter === "active") {
      message = "You're all caught up! No pending tasks.";
      return state.tasks.filter((task) => !task.completed);
    }
    if (state.filter === "completed") {
      message = "No tasks completed yet. Finish one to see it here!";
      return state.tasks.filter((task) => task.completed);
    }
    return state.tasks;
  };

  const tasks = filteredTodos();

  return (
    <ul id="task-list" className="space-y-3">
      {tasks.length > 0 ? (
        tasks.map((task) => <TodoItem key={task.id} {...task} />)
      ) : (
        <Message message={message} />
      )}
    </ul>
  );
};

export default TodoList;
