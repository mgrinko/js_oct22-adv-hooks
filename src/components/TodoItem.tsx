import { Todo } from '../types/Todo'

type Props = {
  todo: Todo;
};

export const TodoItem: React.FC<Props> = ({ todo }) => {
  return (
    <div className="todo">
      <input
        type="checkbox"
        defaultChecked={todo.completed}
      />
      {todo.title}
    </div>
  );
}
