import { useTodo } from "../context/TodoContext";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const { state } = useTodo();
  const { tasks, filter } = state;
  const filteredTodos = tasks.filter((task) => {
    if (filter === "active") return !task.completed;
    if (filter === "completed") return task.completed;
    return true;
  });

  return (
    <ul className="space-y-3">
      {filteredTodos.length > 0 ? (
        filteredTodos.map((task) => <TodoItem key={task.id} {...task} />)
      ) : (
        <p className="text-center text-gray-500 dark:text-gray-400">
          No tasks here. Add one! 🎉
        </p>
      )}
    </ul>
  );
};

export default TodoList;
