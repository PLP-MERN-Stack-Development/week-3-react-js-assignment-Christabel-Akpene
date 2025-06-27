import { useState } from "react";
import { MdDeleteOutline } from "react-icons/md";
import { v4 as uuidv4 } from "uuid";
import useLocalStorage from "../hooks/useLocalStorage";
import Button from "../components/Button";

const Task = () => {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useLocalStorage("tasks", []);
  const [filteredTasks, setFilteredTasks] = useLocalStorage("tasks", []);
  const [selectedFilter, setSelectedFilter] = useState("all");

  const handleInputChange = (e) => {
    setTask(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim() === "") {
      return;
    }
    const newTask = {
      id: uuidv4(),
      todo: task,
      completed: false,
    };

    const updatedTasks = [...tasks, newTask];
    setTasks(updatedTasks);
    applyFilter(updatedTasks, selectedFilter);
    setTask("");
  };

  // delete task
  const deleteItem = (id) => {

    const updatedTasks = tasks.filter((item) => item.id !== id);
    setTasks(updatedTasks);
    applyFilter(updatedTasks, selectedFilter);
  
  };

  // toggling completed states
  function toggleChecked(id) {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTasks(updatedTasks);
    applyFilter(updatedTasks, selectedFilter);
  }


  // Filtering logic
  function handleFilterChange(filterValue) {
    setSelectedFilter(filterValue);
    applyFilter(tasks, filterValue);
  }

  function applyFilter(data, filter) {
    if (filter === "all") {
      setFilteredTasks(data);
    } else if (filter === "pending") {
      setFilteredTasks(data.filter((task) => task.completed === false));
    } else if (filter === "completed") {
      setFilteredTasks(data.filter((task) => task.completed === true));
    }
  }

  return (
    <div className="flex justify-center flex-col gap-5">
      {/* Form */} 
      <form className="flex gap-10 mx-auto" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter task"
          className="border border-zinc-300 p-2 text-black w-100 text-sm rounded outline-1"
          value={task}
          onChange={handleInputChange}
        />
        <button
          type="submit"
          className="px-4 py-2 rounded border cursor-pointer hover:bg-gray-50 transition duration-300 ease-in-out"
        >
          Add Task
        </button>
      </form>

      {/* Filtering */}
      <div className="my-5 flex text-center text-sm mx-auto">
        <Button text={"All"} onClick={() => handleFilterChange("all")} isActive={selectedFilter === "all"}/>
        <Button text={"Pending"} onClick={() => handleFilterChange("pending")} isActive={selectedFilter === "pending"}/>
        <Button text={"Completed"} onClick={() => handleFilterChange("completed")} isActive={selectedFilter === "completed"}/>
      </div>

      {/* Display Tasks */}

      {filteredTasks.map((task) => {
        return (
          <div
            key={task.id}
            className="flex items-center m-auto justify-between text-xl bg-gray-100 w-2xl py-4 px-2 rounded shadow-md"
          >
            <div className="flex gap-4">
              <p>
                <input
                  type="checkbox"
                  name="checkbox"
                  id="checkbox"
                  className="block h-8 w-5 cursor-pointer"
                  onChange={() => toggleChecked(task.id)}
                  checked={task.completed}
                />
              </p>
              <p
                className={
                  task.completed ? "line-through italic" : "no-underline italic"
                }
              >
                {task.todo}
              </p>
            </div>
            <div>
              <p className="cursor-pointer">
                <MdDeleteOutline onClick={() => deleteItem(task.id)} />
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Task;
