import { useState } from "react";

import List from "./List";
import Item from "./Item";

export default function App() {
  const [data, setData] = useState([
    { id:1, content: "Hello, World!", name: "Alvin" },
    { id:2, content: "React is fun.", name: "Bunny" },
    { id:3, content: "Yay, interesting.", name: "Zayar" },
  ]);

  const remove = id => {
    setData(data.filter(item => item.id !== id));
  }

  return (
    <div style={{ maxWidth: 600, margin: "20px auto" }}>
      <h1>Yaycha</h1>
      <List>
        {data.map(item => {
          return <Item key={item.id} item={item} remove={remove} />
        })}
        <li style={{ padding: 10, borderBottom: "1px solid #ddd", textAlign: "center" }}>
          Break Line Bunny
        </li>
        { data.map(item => <Item key={item.id} item={item} remove={remove} />) }
        <li style={{ padding: 10, borderBottom: "1px solid #ddd", textAlign: "center" }}>
          Break Line Bunny
        </li>
        {data.map(item => (
          <Item key={item.id} item={item} remove={remove} />
        ))}
        <li style={{ padding: 10, borderBottom: "1px solid #ddd", textAlign: "center" }}>
          Break Line Bunny
        </li>
      </List>
    </div>
  )
}