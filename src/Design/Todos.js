import React from "react";

export default function Todos() {
  const [todo, setTodo] = React.useState([
    { title: "title 1", discription: "discription 01" },
    { title: "title 1", discription: "discription 01" },
  ]);
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
