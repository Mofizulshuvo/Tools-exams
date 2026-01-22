import React, { useEffect, useState } from "react";

const ToDoList = () => {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [newTodo, setNewTodo] = useState("");

  useEffect(() => {
    fetch("https:Localhost:3000/to-do-list")
      .then((res) => res.json())
      .then((data) => {
        setTodos(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  const handleAddTodo = (e) => {
    e.preventDefault();

    if (!newTodo.trim()) return;

    const todo = {
      id: Date.now(),
      title: newTodo,
      completed: false,
    };

    setTodos([todo, ...todos]);
    setNewTodo("");
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-2xl font-semibold text-gray-800 mb-4">
          ToDo List
        </h1>

        
        <form
          onSubmit={handleAddTodo}
          className="flex gap-2 mb-6"
        >
          <input
            type="text"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            placeholder="Add a new task..."
            className="flex-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
          >
            Add
          </button>
        </form>

        <ul className="space-y-3">
          {todos.map((todo) => (
            <li
              key={todo.id}
              className="flex items-center justify-between bg-white p-4 rounded-md shadow-sm"
            >
              <span
                className={`text-gray-700 ${
                  todo.completed ? "line-through text-gray-400" : ""
                }`}
              >
                {todo.title}
              </span>

              <span
                className={`text-sm px-2 py-1 rounded ${
                  todo.completed
                    ? "bg-green-100 text-green-600"
                    : "bg-yellow-100 text-yellow-600"
                }`}
              >
                {todo.completed ? "Done" : "Pending"}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ToDoList;
