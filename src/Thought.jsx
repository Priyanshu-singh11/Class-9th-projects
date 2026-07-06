import React,{useState,useEffect} from 'react'
import LazyLoad from 'react-lazy-load'
import Loader from './Loader.jsx'
import './Thought.css'
const Thought = ()=>{
  const [data,setData] = useState([])
  const [load, setLoad] = useState(true)
  const [sAdd,setSAdd] = useState(8);
  
  const Getuserdata = async() => {
    const response = await fetch('https://type.fit/api/quotes');
    let data = await response.json()
    let realData = data.slice(0,sAdd)
    setData(realData)
    setLoad(false)
  }
  
  useEffect(() => {
    Getuserdata()
  },[sAdd]);
  return(
    <div>
    
      <div className="container-of-quotes">
      <h1 className="thought container mt-4">Thoughts</h1>
      <div className="q-row">
         
         {!load && 
           data.map((elem)=>{
             return(
             <div key={elem.text}>
              <div className="box shadow d-flex justify-content-start align-items-center m-2  p-2">
                
          <LazyLoad height={100}>
            <img src={"https://picsum.photos/100?random="+ elem.author} alt="image"/>
          </LazyLoad>
                
          <p className="px-2 py-2">{elem.text}</p>
        </div>
        
             </div>
             )
           })
         }
        
        { load && <Loader/> }
        
      </div>
      </div>
      <button className='btn mx-4 my-3 shadow' onClick={()=>setSAdd(sAdd+8)}>More
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-arrow-right mx-1" viewBox="0 0 16 16">
  <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
</svg>
      
      </button>
    </div>
    )
}
export default Thought
//https://zenquotes.io/api/quotes!
//2https://type.fit/api/quotes
//https://picsum.photos/v2/list?page=2&limit=100