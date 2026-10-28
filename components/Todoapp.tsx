"use client"
import { useState } from "react"
import TodoForm from "./TodoForm"
import TodoList from "./TodoList"
import { Todo } from "@/types/todo"



const Todoapp = () => {

  const [category, setCategory] = useState<string>("all")
  const [todos, setTodos] = useState<Todo[]>([])

  return (
    <div className=" flex flex-col gap-3">

      <h1 className=" text-2xl font-bold">
        My Todos
      </h1>
      <p className=" font-semibold text-gray-500">Stay organised and get this done!</p>
      <TodoForm setTodos={setTodos} />
      <TodoList setTodos={setTodos} todos={todos} category={category} setCategory={setCategory} />
    </div>
  )
}

export default Todoapp