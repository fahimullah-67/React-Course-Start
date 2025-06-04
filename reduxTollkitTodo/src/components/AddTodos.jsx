import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";

function AddTodos() {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const handleAddTodo = (e) => {
    e.preventDefault();
    console.log("Current todo text:", text);
    if (!text) return;
    // Dispatch the addTodo action with the current text
    if (text.length < 3) alert("Todo text must be at least 3 characters long");
    else dispatch(addTodo(text));
    // Clear the input field after adding the todo
    setText("");
  };

  return (
    <div className="flex justify-center items-start py-10 bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md w-100">
        <h2 className="text-2xl text-center font-bold mb-4">Add Todo</h2>
        <form onSubmit={handleAddTodo}>
          <input
            type="text"
            placeholder="Enter todo"
            className="w-full p-2 border border-gray-300 rounded mb-4"
            value={text}
            onChange={(e) => setText(e.target.value)}
            required
          />
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
          >
            Add Todo
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddTodos;
