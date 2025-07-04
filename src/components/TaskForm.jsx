import { useState } from 'react';
import { useTaskContext } from '../context/TaskContext';
import { v4 as uuidv4 } from 'uuid';

function TaskForm() {
    const [taskText, setTaskText] = useState("");
    const { dispatch } = useTaskContext();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!taskText.trim()) return alert("This filed cannot be empty.");

        dispatch({
            type: "ADD_TASK",
            payload: { id: uuidv4(), text: taskText.trim(), completed: false },
        });

        setTaskText("");
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row sm:items-center gap-4 w-full"
        >
            <input
                value={taskText}
                onChange={(e) => setTaskText(e.target.value)}
                placeholder="Add task"
                className="w-full sm:flex-1 px-4 py-2 border rounded-lg"
            />
            <button
                type="submit"
                className="w-full sm:w-auto bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700"
            >
                Save
            </button>
        </form>
    );
}

export default TaskForm;
