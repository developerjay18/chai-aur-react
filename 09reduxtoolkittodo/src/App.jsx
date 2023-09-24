import TodoForm from './components/TodoForm';
import Todo from './components/Todo';
import './App.css';

function App() {
  return (
    <>
      <div className="main-container bg-slate-700">
        <TodoForm />
        <Todo />
      </div>
    </>
  );
}

export default App;
