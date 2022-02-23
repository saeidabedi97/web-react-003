import React, { useState } from "react";
import "./App.css";

const InnerComponent = ({ value }) => <pre>{value}</pre>;
const CounterButton = ({ onClick, children }) => (
  <button onClick={onClick}>{children}</button>
);

const App = () => {
  const [number, setNumber] = useState(0);
  const [name, setName] = useState("");

  return (
    <div className="App">
      <CounterButton onClick={() => setNumber(number - 1)}>-</CounterButton>
      <InnerComponent value={number} />
      <CounterButton onClick={() => setNumber(number + 1)}>+</CounterButton>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <pre>{JSON.stringify({ number, name })}</pre>
    </div>
  );
};

export default App;
