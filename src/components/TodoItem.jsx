import { useTodo } from "../context/TodoContext";

const priorityStyles = {
  high: "bg-red-100 text-red-800 dark:bg-red-900/50 dark:text-red-300",
  medium:
    "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/50 dark:text-yellow-300",
  low: "bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-300",
};
const categoryStyles = {
  work: "bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-300",
  personal:
    "bg-purple-100 text-purple-800 dark:bg-purple-900/50 dark:text-purple-300",
  study: "bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-300",
};

const TodoItem = ({ id, completed, text, priority, category }) => {
  const { toggleTask, deleteTask } = useTodo();

  return (
    <li className="p-4 rounded-lg flex items-start justify-between transition-all duration-300 bg-white dark:bg-gray-700/50 shadow-sm hover:shadow-md">
      <div className="flex items-start space-x-4 flex-grow min-w-0">
        <input
          type="checkbox"
          onChange={() => toggleTask(id)}
          checked={completed}
          className="h-6 w-6 rounded-full border-gray-300 dark:border-gray-500 text-blue-600 bg-gray-100 dark:bg-gray-600 focus:ring-blue-500 cursor-pointer flex-shrink-0 mt-1"
        />
        <div className="flex flex-col flex-grow min-w-0">
          <div
            className={`font-medium break-words ${
              completed
                ? "line-through text-gray-400 dark:text-gray-500"
                : "text-gray-800 dark:text-gray-200"
            }`}
          >
            {text}
          </div>
          <div className="flex items-center flex-wrap gap-2 text-sm mt-2">
            <span
              className={`px-2 py-1 rounded-full text-xs font-semibold ${priorityStyles[priority]}`}
            >
              {priority.charAt(0).toUpperCase() + priority.slice(1)}
            </span>
            <span
              className={`px-2 py-1 rounded-full text-xs font-semibold ${categoryStyles[category]}`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </span>
          </div>
        </div>
      </div>
      <button
        onClick={() => deleteTask(id)}
        className="text-gray-400 dark:text-gray-500 hover:text-red-600 dark:hover:text-red-500 transition-colors pl-4 flex-shrink-0"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </li>
  );
};

export default TodoItem;
