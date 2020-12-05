import React, { useState } from 'react';
import { Button, FormControl, Input, InputLabel } from '@material-ui/core';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');
  console.log(input);

  const addTodo = (event) => {
    // this will fire off when we click the button
    event.preventDefault(); //will stop the refresh
    console.log("I'm working")
    setTodos([...todos, input]);
    setInput(''); // clears up the input after clicking add todo button
  }

  return (
    <div className="App">
      <h1> Hello world</h1>
      <form>
        <FormControl>
          <InputLabel>Write a Todo</InputLabel>
          <Input value={input} onChange={event => setInput(event.target.value)} />
        </FormControl>


        <Button disabled={!input} type="submit" onClick={addTodo} variant="contained" color="primary">
        Add Todo
        </Button>
      </form>

      <ul>
        {todos.map((todo) => (
          <li>{todo}</li>
        ))}
      
      </ul>
      
    </div>
  );
}

export default App;
