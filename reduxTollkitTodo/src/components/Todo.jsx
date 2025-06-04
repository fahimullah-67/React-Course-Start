import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo, updateTodo } from "../features/todo/todoSlice";

function Todo() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState("");

  const handleEdit = (todo) => {
    setEditId(todo.id);
    setEditText(todo.text);
  };

  const handleUpdate = (todo) => {
    console.log("Updating todo:", todo);
    console.log("New text:", editText);
    if (!editText.trim()) return;

    dispatch(updateTodo({ id: todo.id, text: editText }));

    setEditId(null);
    setEditText("");
  };

  return (
    <>
      <div className="max-w-md mx-auto mt-10 bg-gray-800 p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-white mb-4">Todo List</h2>

        <ul>
          {todos.map((todo) => (
            <li
              key={todo.id}
              className="flex items-center justify-between bg-gray-700 text-white px-4 py-2 rounded mb-2"
            >
              {editId === todo.id ? (
                <input
                  type="text"
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                  className="mr-2 text-black px-2 py-1 rounded"
                />
              ) : (
                <span>{todo.text}</span>
              )}
              <div className="flex gap-2">
                {editId === todo.id ? (
                  <button
                    className="p-1 hover:bg-gray-600 rounded"
                    onClick={() => handleUpdate(todo)}
                  >
                    {/* Save Icon */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-green-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </button>
                ) : (
                  <button
                    className="p-1 hover:bg-gray-600 rounded"
                    onClick={() => handleEdit(todo)}
                  >
                    {/* Edit Icon */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-yellow-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15.232 5.232l3.536 3.536M9 13l6-6m2 2l-6 6m-2 2h6"
                      />
                    </svg>
                  </button>
                )}
                <button
                  className="p-1 hover:bg-gray-600 rounded"
                  onClick={() => dispatch(removeTodo(todo.id))}
                >
                  {/* Delete (Trash) Icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-red-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Todo;
