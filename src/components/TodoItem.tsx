import { useState } from 'react';
import { Todo } from '../types/Todo'
import { TodoForm } from './TodoForm';

type Props = {
  todo: Todo;
  onDelete?: (todoId: number) => void;
  onUpdate?: (todo: Todo) => void;
};

export const TodoItem: React.FC<Props> = ({
  todo,
  onDelete,
  onUpdate,
}) => {
  const [editing, setEditing] = useState(false);

  if (onUpdate && editing) {
    return (
      <div className="todo">
        <TodoForm
          onSubmit={(updatedTodo: Todo) => {
            onUpdate && onUpdate(updatedTodo);
            setEditing(false);
          }}
          todo={todo}
        />
      </div>
    );
  }

  return (
    <div className="todo">
      <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
        {todo.title}
      </span>

      {onUpdate && (
        <button onClick={() => setEditing(true)}>
          Edit
        </button>
      )}

      {onDelete && (
        <button onClick={() => onDelete(todo.id)}>
          X
        </button>
      )}
    </div>
  );
}
