import AddTodos from "./components/AddTodos";
import Todo from "./components/Todo.jsx";
import "./App.css";
import { Provider } from "react-redux";
import Store from "./App/Store.js";

function App() {
  return (
    <Provider store={Store}>
      <h1 className="w-full bg-gray-700 text-orange-700 text-3xl font-bold py-10 text-center">
        Redux Toolkit Todo List
      </h1>
      <AddTodos />
      <Todo />
    </Provider>
  );
}

export default App;
