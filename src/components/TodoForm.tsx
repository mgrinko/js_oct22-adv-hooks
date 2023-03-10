import { useState } from 'react';
import { Todo } from '../types/Todo'

type Props = {
  todo?: Todo;
  onSubmit: (todo: Todo) => void;
};

export const TodoForm: React.FC<Props> = ({ onSubmit, todo }) => {
  const [title, setTitle] = useState(todo?.title || '');
  const [completed, setCompleted] = useState(todo?.completed || false);

  return (
    <form
      className="todo-form"
      onSubmit={(event) => {
        event.preventDefault();

        onSubmit({
          id: todo?.id || Date.now(),
          title,
          completed,
        });

        setTitle('');
        setCompleted(false);
      }}
    >
      <input
        type="checkbox"
        checked={completed}
        onChange={e => setCompleted(e.target.checked)}
      />

      <input
        type="text"
        value={title}
        onChange={e => setTitle(e.target.value)}
      />

      <button type="submit">
        {todo ? 'Save' : 'Add'}
      </button>
    </form>
  );
}
