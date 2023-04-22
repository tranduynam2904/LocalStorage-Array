import './App.css';
import { useState, useEffect } from "react";
function App() {
  const [Name, setName] = useState("");
  const [old, setOld] = useState("");
  const example = [{ name: "cat", old: 5 }]
  const handle_change_name = (e) => {
    setName(e.target.value)
  }
  const handle_change_old = (e) => {
    setOld(e.target.value)
  }
  const [animal, setAnimal] = useState(() => {
    let animalLocal;
    if (localStorage.getItem("animal")) {
      animalLocal = JSON.parse(localStorage.getItem("animal"))
    }
    else{
      animalLocal = example;
    }
    return animalLocal;
  })
  const handle_add_animal = () => {
    setAnimal((pre) => {
      const newanimal = [...pre, { name: Name, old: old }]
      localStorage.setItem("animal", JSON.stringify(newanimal));
      return newanimal;
    })
  };
  return (
    <div>
      <h1>Da up lan 2</h1>
      <input type='text' placeholder='Name' value={Name} onChange={handle_change_name} />
      <input type='text' placeholder='Old' value={old} onChange={handle_change_old} />
      <ul>
        {animal.map((st, key) => {
          return <li>{st.name + " " + st.old}</li>
        })}
      </ul>
      <button onClick={handle_add_animal}>Add Animal</button>
    </div>
  )
}

export default App;
