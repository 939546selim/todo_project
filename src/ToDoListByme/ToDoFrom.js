import React, {useState} from  'react'

export default function ToDoFrom({addTodo}) {
    const[todoValue, setTodoValue]=useState("");
    

    function handletodovalue(e){
        setTodoValue(e.target.value)


    }

    function handleSubmitForm(e){
        e.preventDefault()
        if(todoValue.trim()===''){
            alert('plese write todo')
            return

        }
        const todoObj={
            deta:todoValue,
            id:Date.now(),
            isComplete:false
        }
        addTodo(todoObj)
      
        setTodoValue("")


    }
  return (
    <>
        <form action="">
            <input type="text" name='todo' value={todoValue} onChange={handletodovalue} />
            <button onClick={handleSubmitForm}>Add todo</button>
        </form>
    
    </>
    
  )
}
