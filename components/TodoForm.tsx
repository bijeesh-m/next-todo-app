import { Todo } from '@/types/todo'
import { useState } from 'react'
import { nanoid } from 'nanoid'

type PageProps = {
    setTodos: Function
}

const TodoForm = ({ setTodos }: PageProps) => {


    const [todoText, setTodoText] = useState("")

    const handleAddTodo = () => {
        const newTodo: Todo = {
            id: nanoid(),
            date: new Date().toLocaleDateString(),
            isActive: true,
            todoText: todoText
        }

        setTodos((prev: Todo[]) => [...prev, newTodo])
        setTodoText("")
    }

    return (
        <div className='flex gap-2'>
            <input onChange={(e) => setTodoText(e.target.value)} value={todoText} className='border border-gray-400 outline-none w-full px-3 py-1 placeholder:text-sm rounded placeholder:font-semibold ' placeholder='Add a new task...' type="text" name="" id="" />
            <button onClick={handleAddTodo} className='whitespace-nowrap bg-blue-600 text-white font-semibold rounded  px-5 py-2 '> + Add</button>
        </div>
    )
}

export default TodoForm