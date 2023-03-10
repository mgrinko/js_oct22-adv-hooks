import debounce from 'lodash.debounce';
import React, { useCallback, useContext, useMemo, useState } from 'react';
import { TodoForm } from '../components/TodoForm'
import { TodoList } from '../components/TodoList'
import { TodosContext } from '../TodosContext';

export const TodosPage: React.FC = () => {
  const todos = useContext(TodosContext);

  const [query, setQuery] = useState('');
  const [appliedQuery, setAppliedQuery] = useState('');
  const applyQuery = useCallback(debounce(setAppliedQuery, 1000), []);

  const handleQueryChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(target.value);
    applyQuery(target.value);
  };

  const visibleTodos = useMemo(() => {
    const lowerQuery = appliedQuery.toLocaleLowerCase();

    return todos.filter(
      todo => todo.title.toLocaleLowerCase().includes(lowerQuery),
    );
  }, [appliedQuery, todos]);

  const activeTodos = todos.filter(todo => !todo.completed);

  return (
    <div className="TodosPage">
      <TodoForm onSubmit={() => {}} />
      <input value={query} onChange={handleQueryChange} />

      <TodoList
        todos={visibleTodos}
        onTodoDelete={() => {}}
        onTodoUpdate={() => {}}
      />

      <p>{activeTodos.length} items left</p>
    </div>
  );
}