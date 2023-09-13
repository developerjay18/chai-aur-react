import './App.css';
import Login from './components/Login';
import Signup from './components/Signup';
import DemoContextProvider from './context/DemoContextProvider';

function App() {
  return (
    <DemoContextProvider>
      <h1>useContext learning App</h1>
      <Login />
      <Signup />
    </DemoContextProvider>
  );
}

export default App;
