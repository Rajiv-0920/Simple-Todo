export const ACTIONS = {
  ADD_TASK: "ADD_TASK",
  DELETE_TASK: "DELETE_TASK",
  TOGGLE_COMPLETE: "TOGGLE_COMPLETE",
  SET_FILTER: "SET_FILTER",
  UPDATE_TASK: "UPDATE_TASK",
  SET_EDITING_TASK: "SET_EDITING_TASK",
  CLEAR_ALL_TASKS: "CLEAR_ALL_TASKS",
};

let savedTasks = [];
try {
  const stored = localStorage.getItem("tasks");
  savedTasks = stored ? JSON.parse(stored) : [];
} catch (e) {
  console.error("Error parsing tasks from localStorage", e);
}

export const todoReducerInitialState = {
  tasks: savedTasks,
  filter: "all",
  taskToEdit: null,
};

export const todoReducer = (state, { type, payload }) => {
  switch (type) {
    case ACTIONS.ADD_TASK:
      return { ...state, tasks: [...state.tasks, payload.task] };

    case ACTIONS.DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== payload.id),
      };

    case ACTIONS.TOGGLE_COMPLETE:
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === payload.id
            ? { ...task, completed: !task.completed }
            : task
        ),
      };

    case ACTIONS.UPDATE_TASK:
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === payload.task.id ? { ...task, ...payload.task } : task
        ),
        taskToEdit: null, // Clear editing state after update
      };

    case ACTIONS.SET_EDITING_TASK:
      return {
        ...state,
        taskToEdit: payload.task,
      };

    case ACTIONS.SET_FILTER:
      return { ...state, filter: payload.filter };

    case ACTIONS.CLEAR_ALL_TASKS:
      return todoReducerInitialState;

    default:
      return state;
  }
};
