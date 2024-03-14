import Todo from "./components/Todo.jsx";
import { useEffect, useState } from "react";
import AddTodoForm from "./components/AddTodoForm.jsx";
import { GridColumn } from "semantic-ui-react";

import "./App.css";

function App() {
  const [data, setData] = useState([]);

  async function handleTodoFormSubmit(bodyData) {
    const response = await fetch("http://localhost:4000/todos", {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify(bodyData),
    });

    const parsedResponse = await response.json();
    setData((s) => [...s, ...parsedResponse]);
  }

  async function handleTodoComplete(isCompleted, id) {
    await fetch(`http://localhost:4000/todo/done/${id}`, {
      method: "PUT",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({ completed: isCompleted }),
    });
  }

  async function handleTodoDelete(id) {
    const response=await fetch(`http://localhost:4000/todo/delete/${id}`, {
      method: "DELETE",
    });
    const parsedData=await response.json();
    setData((s)=>parsedData);
  }

  useEffect(function () {
    async function fetchAPI() {
      try {
        const temp = await fetch("http://localhost:4000");
        const jsonData = await temp.json();
        // console.log(jsonData);
        setData(jsonData);
      } catch (error) {
        console.log(error);
      }
    }
    fetchAPI();
  }, []);

  return (
    <>
      <div className="list" columns={1}>
        {data.map((task) => (
          <Todo
            todo={task.todo}
            isComplete={task.completed}
            key={task._id}
            id={task._id}
            onComplete={handleTodoComplete}
            onDelete={handleTodoDelete}
          />
        ))}
      </div>
      <AddTodoForm onSubmit={handleTodoFormSubmit} />
    </>
  );
}

export default App;
