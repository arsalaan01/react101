import { useState } from "react";
import '../todostyle.css'

const Todo = () => {
    const [todos, setTodos] = useState([]);
    const [input, setInput] = useState('');

    const handleSubmit = () => {
        if(input.trim()==='')
            return alert("Please add your task");
        setTodos(todos => {
            return todos.concat({
                text: input,
                id: Math.floor(Math.random()*10),
            })
        })
        setInput('');
    }

    const deleteToDo = (id) => setTodos(todos => todos.filter(t => t.id !== id));

      return (
    <div className="container">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add a new task"
          className="input"
        />
        <button onClick={handleSubmit}>Submit</button>

        <ul className="todos-list">
            {todos.map(({text,id}) => (
                <li key={id} className="todo">
                <span>{text}</span>
                <button className='close' onClick={()=>deleteToDo(id)}>x</button>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default Todo