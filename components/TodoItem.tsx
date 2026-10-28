import { Todo } from '@/types/todo'

type PageProps = {
    todo: Todo
    toggleTodo: Function
}


const TodoItem = ({ todo, toggleTodo }: PageProps) => {
    return (
        <div className='p-5 flex justify-between gap-5 '>
            <input checked={todo.isActive === false} onChange={(e) => toggleTodo(todo.id, e.target.checked)} className=' relative -top-1' type="checkbox" name="" id="" />
            <div className=' w-full space-y-1'>
                <h1 className={`font-bold   text-sm   ${todo.isActive === false && "text-gray-400 line-through"}`}>{todo.todoText}</h1>
                <p className=' text-xs text-gray-500 font-semibold flex'><img src="calender.svg" width={10} alt="calender" /> {todo.date}</p>
            </div>
            <div className=' flex gap-4'>
                <img src="pencil.svg" width={18} alt="edit-button" />
                <img src="delete.svg" width={20} alt="delete-button" />
            </div>
        </div>
    )
}

export default TodoItem