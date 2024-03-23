import  {useState, useEffect, createContext, useContext} from 'react'
import  {v4 as uuidv4} from 'uuid';

const TodosContext =  createContext(null)

export const TodosProvider = ({children}) => {

const [todos, setTodos] = useState(getInitialTodos());

    useEffect(()=>{
        //storing todos items
        const temp = JSON.stringify(todos);
        localStorage.setItem('todos', temp);
    }, [todos]);

    function getInitialTodos(){
        //getting stored todos
        const temp = localStorage.getItem('todos');
        const todosObj = JSON.parse(temp);
        return todosObj || [];
    }

    const addTodo = (title) => {
        //update state with user' input
         const newTodo= {
            id:uuidv4(),
            title: title,
            completed: false
         };

         setTodos([...todos, newTodo]);

    }


    const delTodo = (id) => {
        setTodos([
            ...todos.filter((todo) => {
                return todo.id !== id;
            })
        ])
    }

    const setUpdate = (updatedTitle, id) => {
        //Handle update here
        setTodos(
            todos.map((todo) => {
                if (todo.id === id ){
                    todo.title = updatedTitle
                }
                return todo;
            })
        );

    };

    const handleChange =(id) =>{
        setTodos((prevState) => 
            prevState.map((todo) => {
                if (todo.id == id) {
                    return{
                        ...todo,
                        completed: !todo.completed,
                    };
                }
                return todo;
            })
    );
    }

    return(
        <TodosContext.Provider
        value={{
                todos,
                handleChange,
                delTodo,
                addTodo,
                setUpdate
            }} 

         >
            {children}
        </TodosContext.Provider>
    );
};

export const useTodosContext = () => useContext(TodosContext);