import React, { useEffect, useState } from 'react';

const ToDoList = () => {
    const [todos, setTodos] = useState([]);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
      fetch("https://")
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
    
    // if (loading) {
    //   return (
    //     <div className="min-h-screen flex items-center justify-center">
    //       <p className="text-gray-600 text-lg">Loading todos...</p>
    //     </div>
    //   );
    // }
    return (
         <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-2xl font-semibold text-gray-800 mb-4">
          ToDo List
        </h1>

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




































