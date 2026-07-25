import React ,{useState} from 'react';
import Api from './Api.jsx'
const Home = ()=>{
  const [data,setData] = useState(Api);
  const [categ,setCateg] = useState(data);
  const [inp,setInp] = useState("")
  const Mode = (name)=>{
    const arr = [];
   data.filter((el)=>{
     if(el.type==name){
       arr.push(el);
     }
   })
   setCateg(arr)
   
  }
  const handleChange = (e)=>{
    const value = e.target.value;
    setInp(value);

    if (value === "") {
      setCateg(data);
    } else {
      
      const filteredData = data.filter(el => el.name.toLowerCase().includes(value.toLowerCase()));
      console.log(filteredData)
      setCateg(filteredData);
    }
    
    
    
   }
  
  
  return(
    <div>
    <div className="max-w-Nav">
    <div className="inpBox">
          <input type="text" placeholder="tags" onChange={handleChange} value={inp}/>
    </div>
        <div className="navbar">
            <div className="modes">
                <button onClick={()=>setCateg(data)}>All</button>
                <button onClick={()=>Mode("Breakfast")}>Breakfast</button>
                <button onClick={()=>Mode("Lunch")}>Lunch</button>
                <button onClick={()=>Mode("Desi")}>Desi</button>
            </div>
        </div>
    </div>
    
      <div className="container">
    {
    
     categ.map((elem,ind)=>{
        return(
        <div key={elem.desc}>
           <div className="row">
        <div className="card">
            <div className="card-head">
                <div className="category-num">{ind+1}</div>
            <span className="card-type">{elem.type}</span>
            </div>
            <h1 className="card-title">{elem.name}</h1>
            <p className="card-descrip">
               
               {elem.desc.slice(0,111)
               }
               ...
            </p>
            <img src={elem.img} alt="Image" className="card-img"/>
            <br/>
            <a href="#"><button className="card-btn">Read more</button></a>
        </div>
    </div>
        </div>
        )
      })
    }
    </div>
    </div>
    );
}
export default Home;