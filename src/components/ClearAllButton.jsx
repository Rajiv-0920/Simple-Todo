import { useEffect, useState } from "react";
import { useTodo } from "../context/TodoContext";
import { motion, AnimatePresence } from "framer-motion";

const ClearAllButton = () => {
  const { clearAllTasks, state } = useTodo();
  const [confirming, setConfirming] = useState(false);
  const [timeLeft, setTimeLeft] = useState(3);

  useEffect(() => {
    if (!confirming) return;
    const timeoutId = setTimeout(() => setConfirming(false), 3000);
    const intervalId = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime > 1) return prevTime - 1;
        clearInterval(intervalId);
        return 0;
      });
    }, 1000);
    return () => {
      clearTimeout(timeoutId);
      clearInterval(intervalId);
    };
  }, [confirming]);

  if (state.tasks.length === 0) return null;

  const handleClear = () => {
    clearAllTasks();
    setConfirming(false);
  };

  const handleStartConfirm = () => {
    setConfirming(true);
    setTimeLeft(3);
  };

  return (
    <AnimatePresence mode="wait" initial={false}>
      {confirming ? (
        <motion.button
          key="confirm"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 10 }}
          transition={{ duration: 0.2 }}
          onClick={handleClear}
          className="px-3 py-1 text-sm font-medium text-white bg-red-600 rounded-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800"
        >
          {`Confirm? (${timeLeft})`}
        </motion.button>
      ) : (
        <motion.button
          key="clear"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 10 }}
          transition={{ duration: 0.2 }}
          onClick={handleStartConfirm}
          className="px-3 py-1 text-sm font-medium text-gray-600 dark:text-gray-300 bg-gray-200 dark:bg-gray-700 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
        >
          Clear All
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ClearAllButton;
