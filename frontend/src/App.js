import Todo from "./components/Todo.jsx";
import { useEffect, useState } from "react";
import AddTodoForm from "./components/AddTodoForm.jsx";
import "./App.css";

function App() {
  const [data, setData] = useState([]);

  async function handleSubmit(bodyData) {
    const response = await fetch("http://localhost:4000/todos", {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify(bodyData),
    });

    const parsedResponse= await response.json();
    setData((s)=>[...s,...parsedResponse])
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
      <ul>
        {data.map((task) => (
          <Todo todo={task.todo} desc={task.desc} key={task._id} />
        ))}
      </ul>
      <AddTodoForm handleSubmit={handleSubmit}/>
    </>
  );
}

export default App;
