import TodoItem from '@/components/TodoItem';
import { useTodosStore } from '@/store';
// import { useTodosContext } from '@/context/TodosContext';

const TodoList = ()=> {

//    const {todos} = useTodosContext();
const todos =  useTodosStore((state) => state.todos);
   
    return(
        <ul>
            {todos.map((todo) => (
                <TodoItem key={todo.id}  itemProp={todo} />
            ))}
        </ul>
       
    )

}

export default TodoList;