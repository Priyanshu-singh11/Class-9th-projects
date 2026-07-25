import React,{useState,useEffect} from 'react';
import {useParams} from 'react-router-dom'
import Loader from '../Loader.jsx';
import Failed from '../Failed.jsx';
import { LazyLoadImage } from 'react-lazy-load-image-component';
const Recipe = ()=>{
  const [inform,setInform] = useState([])
  const [Load,setLoad] = useState(true)
  const [failed,setFailed] = useState(false)
  const [activeTab,setActiveTab] = useState('ingredients')
  const params = useParams()
  const getInform = async()=>{
    try {
      setLoad(true)
       let fetchInform = await fetch(`https://api.spoonacular.com/recipes/${params.id}/information?apiKey=${import.meta.env.VITE_API_KEY}`)
      let informData = await fetchInform.json()
      if(informData.length==0){
        setFailed(true)
      }
      else{
        setInform(informData)
        setLoad(false)
       setFailed(false)
      }
      
    } catch (err) {
       console.log("Error ")
      setFailed(true)
    }
    
  }
  useEffect(()=>{
    getInform()
  },[params.id])
  return(
    <>
      {!failed && <div>
      {
        !Load && 
                          <div className="overview">
        <div className="inform">
            <div className="inform-img">
                <h2>{inform.title}</h2>
            <LazyLoadImage src={inform.image} alt=""/>
            </div>
            <div className="content">
                <button className="ingre" onClick={()=>setActiveTab('ingredients')}>Ingredients</button>
              <span>  </span>
                <button onClick={()=>setActiveTab('instructions')}>Instructions</button>
              {
                activeTab === 'ingredients' && (
                  <div>
                <p 
                dangerouslySetInnerHTML={{__html:inform.summary}}>
              </p>
                    <strong
                dangerouslySetInnerHTML={{__html:inform.instructions}}></strong>
               </div>
             )
              }
              <div className="lists">
              {
                activeTab == 'instructions' && 
                              
                inform.extendedIngredients.map((elem)=>{
                  return(
                  
                      <div key={elem.original}>
                        
                          <li>{elem.original}</li>
                    
                      </div>
                  
                  )
                })
              
              }
                </div>
            </div>
        </div>
    </div>
      }
        {Load && <Loader/>}
    </div>}
      {failed && <Failed/>}
    </>
  )
}
export default Recipe;