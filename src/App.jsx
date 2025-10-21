import Filter from "./components/Filter";
import Form from "./components/Form";
import Header from "./components/Header";
import TodoList from "./components/TodoList";

const App = () => (
  <div className="min-w bg-gray-100 dark:bg-gray-900 font-sans text-gray-900 dark:text-gray-200">
    <div className="container mx-auto min-h-screen md:grid md:grid-cols-2 md:gap-8 lg:gap-16 items-start p-4 sm:p-6 lg:p-8">
      <div className="md:sticky md:top-8 flex flex-col">
        <Header />
        <div className="p-6 rounded-xl bg-white dark:bg-gray-800 shadow-lg">
          <h2 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">
            Add a New Task
          </h2>
          <Form />
        </div>
      </div>
      <div className="mt-8 md:mt-0 md:h-[calc(100vh-4rem)] md:flex md:flex-col">
        <div className="flex-grow overflow-y-auto pr-2">
          <Filter />
          <TodoList />
        </div>
      </div>
    </div>
  </div>
);

export default App;
