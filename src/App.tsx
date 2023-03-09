import React, { useMemo, useState } from 'react';
import './App.css';
import { TodoForm } from './components/TodoForm';
import { TodoList } from './components/TodoList';
import { Todo } from './types/Todo';

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

  const visibleTodos = useMemo(() => {
    const lowerQuery = query.toLocaleLowerCase();

    return todos.filter(
      todo => todo.title.toLocaleLowerCase().includes(lowerQuery),
    );
  }, [query, todos]);

  function addTodo(newTodo: Todo) {
    setTodos([...todos, newTodo]);
  }

  function deleteTodo(todoId: number) {
    setTodos(
      todos.filter(
        todo => todo.id !== todoId,
      )
    );
  }

  return (
    <main className="App">
      <button onClick={() => setCount(x => x + 1)}>{count}</button>

      <input
        type="text"
        value={query}
        onChange={e => setQuery(e.target.value)}
      />

      <TodoForm onSubmit={addTodo} />
      <TodoList
        todos={visibleTodos}
        onTodoDelete={deleteTodo}
      />
    </main>
  );
}
