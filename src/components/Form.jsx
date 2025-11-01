import { useEffect, useState } from 'react'
import { useTodo } from '../context/TodoContext'
import { v4 as uuidv4 } from 'uuid'
import { motion, AnimatePresence } from 'framer-motion'

const Form = () => {
  const { addTask, updateTask, setTaskToEdit, state } = useTodo()
  const { taskToEdit } = state
  const isEditing = taskToEdit !== null

  const [formData, setFormData] = useState({
    text: '',
    priority: '',
    category: '',
  })
  const { text, priority, category } = formData

  useEffect(() => {
    if (isEditing) {
      setFormData({
        text: taskToEdit.text,
        priority: taskToEdit.priority,
        category: taskToEdit.category,
      })
    }
  }, [taskToEdit, isEditing])

  const handleChange = (e) =>
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))

  const handleCancel = () => {
    setTaskToEdit(null)
    setFormData({ text: '' })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!text.trim() || !priority || !category) return

    if (isEditing) {
      updateTask({ ...taskToEdit, text, priority, category })
    } else {
      addTask({ text, priority, category, completed: false, id: uuidv4() })
    }
    setFormData({ text: '' })
  }

  return (
    <form onSubmit={handleSubmit} className='flex flex-col space-y-4'>
      <textarea
        value={text}
        onChange={handleChange}
        name='text'
        placeholder='e.g., Learn about React Hooks'
        className='border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-200 rounded-lg p-3 text-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:placeholder-gray-400 transition'
        required
        rows='3'
      ></textarea>
      <div className='grid grid-cols-2 gap-4'>
        <select
          value={priority}
          onChange={handleChange}
          name='priority'
          className='border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-200 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500'
          required
        >
          <option value='' disabled>
            Select Priority
          </option>
          <option value='high'>High</option>
          <option value='medium'>Medium</option>
          <option value='low'>Low</option>
        </select>
        <select
          value={category}
          onChange={handleChange}
          name='category'
          required
          className='border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-200 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500'
        >
          <option value='' disabled>
            Select Category
          </option>
          <option value='work'>Work</option>
          <option value='personal'>Personal</option>
          <option value='study'>Study</option>
        </select>
      </div>
      <div className='flex items-center gap-2'>
        {isEditing && (
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type='button'
            onClick={handleCancel}
            className='bg-gray-200 dark:bg-gray-600 text-gray-800 dark:text-gray-200 font-semibold rounded-lg p-3 w-full hover:bg-gray-300 dark:hover:bg-gray-500 transition-all duration-300'
          >
            Cancel
          </motion.button>
        )}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          type='submit'
          className='bg-blue-600 text-white font-semibold rounded-lg p-3 w-full hover:bg-blue-700 dark:hover:bg-blue-500 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800'
        >
          {isEditing ? 'Update Task' : 'Add Task'}
        </motion.button>
      </div>
    </form>
  )
}
export default Form
