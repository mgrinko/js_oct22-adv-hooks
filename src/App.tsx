import React, { useState } from 'react';
import './App.css';
import { TodoList } from './components/TodoList';

const todosFromServer = [
  { id: 1, title: 'HTML', completed: true },
  { id: 2, title: 'CSS', completed: true },
  { id: 3, title: 'JS', completed: false },
  { id: 4, title: 'React', completed: false },
]

export function App() {
  const [todos, setTodos] = useState(todosFromServer);

  return (
    <main className="App">
      <TodoList todos={todos} />
    </main>
  );
}
