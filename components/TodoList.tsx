import React, { useMemo } from 'react'
import TodoItem from './TodoItem'
import { Todo } from '@/types/todo'

type PageProps = {
    category: string,
    setCategory: Function
    todos: Todo[]
}

const TodoList = ({ category, setCategory, todos }: PageProps) => {


    // const filteredTodos = useMemo(()=>{
    //     if (condition) {
            
    //     }
    //     return todos.filter((todo)=>todo.isActive)
    // },[])


    return (
        <div className=' pt-2'>
            <div className=' flex gap-2 font-semibold'>
                <button onClick={() => setCategory("all")} className={` px-5 text-xs py-2 border-gray-300 border ${category === "all" && "bg-blue-500 text-white"}  rounded-full `}>All</button>
                <button onClick={() => setCategory("active")} className={` px-5 text-xs py-2 border-gray-300 border ${category === "active" && "bg-blue-500 text-white"} rounded-full `}>Active</button>
                <button onClick={() => setCategory("completed")} className={` px-5 text-xs py-2 border-gray-300 border ${category === "completed" && "bg-blue-500 text-white"} rounded-full `}>Completed</button>
            </div>
            {
                todos.map((todo:Todo)=>{
                    return(
                        <TodoItem key={todo.id} todo={todo}/>
                    )
                })
            }
        </div>
    )
}

export default TodoList