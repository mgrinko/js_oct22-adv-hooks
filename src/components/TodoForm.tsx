import { useState } from 'react';
import { Todo } from '../types/Todo'

type Props = {
  onSubmit: (todo: Todo) => void,
};

export const TodoForm: React.FC<Props> = ({ onSubmit }) => {
  const [title, setTitle] = useState('');
  const [completed, setCompleted] = useState(false);

  return (
    <form
      className="todo-form"
      onSubmit={(event) => {
        event.preventDefault();

        onSubmit({
          id: Date.now(),
          title,
          completed,
        });
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

      <button type="submit">Add</button>
    </form>
  );
}
