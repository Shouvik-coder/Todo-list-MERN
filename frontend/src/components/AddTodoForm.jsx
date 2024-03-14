import { useState } from "react";
import { Button, FormGroup, Form, FormInput } from "semantic-ui-react";

function AddTodoForm({ onSubmit }) {
  const [todo, setTodo] = useState("");

  return (
    <>
      <Form className="todoForm">
        <FormGroup>
          <FormInput
            placeholder="Enter your todo"
            type="text"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
            name="todo"
          />

          <Button
            positive
            onClick={() => {
              // console.log({ todo: todo, desc: desc });
              if (todo) {
                onSubmit({ todo: todo });
                setTodo("");
              } else {
                alert("Please enter some todo");
              }
            }}
          >
            Add
          </Button>
        </FormGroup>
      </Form>
    </>
  );
}

export default AddTodoForm;
