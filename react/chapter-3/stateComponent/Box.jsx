import { useState } from "react";

export default function Box() {
  const [state, setState] = useState("green");

  return (
    <div
      style={{
        width: 300,
        height: 200,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 10,
        backgroundColor: state,
      }}
    >
      <button onClick={() => setState("red")}>Red</button>
      <button onClick={() => setState("green")}>Green</button>
    </div>
  );
}


function hello() {
    // do something
}

function Button() {
    return <button onClick={hello}>
        Button
    </button>
}

