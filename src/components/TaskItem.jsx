import { memo, useCallback } from "react";
import { useTasks } from "../context/TaskContext";

const TaskItem = memo(({ task }) => {
    const { dispatch } = useTasks();

    const toggle = useCallback(() => {
        dispatch({ type: "TOGGLE", payload: task.id });
    }, [dispatch, task.id]);

    const del = useCallback(() => {
        dispatch({ type: "DELETE", payload: task.id });
    }, [dispatch, task.id]);

    return (
        <li className="transition-all">
            <span onClick={toggle} style={{ textDecoration: task.completed ? "line-through" : "none" }}>
                {task.text}
            </span>
            <button onClick={del}>X</button>
        </li>
    );
});

export default TaskItem;
