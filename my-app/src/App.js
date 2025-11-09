import React, { useEffect } from "react";
import TodoList from "./Todo/TodoList";
import Context from "./Context";
import AddTodo from "./Todo/addTodo";
import Loader from "./loader";

function App() {
  const [todos, setTodos] = React.useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos?_limit=5")
      .then((response) => response.json())
      .then((todos) => {
        setTimeout(() => {
          setTodos(todos);
          setLoading(false)
        },2000);
      });
  });

  const [loading, setLoading] = React.useState(true);
  function toggleTodo(id) {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.complited = !todo.complited;
        }

        return todo;
      })
    );
  }
  function removeTodo(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }
  function addTodo(title) {
    setTodos(todos.concat({ title, id: Date.now(), complited: false }));
  }
  return (
    <Context.Provider value={{ removeTodo: removeTodo }}>
      <div className="Base">
        <h1>React tutorial</h1>
        <AddTodo onCreate={addTodo} />
        {loading && <Loader />}
        {todos.length ? (
          <TodoList todos={todos} onToggle={toggleTodo} />
        ) : (
          <p>Klublar yo'q :)</p>
        )}
      </div>
    </Context.Provider>
  );
}

export default App;
