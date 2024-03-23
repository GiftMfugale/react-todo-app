import { useState } from "react";
import {FaPlusCircle}  from 'react-icons/fa';
import { useTodosStore } from "@/store";
// import { useTodosContext } from "@/context/TodosContext";


const TodoInput = ( {}) => {
     const [todoTitle, setTodoTitle] = useState("");
     const [message, setMessage] = useState("");

     const addTodo = useTodosStore((state) => state.addTodo);

    //  const {addTodo} = useTodosContext()

     const handleSubmit =(e) => {
        e.preventDefault();
        if (todoTitle.trim()){
        
        addTodo(todoTitle);
        setTodoTitle("");
        setMessage("");
     }else{
        setMessage('Please add todo item');
     }
    }

 

    
    return(
        <>
        <form onSubmit={handleSubmit} className="form-container">
            <input 
            type="text"
            placeholder="Add todo.."
            value={todoTitle}
            onChange={(e) => setTodoTitle(e.target.value)}
            className="input-text"
             
             />
            <button className="input-submit">
                <FaPlusCircle />
            </button>
        </form>
        <span className="submit-warning-message">{message}</span>
        </>
            
    
    )

}

export default TodoInput;