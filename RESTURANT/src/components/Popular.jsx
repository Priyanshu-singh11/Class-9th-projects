import React,{useState,useEffect} from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Carousel from 'react-multi-carousel';
import {Link} from 'react-router-dom';
import Failed from '../Failed.jsx';

import 'react-multi-carousel/lib/styles.css';
import Loader from '../Loader.jsx';
const Popular = ()=>{
  const [popular,setPopular] = useState([])
  const [Load,setLoad] = useState(true)
  
  const check = localStorage.getItem("popular")
  
  const getPopularData = async()=>{
    if(check){
    setLoad(false)
    setPopular(JSON.parse(check))
    }else{
    try {
       let res = await fetch(`https://api.spoonacular.com/recipes/random?number=9&apiKey=${import.meta.env.VITE_API_KEY}`)
    let popularData = await res.json()
      setLoad(false)
    setPopular(popularData.recipes)
    localStorage.setItem("popular",JSON.stringify(popularData.recipes))
    } catch (error) {
       
    }
    
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
  tabs:{
    breakpoint: { max: 968, min: 0 },
    items: 4
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2
  }
};
  useEffect(()=>{
    getPopularData()
  },[])
  return(
    <>
      
        <div>
        <div className="popularCrou">
          <h3 className="title">
            Popular Picks
          </h3>
        <Carousel responsive={responsive}
          draggable={true}
          swipeable={true}
          containerClass="carousel-container"
          showDots={true}
          arrows={true}
          >
            {!Load && 
          popular.map((elem)=>{
            return(
              <div key={elem.id}>
                <div className="popularCard">
              <Link to={`/recipe/`+elem.id} style={{ textDecoration:'none'}}>
                <LazyLoadImage src={elem.image} className="popularImg"/>
                <p className="onImgTitle">{elem.title}</p>
                </Link>
                </div>
              </div>
            )
          })
        }
          </Carousel>
          </div>
        {Load && <Loader/>}
      
      </div>
    </>
  )
}
export default Popular;