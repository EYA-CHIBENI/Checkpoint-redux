import './App.css';
import AddTask from './Components/AddTask';
import ListTasks from './Components/ListTasks';

function App() {
  return (
    <div>
      <h1>TO DO LIST</h1>
      <ListTasks/>
      <br/>
      <br/>
      <AddTask/>
    </div>
  );
}

export default App;
