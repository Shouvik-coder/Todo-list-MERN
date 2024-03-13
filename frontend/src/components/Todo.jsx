import { useState } from "react";

function Todo({ todo, desc }) {
  const [isCompleted, setIsCompleted] = useState(false);

  return (
    <li>
      <h3>{todo}</h3>
      <p>{desc}</p>
      <input
        type="checkbox"
        checked={isCompleted}
        onChange={() => {
          setIsCompleted((s)=>!s);
        }}
      />
    </li>
  );
}

export default Todo;
