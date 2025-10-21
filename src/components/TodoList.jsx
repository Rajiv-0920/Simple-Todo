import { useTodo } from "../context/TodoContext";
import TodoItem from "./TodoItem";
import { motion, AnimatePresence } from "framer-motion";

const TodoList = () => {
  const { state } = useTodo();
  const { tasks, filter } = state;
  const filteredTodos = tasks.filter((task) => {
    if (filter === "active") return !task.completed;
    if (filter === "completed") return task.completed;
    return true;
  });

  return (
    <motion.ul layout className="space-y-3">
      <AnimatePresence>
        {filteredTodos.length > 0 ? (
          filteredTodos.map((task) => <TodoItem key={task.id} {...task} />)
        ) : (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center text-gray-500 dark:text-gray-400 pt-8"
          >
            No tasks here. Add one! 🎉
          </motion.p>
        )}
      </AnimatePresence>
    </motion.ul>
  );
};

export default TodoList;
