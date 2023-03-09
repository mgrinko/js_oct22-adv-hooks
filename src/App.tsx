import React, { useCallback, useMemo, useState } from 'react';
import debounce from 'lodash.debounce';

import './App.css';
import { TodoForm } from './components/TodoForm';
import { TodoList } from './components/TodoList';
import { Todo } from './types/Todo';

const todosFromServer = [
  { id: 1, title: 'HTML', completed: true },
  { id: 2, title: 'CSS', completed: true },
  { id: 3, title: 'JS', completed: false },
  { id: 4, title: 'React', completed: false },
];


// function debounce(callback: Function, delay: number) {
//   let timerId = 0;

//   return (...args: any[]) => {
//     window.clearTimeout(timerId);

//     timerId = window.setTimeout(() => {
//       callback(...args);
//     }, delay);
//   };
// }

// ____+1___1()_____-1________

export function App() {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState(todosFromServer);
  const [query, setQuery] = useState('');
  const [appliedQuery, setAppliedQuery] = useState('');

  const wrapper = useCallback(
    debounce(setAppliedQuery, 1000),
    []
  );

  const handleQueryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    setQuery(value);
    wrapper(value);
  };

  const visibleTodos = useMemo(() => {
    console.log(appliedQuery);
    const lowerQuery = appliedQuery.toLocaleLowerCase();

    return todos.filter(
      todo => todo.title.toLocaleLowerCase().includes(lowerQuery),
    );
  }, [appliedQuery, todos]);

  function addTodo(newTodo: Todo) {
    setTodos([...todos, newTodo]);
  }

  const deleteTodo = useCallback(
    (todoId: number) => {
      setTodos(current => current.filter(
        todo => todo.id !== todoId,
      ));
    },
    [],
  );

  return (
    <main className="App">
      <TodoForm onSubmit={addTodo} />

      <button onClick={() => setCount(x => x + 1)}>{count}</button>

      <input
        type="text"
        value={query}
        onChange={handleQueryChange}
      />

      <TodoList
        todos={visibleTodos}
        onTodoDelete={deleteTodo}
      />
    </main>
  );
}
