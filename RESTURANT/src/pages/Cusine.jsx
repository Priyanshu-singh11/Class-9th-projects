import React,{useState,useEffect} from 'react';
import Loader from '../Loader.jsx';
import {useParams,Link} from 'react-router-dom'
import {motion} from 'framer-motion';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Failed from '../Failed.jsx';

const Cusine = ()=>{
  const [cusine,setCusine] = useState([])
  const [Load,setLoad] = useState(true)
  const [failed,setFailed] = useState(false)
  const params = useParams()
  async function getCusineData() {
    setLoad(true)
    const check = localStorage.getItem(`Cusine${params.type}`)
  if(check){
    setLoad(false)
    setFailed(false)
    setCusine(JSON.parse(check))
  }else{
    setLoad(true)
     try {
        let res = await fetch(`https://api.spoonacular.com/recipes/complexSearch?cuisine=${params.type}&number=15&apiKey=${import.meta.env.VITE_API_KEY}`)
    let cusineData = await res.json()
       setFailed(false)
    setLoad(false)
    setCusine(cusineData.results)
      localStorage.setItem(`Cusine${params.type}`,JSON.stringify(cusineData.results))
     } catch (error) {
        console.log(`Failed`);
       setFailed(true)
     }
     
  
  }
  }
  useEffect(()=>{
    getCusineData()
  },[params.type])
  return (
    <>
      {!failed && 
        <div>
      <motion.div animate={{
      opacity:1
      }}
        initial={{opacity:0}}
        exit={{opacity:0}}
        transition={{duration:1}}>
      <div className="cuisine">
              {!Load && 
        cusine.map((elem)=>{
          return(
            <div key={elem.id}>
            
        <div className="cuisine-card">
            <LazyLoadImage src={elem.image} alt="iamge"/>
            <Link to={`/recipe/`+elem.id} style={{ textDecoration:'none'}}>
              <strong style={{ textDecoration:'none'}}>{elem.title}</strong>
            </Link>
        </div>
            </div>
      
          )
        })
              }
              </div>
        </motion.div>
      {
        Load && <Loader/>
      }
    </div>
      }
      {failed && <Failed/>}
    </>
  )
}
export default Cusine