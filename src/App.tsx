import { useCallback, useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';

import './App.css';
import { Todo } from './types/Todo';


export function App() {
  const [count, setCount] = useState(0);



  return (
    <main className="App">
      <nav>
        <NavLink to="/todos">Todos</NavLink>
        <NavLink to="/schedule">Schedule</NavLink>
        <NavLink to="/archive">Archive</NavLink>
      </nav>

      <button onClick={() => setCount(x => x + 1)}>{count}</button>

      <Outlet />
    </main>
  );
}
