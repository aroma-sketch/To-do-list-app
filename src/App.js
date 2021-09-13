import React ,{useState, useEffect} from 'react';
import "./App.css";
import TodoList from './Components/TodoList';


function App ()  {
  const [count, setCount] = useState(null);
  useEffect(() => {
    fetch("https://api.countapi.xyz/update/aroma1/todoapp/?amount=1")
      .then((res) => res.json())
      .then((json) => setCount(json.value));
  }, []);

  return (
    <div>
    <div className="visit">
    <span> &lt;</span>
                  <span  className="logo-name">Aroma gupta</span>
                  <span >/&gt;</span>
    {count && <h3> {count} VISITORS </h3>}
</div>
  <div className="todo-app">
    <TodoList/> 
  </div>
  </div>
  
  )
}

export default App
