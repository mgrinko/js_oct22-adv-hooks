import React, { useCallback, useState } from 'react';
import { Todo } from './types/Todo';

type TodosContextType = {
  todos: Todo[];
  addTodo(todo: Todo): void;
  deleteTodo(todoId: number): void;
  updateTodo(todo: Todo): void;
}

export const TodosContext = React.createContext<TodosContextType>({
  todos: [],
  addTodo() {},
  deleteTodo() {},
  updateTodo() {},
});

type Props = {
  children: React.ReactNode
}

const todosFromServer = [
  { id: 1, title: 'HTML', completed: true },
  { id: 2, title: 'CSS', completed: true },
  { id: 3, title: 'JS', completed: false },
  { id: 4, title: 'React', completed: false },
];

export const TodosProvider: React.FC<Props> = ({ children }) => {
  const [todos, setTodos] = useState(todosFromServer);

  function addTodo(newTodo: Todo) {
    setTodos([...todos, newTodo]);
  }

  const deleteTodo = useCallback((todoId: number) => {
    setTodos(current => current.filter(
      todo => todo.id !== todoId,
    ));
  }, []);

  const updateTodo = useCallback((updatedTodo: Todo) => {
    setTodos(current => current.map(
      todo => todo.id === updatedTodo.id ? updatedTodo: todo,
    ));
  }, []);

  const value = {
    todos, addTodo, deleteTodo, updateTodo
  }

  return (
    <TodosContext.Provider value={value}>
      { children }
    </TodosContext.Provider>
  );
};