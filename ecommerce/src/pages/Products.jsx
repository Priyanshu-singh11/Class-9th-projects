import React,{useState,useEffect} from 'react'
import {Link} from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Loader from '../components/Loader.jsx';
import '../styles/product.css'
const Product = ()=>{
  const [product,setProduct] = useState([])
  const [Load,setLoad] = useState(true)
  const getProducts = async()=>{
    const res = await fetch(`https://api.pujakaitem.com/api/products`)
    const all = await res.json()
    setLoad(false)
    setProduct(all)
  }
  
  useEffect(()=>{
    getProducts()
  },[])
  return(
    <div>
    {!Load && 
      <div className="max-w-5xl mx-auto">
     <div className="products">
      <div className="flex flex-wrap items-center justify-center">
        {product.map((el)=>{
          return(
            <div key={el.id}>
              <Link to={`/product/`+el.id}>
    <div className="card p-2 bg-white rounded-lg shadow-2xl my-8 mx-2" key={el.id}>
      <div className="prod-title">
        <p className="text-2xl uppercase text-gray-900 font-bold py-2">{el.name.length>=3?`${el.name.slice(0,11)}...`:el.name}</p>
        <p className="uppercase text-sm text-gray-400 py-2">
          {el.description.length>=31?`${el.description.slice(0,41)}...`:el.description}
        </p>
      </div>
      <div className="prod-img">
        <LazyLoadImage src={el.image}
             className="w-full object-cover object-center rounded my-3"/>
      </div>
      <div className="prod-info grid gap-10">
        <div className="flex flex-col md:flex-row justify-between items-center text-gray-900">
          <p className="font-bold text-xl py-2">₹ {el.price}</p>
          <button
                  className="px-6 py-2 transition ease-in duration-200 uppercase rounded-full hover:bg-gray-800 hover:text-white border-2 border-gray-900 focus:outline-none py-2">check</button>
        </div>
      </div>
    </div>
                </Link>
              </div>
          )
        })
        }
      </div>
      </div>
      </div>
    }
    {Load && <Loader/>}
      </div>
    )
}
export default Product
/*

*/