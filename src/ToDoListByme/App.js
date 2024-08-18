import React, { useState } from 'react'
import ToDoFrom from './ToDoFrom';
import ToDoDisplay from './ToDoDisplay';

export default function App() {
  const [todoList, setTodoList] = useState([])

  function addTodo(todo) {
    setTodoList((prev) => {
      return [...prev, todo]

    })

  }
  function delitTodo(id){
    console.log( 'attampted to delit', id)
    // const filterArr=todoList.filter((__,i)=>{
    //   return i!==id

    // })
    // setTodoList(filterArr)
    setTodoList((prev)=>{
      const filterArr=prev.filter((todo,)=>{
        return todo.id!==id

      })
      return filterArr

    })



  }
  function completeToggle(id){
    setTodoList((prev)=>{
      const newArr=prev.map((todo)=>{
        // return todo.id!==id
        if(todo.id===id){
          return {...todo,isComplete:!todo.isComplete}

        }
        return todo

      })
      return newArr

    })
    

  }
  return (
    <>
      <ToDoFrom addTodo={addTodo} />
      <ToDoDisplay todoList={todoList} delitTodo={delitTodo} completeToggle={completeToggle} />

    </>

  )
}
