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
     <h1 style={{color:'white'}}>Todo List</h1>      
        <div className='todo-input-container'>
            <input type="text" className='todo-input' placeholder='Input a new todo' value={newItem} onChange={(e)=>setNewItem(e.target.value)} />
            <button className='todo-add-btn' onClick={handleAdd}>Add Todo</button>
        </div>
        <span style={{textAlign:'center', color:'white', fontSize:'25px', marginTop:'10px', textDecorationLine:'underline'}}>Your Todos</span>
         <div className='todos-container'> 
            <ul className='todo-ul'>
                {todos.length > 0 ? (
                todos.map((todo, index) => (
                    <li key={index} >
                        <div className='todo-items-container'>
                            <span className='todos'>{todo}</span>
                            <button className='todo-delete-btn' onClick={() => handleDelete(index)}>x</button>
                    </div>
                    </li>
                ))
                ) : (
                <p style={{color:'white'}}>No Todos Added Yet</p>
                )}
            </ul>   

         </div>
 
    </div>
  )
}

export default Todo