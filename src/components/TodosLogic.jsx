
import TodoInput from "@/components/TodoInput";
import TodoList from "@/components/TodoList";
// import  {TodosProvider} from '@/context/TodosContext'

// import {v4 as uuidv4} from "uuid";

  const TodosLogic = () => {

    

    return(
        <div>
         <TodoInput />
         <TodoList  />
        </div>
    );

};

export default TodosLogic;