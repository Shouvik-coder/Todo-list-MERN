import { useState } from "react";

function AddTodoForm({ handleSubmit }) {
  const [todo, setTodo] = useState("");
  const [desc, setDesc] = useState("");
  return (
    <div>
      <input
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        name="todo"
      />
      <input type="text"
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
        name="desc" />
      <button
        onClick={() => {
            // console.log({ todo: todo, desc: desc });
          handleSubmit({ todo: todo, desc: desc });
          setTodo("");
          setDesc("");
        }}
      >
        Submit
      </button>
    </div>
  );
}

export default AddTodoForm;
