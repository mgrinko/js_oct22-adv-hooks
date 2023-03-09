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
  const [query, setQuery] = useState('');
  const [count, setCount] = useState(0);

  const lowerQuery = query.toLocaleLowerCase();
  const visibleTodos = todos.filter(
    todo => todo.title.toLocaleLowerCase().includes(lowerQuery),
  );

  return (
    <main className="App">
      <button onClick={() => setCount(x => x + 1)}>{count}</button>

      <input
        type="text"
        value={query}
        onChange={e => setQuery(e.target.value)}
      />

      <TodoList todos={visibleTodos} />
    </main>
  );
}
