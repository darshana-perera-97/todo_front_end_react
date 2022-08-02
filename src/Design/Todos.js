import React from "react";
import Axios from "axios";

export default function Todos() {
  const [todo, setTodo] = React.useState([]);
  React.useEffect(() => {
    Axios.get("http://localhost:3001/getTodos").then((responce) => {
      setTodo(responce.data);
    });
  }, []);
  return (
    <div style={{ padding: "10px 80px" }}>
      {todo.map((todo) => {
        return (
          <div
            style={{
              background: "#c9e1ff",
              padding: "10px",
              marginTop: "20px",
            }}
          >
            <p style={{ margin: "0px", fontSize: "20px", fontWeight: "500" }}>
              Title : {todo.title}
            </p>
            <p style={{ margin: "0px" }}>Discription : {todo.discription}</p>
          </div>
        );
      })}
    </div>
  );
}
