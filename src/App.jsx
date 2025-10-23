import { useState, useEffect } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  function handleAdd(todo) {
    const newTodos = [...todos, todo];
    persistData(newTodos);
    setTodos(newTodos);
  }

  function handleDelete(index) {
    const newTodosList = todos.filter((_, todoIndex) => {
      return todoIndex !== index;
    });

    persistData(newTodosList);
    setTodos(newTodosList);
  }

  function handleEdit(index) {
    const valueToEdit = todos[index];
    setInputValue(valueToEdit);
    handleDelete(index);
  }

  function persistData(newList) {
    localStorage.setItem("todos", JSON.stringify({ todos: newList }));
  }

  useEffect(() => {
    if (!localStorage) return;

    let localTodos = localStorage.getItem("todos");
    if (!localTodos) return;

    localTodos = JSON.parse(localTodos);
    setTodos(localTodos.todos);
  }, []);

  return (
    <>
      <TodoInput
        onAdd={handleAdd}
        inputValue={inputValue}
        setInputValue={setInputValue}
      />
      <TodoList todos={todos} onDelete={handleDelete} onEdit={handleEdit} />
    </>
  );
}

export default App;
