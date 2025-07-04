import { useTaskContext } from '../context/TaskContext';

function TaskList() {
  const { tasks, dispatch, filter } = useTaskContext();

  const filteredTasks = tasks.filter(task =>
    filter === "completed" ? task.completed :
    filter === "pending" ? !task.completed :
    true
  );

  return (
    <ul className="mt-4 space-y-2">
      {filteredTasks.map(task => (
        <li
          key={task.id}
          className={`flex justify-between items-center px-4 py-2 rounded-lg transition 
            ${task.completed ? "bg-green-100" : "bg-gray-100"}`}
        >
          <span
            className={`flex-1 cursor-pointer font-medium 
              ${task.completed ? "line-through text-green-800" : "text-gray-800"}`}
            onClick={() => dispatch({ type: "TOGGLE_TASK", payload: task.id })}
          >
            {task.text}
          </span>
          <button
            onClick={() => dispatch({ type: "DELETE_TASK", payload: task.id })}
            className="text-red-500 hover:text-red-700 font-semibold"
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

export default TaskList;
