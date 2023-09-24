import { TodoProvider } from './contexts';
import { useState, useEffect } from 'react';
import { TodoForm, TodoItem } from './components';

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos((prevTodos) => [{ id: Date.now(), ...todo }, ...prevTodos]);
  };

  const updateTodo = (id, todo) => {
    setTodos((prevTodos) => {
      prevTodos.map((prevTodo) => {
        // prevTodo.id === id ? { ...prevTodo, todo } : prevTodo; // this was mine logic
        prevTodo.id === id ? todo : prevTodo;
      });
    });
  };

  const deleteTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((prevTodo) => prevTodo.id !== id));
  };

  const toggleCompleted = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((prevTodo) => {
        prevTodo.id === id
          ? { prevTodo, completed: !prevTodo.completed }
          : prevTodo;
      })
    );
  };

  useEffect(() => {
    let todos = JSON.parse(localStorage.getItem('todos'));

    if (todos && todos.length) {
      setTodos(todos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  return (
    <TodoProvider
      value={{ todos, addTodo, updateTodo, deleteTodo, toggleCompleted }}
    >
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-4">
            {/* Todo form goes here */}
            <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
            {todos.map((todo) => (
              <div key={todo.id} className="w-full">
                <TodoItem todo={todo} /> {/* quiet confusing */}
              </div>
            ))}
          </div>
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;
