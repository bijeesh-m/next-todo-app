import { Todo } from '@/types/todo'
import { useState } from 'react'

type PageProps = {
    todo: Todo
    toggleTodo: Function
    deleteTodo: Function
    saveTodo: Function
}


const TodoItem = ({ todo, toggleTodo, deleteTodo, saveTodo }: PageProps) => {




    const [editMode, setEditMode] = useState(false);
    const [editTodoText, setEditTodoText] = useState("");

    const handleEditTodo = (todoText: string) => {
        setEditMode(true);
        setEditTodoText(todoText)
    }

    const handleSaveTodo = (id: string, editText: string) => {
        saveTodo(id, editText)
        setEditMode(false)
    }

    return (
        <div className='p-5 flex justify-between gap-5 '>
            <input checked={todo.isActive === false}  onChange={(e) => toggleTodo(todo.id, e.target.checked)} className=' relative -top-1' type="checkbox" name="" id="" />
            <div className=' w-full space-y-1'>
                {
                    editMode ? <input className=' border outline-none px-3 py-1 rounded ' type="text" value={editTodoText} onChange={(e) => setEditTodoText(e.target.value)} name="" id="" /> :
                        <h1 className={`font-bold   text-sm   ${todo.isActive === false && "text-gray-400 line-through"}`}>{todo.todoText}</h1>
                }
                <p className=' text-xs text-gray-500 font-semibold flex'><img src="calender.svg" width={10} alt="calender" /> {todo.date}</p>
            </div>
            <div className=' flex items-center gap-4'>
                {
                    editMode ? <button onClick={() => handleSaveTodo(todo.id, editTodoText)} className=' px-2 py-1 bg-green-600 text-white rounded-full h-fit'>Save</button> :
                        <img onClick={() => handleEditTodo(todo.todoText)} className=' cursor-pointer' src="pencil.svg" width={18} alt="edit-button" />
                }
                <img className=' cursor-pointer' onClick={() => deleteTodo(todo.id)} src="delete.svg" width={20} alt="delete-button" />
            </div>
        </div>
    )
}

export default TodoItem