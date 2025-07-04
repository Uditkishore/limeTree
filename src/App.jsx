import { useTheme } from './context/ThemeContext';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import FilterButtons from './components/FilterButtons';

function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen transition bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white">
      <div className="flex justify-end p-4">
        <button
          onClick={toggleTheme}
          className="px-3 py-1 border rounded-lg text-sm dark:border-white border-black"
        >
          {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
        </button>
      </div>

      <div className="flex flex-col items-center p-6">
        <div className="w-full max-w-xl bg-white dark:bg-gray-800 shadow-xl rounded-2xl p-6">
          <h1 className="text-3xl font-bold text-center text-indigo-600 dark:text-indigo-400 mb-6">
            📝 Task Manager
          </h1>
          <TaskForm />
          <FilterButtons />
          <TaskList />
        </div>
      </div>
    </div>
  );
}

export default App;
