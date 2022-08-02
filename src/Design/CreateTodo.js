import React from "react";
import Axios from "axios";

export default function CreateTodo() {
  const [name, setName] = React.useState("");
  const [age, setAge] = React.useState(0);
  const [username, setUsername] = React.useState("");
//   React.useEffect(() => {
//     Axios.get("http://localhost:3001/getUsers").then((responce) => {
//       setList(responce.data);
//     });
//   }, []);
  const createUser = () => {
    Axios.post("http://localhost:3001/createUser", {
      name: name,
      age: age,
      username: username,
    }).then((responce) => {
      alert("user Created");
    });
  };
  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="name"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="age"
          onChange={(e) => setAge(e.target.value)}
        />
        <input
          type="text"
          placeholder="username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <button onClick={createUser}>Create user</button>
      </div>
    </div>
  );
}
