import React,{useState,useEffect} from 'react';
import {useNavigate} from 'react-router-dom';

const Search = ()=>{
  const [input,setInput] = useState('')
  const navigate = useNavigate()
  const handleSubmit = (e)=>{
    e.preventDefault();
    navigate('/searched/'+input)
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="input-area">
    <div className="input-box">
        <input type="text" placeholder="Search dilicious items ... " onChange={(e)=>setInput(e.target.value)} value={input}/>
    </div>
</div>
      </form>
    
    </>
  )
}
export default Search