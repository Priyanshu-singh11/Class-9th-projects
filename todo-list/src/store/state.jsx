import React,{createContext,useState} from 'react'
export const StateContext = createContext(null)
export const StateProvider=(props)=>{
  const [todo,setTodos] = useState({name:"potter"})
  
  return(
    <>
    <StateContext.Provider value={{todo,setTodos}}>
      {props.children}
    </StateContext.Provider>
    </>
  )
}


export default StateProvider;