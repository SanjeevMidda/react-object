import { useState } from "react";
import "./index.css";

function App() {
  const [fruit, setFruit] = useState({
    name: "strawberries",
    color: "red",
    quantity: 7,
  });

  const [status, setStatus] = useState(true);
  const [input, setInput] = useState("");

  let view = () => {
    return (
      <div className="view">
        <h1>
          <span>name </span>
          {fruit.name}
        </h1>
        <h1>
          <span>color </span>
          {fruit.color}
        </h1>
        <h1>
          <span>quantity </span>
          {fruit.quantity}
        </h1>
      </div>
    );
  };

  let edit = () => {
    return (
      <div className="edit">
        <h1>EDIT</h1>
        <input
          type="text"
          value={input}
          placeholder="enter new name"
          onChange={(e) => {
            setInput(e.target.value);
            setFruit({ ...fruit, name: input });
          }}
        />
      </div>
    );
  };

  return (
    <div className="App">
      {status ? view() : edit()}

      <div className="editButton" onClick={() => setStatus(!status)}>
        E
      </div>
    </div>
  );
}

export default App;
