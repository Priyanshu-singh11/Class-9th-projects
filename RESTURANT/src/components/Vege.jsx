import React,{useState,useEffect} from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Carousel from 'react-multi-carousel';
import {Link} from 'react-router-dom';

import 'react-multi-carousel/lib/styles.css';
import Loader from '../Loader.jsx';
const Vege = ()=>{
  const [vege,setVege] = useState([])
  const [Load,setLoad] = useState(true)
  const check = localStorage.getItem("Vege")
  
  const getVegeData = async()=>{
    if(check){
      setLoad(false)
    setVege(JSON.parse(check))
      
    }else{
    let res = await fetch(`https://api.spoonacular.com/recipes/random?number=9&tage=vegeterian&apiKey=${import.meta.env.VITE_API_KEY}`)
    let vegeData = await res.json()
    setVege(vegeData.recipes)
      setLoad(false)
    localStorage.setItem("Vege",JSON.stringify(vegeData.recipes))
    }
  }
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
}
    
  useEffect(()=>{
    getVegeData()
  },[])
  return(
    <>
      <div>
        <div className="popularCrou">
          <h3 className="title">
            Vegeterian
          </h3>
        <Carousel responsive={responsive}
          draggable={true}
          swipeable={true}
          containerClass="carousel-container"
          showDots={true}
          arrows={true}
          >
            {!Load && 
          vege.map((elem)=>{
            return(
              <div key={elem.id}>
                <div className="vegeCard">
              <Link to={`/recipe/`+elem.id} style={{ textDecoration:'none'}}>
                <LazyLoadImage src={elem.image} className="vegeImg"/>
                  </Link>
                <div className="onImgTitle">
                  <p>{elem.title}</p>
                  
                </div>
                </div>
              </div>
            )
          })
        }
          </Carousel>
          </div>
        {
          Load && <Loader/>
        }
      </div>
    </>
  )
}
export default Vege;