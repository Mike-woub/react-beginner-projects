import React from 'react'
import { useState } from 'react';

const Todo = () => {
    const [todos,setTodos]=useState([]);
    const [newItem, setNewItem]=useState('');
    const handleAdd=()=>{
        if (newItem.trim() !== '')
            {
              setTodos([...todos,newItem]);
              setNewItem('');
            }
    }
    const handleDelete=(indexToDelete)=>{
        setTodos(todos.filter((_, index)=>index !== indexToDelete))
    }


  return (
    <div className='todo-container'>         
        <div>
             <h1 style={{color:'white'}}>Todo List</h1>
            <input type="text" placeholder='Input a new todo' value={newItem} onChange={(e)=>setNewItem(e.target.value)} />
            <button onClick={handleAdd}>Add Todo</button>
        </div>
        <div className='todos-container'>
            <ul className='todo-ul'>{todos.map((todo, index)=>(
                <li key={index}>
                    {todo} 
                    <button onClick={()=>handleDelete(index)}>delete</button>
                </li>
            ))}</ul>
        </div>   
    </div>
  )
}

export default Todo