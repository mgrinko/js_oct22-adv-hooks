import { Todo } from '../types/Todo'

type Props = {
  todo: Todo;
  onDelete: () => void;
};

export const TodoItem: React.FC<Props> = ({
  todo,
  onDelete,
}) => {
  return (
    <div className="todo">
      <input
        type="checkbox"
        defaultChecked={todo.completed}
      />

      {todo.title}

      <button onClick={onDelete}>
        X
      </button>
    </div>
  );
}
