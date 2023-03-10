import { useContext } from 'react';
import { TodoList } from '../components/TodoList';
import { TodosContext } from '../TodosContext';

export const ArchivePage = () => {
  const { todos } = useContext(TodosContext);
  const completedTodos = todos.filter(
    todo => todo.completed,
  );

  return (
    <TodoList todos={completedTodos} />
  );
};
