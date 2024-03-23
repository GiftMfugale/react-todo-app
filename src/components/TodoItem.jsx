import styles from "@/styles/TodoItem.module.css"
import { useState, useRef } from "react";
// import { useTodosContext } from "@/context/TodosContext";
import {AiFillEdit} from 'react-icons/ai';
import {FaTrash} from 'react-icons/fa'
import { useTodosStore } from "@/store";
import { useAuthContext } from "@/context/AuthContext";

const TodoItem = ({itemProp}) => {

    const editInputRef =  useRef(null);
    const [editTitle, setEditTitle] = useState(false);
    const handleChange = useTodosStore((state) => state.handleChange);
    const delTodo = useTodosStore((state) => state.delTodo);
    const setUpdate =  useTodosStore((state) => state.setUpdate)

    const {user} = useAuthContext();

    // const {handleChange, delTodo, setUpdate} = useTodosContext()


    const completedTodoStyle = {
        fontStyle: 'italic',
        color: '#595959',
        opacity: 0.4,
        textDecoration: 'line-through'
    };

    const editTitleStyles ={
        viewMode: {
            display: editTitle ? 'none' :'block'
        },

        editMode: {
            display: editTitle ? 'block': 'none'
        }
    };

    const handleEditing= () => {
        setEditTitle(true)

    }

    const handleEditedTitle = (e) => {
        if (e.key === 'Enter') {
            setUpdate(editInputRef.current.value, itemProp.id)
            setEditTitle(false);
        }
    }


        // let viewMode = {}
        // let editMode = {}

        // if (editTitle){
        //     viewMode.display = 'none';
        // }else{
        //     editMode.display = 'none';
        // }

      

        

   
    return (
        
            <li className={styles.item}>
                <div className={styles['content-input']}>
                {!itemProp.completed ? (
                <>
                <input
                 type="checkbox"
                 checked={itemProp.completed}
                 onChange={() => handleChange(itemProp.id)}
                 />
                 <span>
                {itemProp.title}
                </span>
                </>
                    ):(
                    <>
                    <input
                    type="checkbox"
                    checked={itemProp.completed}
                    disabled
                    />
                    <span style={completedTodoStyle}>
                        {itemProp.title}
                    </span>
                    </>

                    )}
                    
                    { user && (
                <button onClick={handleEditing}>
                    <AiFillEdit
                    color="blue"
                    
                    />
                    </button>
                    )}

                 <button onClick={() => delTodo(itemProp.id)} >
                    <FaTrash
                    color="red"
                    />
                    </button>
                 
                </div>
            
                <input
                type="text"
                ref={editInputRef}
                defaultValue={itemProp.title}
                // value={updateInput}
                className={styles['edit-title']}
                style={editTitleStyles.editMode}
                // onChange={(e) => setUpdateInput(e.target.value)}
                onKeyDown={handleEditedTitle}

                />
                
                </li>
    
        
    )
}

export default TodoItem;