import React,{useState,useEffect} from 'react';
import {useParams,Link} from 'react-router-dom';
import Error from '../Error.jsx';
import Loader from '../Loader'
import { LazyLoadImage } from 'react-lazy-load-image-component';
const SearchedTerm = ()=>{
  const [SearchedData,setSearchedData] = useState([])
  const [failed,setFailed] = useState(false)
  const [Load,setLoad] = useState(true)
  const params = useParams()
  async function SearchData() {
     try {
        let fetchSearch = await fetch(`https://api.spoonacular.com/recipes/complexSearch?query=${params.search}&number=15&apiKey=923bba7e2b2f4396be21b6c5eb9281e8`)
       let js = await fetchSearch.json()
       
       if(js.results.length==[]){
         setLoad(false)
         setFailed(true)
         setSearchedData()
         
       }else{
         setFailed(false)
         setLoad(false)
        setSearchedData(js.results)
       }
     } catch (error) {
        console.log("ERROR")
        setFailed(true)
       setLoad(false)
     }
  }
  useEffect(()=>{
    SearchData()
  },[params.search])
  return(
    <>
      {!failed && <div>
        <h3 className="params">{params.search}</h3>
        <div className="cards">
          {!Load && 
            SearchedData.map((elem)=>{
              return(
                <>
                  <div key={elem.id}>
                  <Link to={`/recipe/`+elem.id} style={{ textDecoration:'none'}}>
                     <div className="card">
            
            <LazyLoadImage src={elem.image} alt=""/>
              <h5 className="search">{elem.title}</h5>
        </div>
                       </Link>
                  </div>
                </>
              )
            })
          }
        </div>
        {Load && <Loader/>}
      </div>
      }
      {failed && <Error/>}
    </>
  )
}
export default SearchedTerm