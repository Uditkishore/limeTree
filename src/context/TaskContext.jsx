import { createContext, useContext, useReducer, useEffect, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

const TaskContext = createContext();

const taskReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TASK":
      return [...state, action.payload];
    case "TOGGLE_TASK":
      return state.map(task => task.id === action.payload ? { ...task, completed: !task.completed } : task);
    case "DELETE_TASK":
      return state.filter(task => task.id !== action.payload);
    case "SET_TASKS":
      return action.payload;
    default:
      return state;
  }
};

export const TaskProvider = ({ children }) => {
  const [localTasks, setLocalTasks] = useLocalStorage("tasks", []);
  const [tasks, dispatch] = useReducer(taskReducer, localTasks);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    setLocalTasks(tasks);
  }, [setLocalTasks, tasks]);

  return (
    <TaskContext.Provider value={{ tasks, dispatch, filter, setFilter }}>
      {children}
    </TaskContext.Provider>
  );
};

export const useTaskContext = () => useContext(TaskContext);
