import React, { useState } from "react";
import Input from './components/input'
import List from './components/list'
function App() {
  const initialTodos = ["My first todo", "My second todo", "Do-be-do-be-do"];
  const [todos, setTodos] = useState(initialTodos);
  return (
    <>
      <Input />
      <List />
    </>
  );
}

export default App;
