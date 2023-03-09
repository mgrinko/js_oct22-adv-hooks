import React from 'react';
import { Todo } from '../types/Todo'
import { TodoItem } from './TodoItem';

type Props = {
  todos: Todo[];
  onTodoDelete: (todoId: number) => void;
};

export const TodoList: React.FC<Props> = React.memo(
  ({ todos, onTodoDelete }) => {
    // console.log('Rendering TodoList');

    return (
      <section className="todo-list">
        {todos.map(todo => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onDelete={() => onTodoDelete(todo.id)}
          />
        ))}
      </section>
    );
  }
);
