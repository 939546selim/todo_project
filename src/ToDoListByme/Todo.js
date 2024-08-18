import React from 'react'
import './Todo.css'

export default function Todo({delitTodo, completeToggle, todoObj }) {
        const{deta, id, isComplete}=todoObj
  return (
    <div className='todoui'>
        <div className={isComplete ?'buttonStyle1':'buttonStyle2'}>{deta}</div>
        <button onClick={()=>completeToggle(id)}>complete</button>
        <button onClick={()=>delitTodo(id)}>delit</button>
    
    </div>
  )
}
