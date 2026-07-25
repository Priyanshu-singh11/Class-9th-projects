import React, { useState, useEffect } from 'react';

const Todo = () => {
    const [input, setInput] = useState('')
    const [data, setData] = useState([]);
    
    useEffect(()=>{
      const StorageData = JSON.parse(localStorage.getItem('todos'));
      
    if(StorageData) {
      setData(StorageData)
    }
    
    
    },[])
    
    useEffect(()=>{
      localStorage.setItem('todos', JSON.stringify(data));
    },[data]);
    
   
      const AddTodo = () => {
        
      if(input){
        const RawData = {
        task: input,
        textDecoration:"none",
        id: Math.random().toString(),
        color: "black",
        completed:false
      };
      setData([...data, RawData]);
      setInput("");
      }
      
      
    
   
    }
    
    const handleChange = (id, el) => {
        if (el.completed) {
          setData((prev)=>
            prev.map((elem)=>
              elem.id === id ? {...elem,completed:false,textDecoration:'none',color:'black'}:elem
             
            )
          )
        }
        else{
          setData((prev)=>
            prev.map((elem)=>
              elem.id===id?{...elem
              ,completed:true,textDecoration:'line-through green',color:"red"}:elem
            )
          )
        }
        
    }
    const handleRemove = (id)=>{
      let filtered = data.filter((el)=>{
        return el.id!=id
      })
      setData(filtered)
    }
    const handleUpdate = (el)=>{
      setInput(el.task)
      handleRemove(el.id)
    }
   
          return(
            <div>
       <div className="navbar">
        <pre> TODO-App </pre>
       </div>
      
      
      <div className="wrap">
        <div className="input-box">
        <div className="fake-inp">
            <input type="text"
            placeholder="Enter text"
            value={input}
            onChange={(e)=>setInput(e.target.value)}/>
            <button className="enter" onClick={AddTodo}>Enter</button>
        </div>
    </div>
     <div className="data-section">
        <pre>{data[0]?'List':<center><h2>Add todos</h2></center>}</pre>
        {
          data.map((el,ind)=>{
            return(
            <div key={el.id}>
               <div className="item">
            <input type="checkbox" checked={el.completed} onChange={()=>handleChange(el.id,el)}/>
           <p style={{textDecoration:el.textDecoration,color:el.color}}>{el.task}</p>
           {el.completed && <div className="btns">
                <div className="up-btn">
                    <button onClick={()=>handleUpdate(el)}>Update</button>
                </div>
                <div className="count">
                    <button>{ind+1}</button>
                </div>
                <div className="rem-btn">
                    <button onClick={()=>handleRemove(el.id)}> Remove</button>
                </div>
            </div>
           }
           
        </div>
            </div>
            )
          })
        }
      </div>
    </div>
    
    
    
   </div>

          );
        }
 export default Todo;
 