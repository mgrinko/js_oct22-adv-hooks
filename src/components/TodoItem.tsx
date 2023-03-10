import { useState } from 'react';
import { Todo } from '../types/Todo'
import { TodoForm } from './TodoForm';

type Props = {
  todo: Todo;
  onDelete: () => void;
  onUpdate: (todo: Todo) => void;
};

export const TodoItem: React.FC<Props> = ({
  todo,
  onDelete,
  onUpdate,
}) => {
  const [editing, setEditing] = useState(false);

  if (editing) {
    return (
      <div className="todo">
        <TodoForm onSubmit={onUpdate} />
      </div>
    );
  }

  return (
    <div className="todo">
      <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
        {todo.title}
      </span>

      <button onClick={onDelete}>
        X
      </button>
    </div>
  );
}
