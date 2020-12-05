import React from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  
  return (
    <div className="App">
      <h1> Hello world</h1>
      <input />
      <button>Add Todo</button>

      <ul>
        <li>Take dogs for a walk</li>
        <li>Take the rubbish out</li>
      </ul>
      
    </div>
  );
}

export default App;
