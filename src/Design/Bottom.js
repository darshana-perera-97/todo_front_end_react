import React from "react";
import CreateTodo from "./CreateTodo";

export default function Bottom() {
  return (
    <div
      style={{
        bottom: "0",
        position: "absolute",
        background: "#04235c",
        width: "100%",
      }}
    >
      <p style={{ margin: "0px", padding: "8px 40px", color: "white" }}>
        <CreateTodo />
      </p>
    </div>
  );
}
