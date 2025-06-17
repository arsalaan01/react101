import React from 'react'

const TodoList = () => {

// This component will render a list of todos

const [todos, setTodos] = React.useState([]);

const [inputValue, setInputValue] = React.useState('');

const handleSubmit = (e) => {
  e.preventDefault();
  console.log(e);
  
  if (inputValue.trim() === '') return; // Prevent adding empty todos
  setTodos([...todos, inputValue]);
  setInputValue(''); // Clear input field after adding todo
}
const handleInputChange = (e) => {
  setInputValue(e.target.value);
}    


  return (
    <div>
        <h1>ToDo List - Create a Basic TO DO List</h1>
        <form onSubmit = {handleSubmit}>
            <input type="text" value={inputValue} onChange={handleInputChange}  placeholder='Add a new Todo' />
            <button type="submit">Add Todo</button>
        </form>

        <ul>
            {todos.map((todo, index) => (
                <li key={index}>{todo}</li>
            ))}
        </ul>
    </div>
  )
}

export default TodoList