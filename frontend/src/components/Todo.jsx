import { useState } from "react";
import { Card, CardHeader, CardContent, Icon } from "semantic-ui-react";

function Todo({ id, todo, onComplete, isComplete, onDelete }) {
  const [isCompleted, setIsCompleted] = useState(isComplete);

  return (
    <Card
      style={{
        margin: "0.25em",
        backgroundColor: isCompleted ? "lightgreen" : "#E6E6E6",
        wordWrap: "break-word",
      }}
      raised
      color="black"
      onClick={() => {
        onComplete(!isCompleted, id);
        setIsCompleted((s) => !s);
      }}
    >
      <CardContent>
        <CardHeader
          style={{
            textDecoration: isCompleted && "line-through",
          }}
        >
          {todo}
        </CardHeader>
        {/* <Checkbox checked={isCompleted} style={{ float: "right" }} /> */}

        <Icon
          name="trash alternate"
          color="red"
          style={{ float: "right" }}
          onClick={(e) => {
            e.stopPropagation();
            if (window.confirm("Are you sure you want to delete")) {
              onDelete(id);
            }
          }}
          size="large"
        />
      </CardContent>
    </Card>
  );
}

export default Todo;
