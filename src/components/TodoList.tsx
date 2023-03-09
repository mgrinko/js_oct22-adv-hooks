import React from 'react';
import { Todo } from '../types/Todo'
import { TodoItem } from './TodoItem';

type Props = {
  todos: Todo[];
};

let prevTodos: Todo[] = [];

export const TodoList: React.FC<Props> = React.memo(
  ({ todos }) => {
    console.log('Rendering TodoList');

    console.log(prevTodos === todos);
    prevTodos = todos;

    return (
      <section className="todo-list">
        {todos.map(todo => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </section>
    );
  }
);
