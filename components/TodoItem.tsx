import { Todo } from '@/types/todo'
import React from 'react'

type PageProps = {
    todo: Todo
}


const TodoItem = ({ todo }: PageProps) => {
    return (
        <div className='p-5 flex justify-between gap-5 '>
            <input className=' relative -top-1' type="checkbox" name="" id="" />
            <div className=' w-full space-y-1'>
                <h1 className='font-bold   text-sm'>{todo.todoText}</h1>
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