import { useMemo } from 'react'
import TodoItem from './TodoItem'
import { Todo } from '@/types/todo'

type PageProps = {
    category: string,
    setCategory: Function
    todos: Todo[]
    setTodos: Function
}

const TodoList = ({ category, setCategory, todos, setTodos }: PageProps) => {

    const filteredTodos = useMemo(() => {
        if (category === "all") {
            return todos
        }
        if (category === "active") {
            return todos.filter((todo) => todo.isActive === true)
        }
        if (category === "completed") {
            return todos.filter((todo) => todo.isActive === false)
        }
    }, [category, todos])


    const toggleTodo = (id: string, checked: boolean) => {
        setTodos(todos.map((todo: Todo) => {
            if (todo.id === id) {
                todo.isActive = !checked
            }
            return todo
        }))
    }

    const deleteTodo = (id: string) => {
        setTodos(todos.filter((todo: Todo) => todo.id !== id))
    }


    const saveTodo = (id: string, editText: string) => {

        setTodos(todos.map((todo: Todo) => {
            if (todo.id === id) {
                todo.todoText = editText
            }
            return todo
        }))

    }



    return (
        <div className=' pt-2'>
            <div className=' flex gap-2 font-semibold'>
                <button onClick={() => setCategory("all")} className={` px-5 text-xs py-2 border-gray-300 border ${category === "all" && "bg-blue-500 text-white"}  rounded-full `}>All</button>
                <button onClick={() => setCategory("active")} className={` px-5 text-xs py-2 border-gray-300 border ${category === "active" && "bg-blue-500 text-white"} rounded-full `}>Active</button>
                <button onClick={() => setCategory("completed")} className={` px-5 text-xs py-2 border-gray-300 border ${category === "completed" && "bg-blue-500 text-white"} rounded-full `}>Completed</button>
            </div>
            {
                filteredTodos?.map((todo: Todo) => {
                    return (
                        <TodoItem  saveTodo={saveTodo}  deleteTodo={deleteTodo} toggleTodo={toggleTodo} key={todo.id} todo={todo} />
                    )
                })
            }
        </div>
    )
}

export default TodoList