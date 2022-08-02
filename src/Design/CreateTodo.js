import React from "react";
import Axios from "axios";

export default function CreateTodo() {
  const [title, setTitle] = React.useState("");
  const [discription, setDiscription] = React.useState("");
  const createTodo = () => {
    Axios.post("http://localhost:3001/createTodo", {
      title: title,
      discription: discription,
    }).then((responce) => {
      alert("Todo Created");
    });
  };
  return (
    <div>
      <div style={{ padding: "10px" }}>
        <input
          type="text"
          placeholder="title"
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="discription"
          onChange={(e) => setDiscription(e.target.value)}
        />
        <button onClick={createTodo} style={{ margin: "10px 20px" }}>
          Create Todo
        </button>
      </div>
    </div>
  );
}
