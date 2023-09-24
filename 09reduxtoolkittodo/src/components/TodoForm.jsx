import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  addTodo,
  toggleUpdateMode,
  updateTodo,
} from '../features/todo/todoSlice';

function TodoForm() {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);

  // updating todo details fetching
  let updatingTodoId = useSelector((state) => state.updateTodoId);
  let updatingTodo = todos.filter((todo) => todo.id === updatingTodoId);
  let updatingTodoMode = updatingTodo.length
    ? updatingTodo[0].updateMode
    : false; // takes half an hour
  let updatingTodoText = updatingTodo.length ? updatingTodo[0].text : '';

  const updateTodoDisplayer = () => {
    updatingTodoMode ? setInput(updatingTodoText) : setInput('');
  };

  const updateTodoHandler = () => {
    dispatch(updateTodo([updatingTodoId, input]));
    setInput('');
    dispatch(toggleUpdateMode(updatingTodoId));
  };

  const addTodoHandler = () => {
    dispatch(addTodo(input));
    setInput('');
  };

  const handleEvent = (e) => {
    e.preventDefault();
    updatingTodoMode ? updateTodoHandler() : addTodoHandler();
  };

  useEffect(() => {
    updateTodoDisplayer();
  }, [updatingTodoMode]);

  return (
    <form onSubmit={handleEvent} className="space-x-3 mt-4 w-full font-mono">
      <input
        type="text"
        id='todo-input'
        className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out w-[50%]"
        placeholder="Enter a Todo..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        type="submit"
        className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
      >
        {updatingTodoMode ? 'Update Todo' : 'Add Todo'}
      </button>
    </form>
  );
}

export default TodoForm;
