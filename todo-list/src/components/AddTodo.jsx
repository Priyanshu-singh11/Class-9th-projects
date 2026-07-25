import React, { useState, useEffect } from 'react'
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from '../components/Navbar.jsx'
const AddTodo = () => {
  const [input, setInput] = useState("")
  const [todos, setTodo] = useState([])
  
  const update = (id, elem) => {
    if (elem.completed) {
      setTodo((prevTodos) =>
        prevTodos.map((todo) =>
          todo.id === id ? {
            ...todo,
            completed: false,
            textdecoration: "none",
            colorOfText: "black"
          }: todo
        )
      )
      toast.info("Complete work,then clicked on check button",{
        position:"bottom-right"
      })
    }
    else {
      setTodo((prevTodos) =>
        prevTodos.map((todo) =>
          todo.id === id ? {
            ...todo,
            completed: true,
            textdecoration: "line-through green",
            colorOfText: "red"
          } : todo
        )
      )
      toast.success("Congratulations, your work is successfull",{
        position:"bottom-right"
      })
    }

  }
 const updateTask = (elem, index) => {
    const deleteData = todos.filter((elem, id) => {
      return index !== id
    })
    setTodo(deleteData)
    setInput(elem.task)
    toast.info("update task in input",{
        position:"bottom-right"
      })
  }

  const addTodo = () => {
    if(input){
      const newTodo = {
      id: Math.random().toString(),
      task: input,
      textdecoration: "none",
      colorOfText: "black",
      completed: false
    }
    setTodo([...todos, newTodo])
    setInput("")
    toast.success("Your todo is added",{
      position:"bottom-right"
    })
  }
    else{
      toast.error("Write the task in input",{
        position:"bottom-right"
      })
    }
  }
  const deleteItem = (e, index) => {
    const deleteData = todos.filter((elem, id) => {
      return index !== id
    })
    setTodo(deleteData)
    toast.error("Your todo is deleted",{
        position:"bottom-right"
      })
  }
const clearAll = ()=>{
  setTodo([])
  
  }

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem('todos'));
    if(storedData) {
      setTodo(storedData)
    }
  }, []);


  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos])
  return (
    <div className="todo-body">
      <Navbar/>
      <ToastContainer theme="dark"/>
      <div className="input-area">
           <div className="input-box">
           <input 
           name="toggle"
           placeholder="Add todo lists"
           value={input}
           onChange={(e)=>
             setInput(e.target.value)
           }/>
          
             <button className="add-todo" onClick={addTodo}>Add</button>
          
    </div>
       </div>
       
        <div className="all-item-box">
        <div className="all-items">
          {
            todos && todos.map((elem,index)=>{
              return(
              <div key={elem.id}>
                        <div className="item">
            <div className="checkbox">
                <input checked={elem.completed}
                  className="check-box" type="checkbox" onChange={()=>update (elem.id,elem)}/>
            </div>
            <div className="item-text" style={{textDecoration:elem.textdecoration,
              color:elem.colorOfText
            }}>
                <p>{elem.task}</p>
            </div>
            <div className="item-btn">
                 
                 
                 {
                  elem.completed ? <button className="delete-todo" onClick={()=>deleteItem(elem,index)}>Delete</button> : <div></div>
                }
                <button className="update-btn" onClick={()=>updateTask(elem,index)}>Update</button>
            </div>
        </div>    
              </div>
              )
            })
          }
        </div>
        </div>
       
      <div className="rem-box">
        <button className="remove-all" onClick={()=>
         clearAll()
       }>clear-All</button>
      </div>
       
       
    </div>
  )
}
export default AddTodo;
