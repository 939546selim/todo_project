import React from 'react'
import Todo from './Todo';

export default function ToDoDisplay({todoList, delitTodo, completeToggle}) {
    console.log(todoList)
  return (
    <div>
        {todoList.map((todoObj)=>{
            // return <Todo todoItem={todoObj.deta} id={todoObj.id} isComplete={todoObj.isComplete} delitTodo={delitTodo} completeToggle={completeToggle}/>
            return <Todo todoObj={todoObj} delitTodo={delitTodo} completeToggle={completeToggle} />

        })}
    </div>
  )
}
