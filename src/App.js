
import './App.css';
import Todo from './components/Todo';

function App() {
  return (
    <div>
      <h1>My todos</h1>
      <Todo text='Lear React'/>
      <Todo text='Master React' />
      <Todo text='Suhu React' />
    </div>
  );
}

export default App;
