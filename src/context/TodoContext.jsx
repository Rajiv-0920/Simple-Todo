import { createContext, useContext, useEffect, useReducer } from 'react'
import { ACTIONS, todoReducer, todoReducerInitialState } from './TodoReducer'

export const TodoContext = createContext()

export const TodoContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(todoReducer, todoReducerInitialState)
  const { tasks } = state

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])

  const addTask = (formData) => {
    console.log(formData)
    dispatch({ type: ACTIONS.ADD_TASK, payload: { task: formData } })
  }

  const toggleTask = (taskId) => {
    dispatch({ type: ACTIONS.TOGGLE_COMPLETE, payload: { id: taskId } })
  }

  const deleteTask = (taskId) => {
    dispatch({ type: ACTIONS.DELETE_TASK, payload: { id: taskId } })
  }

  const setFilter = (filter) => {
    dispatch({ type: ACTIONS.SET_FILTER, payload: { filter } })
  }

  const updateTask = (taskData) => {
    dispatch({ type: ACTIONS.UPDATE_TASK, payload: { task: taskData } })
  }

  const setTaskToEdit = (task) => {
    dispatch({ type: ACTIONS.SET_EDITING_TASK, payload: { task } })
  }

  const clearAllTasks = () => {
    dispatch({ type: ACTIONS.CLEAR_ALL_TASKS })
  }

  const value = {
    state,
    addTask,
    toggleTask,
    deleteTask,
    setFilter,
    setTaskToEdit,
    updateTask,
    clearAllTasks,
  }

  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>
}

export const useTodo = () => {
  return useContext(TodoContext)
}
