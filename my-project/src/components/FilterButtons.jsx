import { useTaskContext } from "../context/TaskContext";

function FilterButtons() {
    const { filter, setFilter } = useTaskContext();

    return (
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mt-6">
            {["all", "completed", "pending"].map(f => (
                <button
                    key={f}
                    onClick={() => setFilter(f)}
                    className={`px-4 py-2 rounded-lg font-semibold border transition text-sm sm:text-base
        ${filter === f
                            ? "bg-indigo-600 text-white border-indigo-600"
                            : "bg-white text-indigo-600 border-indigo-600 dark:bg-gray-800 dark:text-indigo-400"
                        } hover:brightness-105`}
                >
                    {f[0].toUpperCase() + f.slice(1)}
                </button>
            ))}
        </div>
    );
}

export default FilterButtons;
