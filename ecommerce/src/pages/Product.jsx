import React,{useState,useEffect} from 'react'
import { useParams,useNavigate} from 'react-router-dom'
import Loader from '../components/Loader.jsx';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import '../styles/singleP.css'
const Product = ()=>{
  const [product,setProduct] = useState([])
  const [Load,setLoad] = useState(true)
  let { id } = useParams()
  const navigate = useNavigate()
  const getProduct = async()=>{
    const res = await fetch(`https://api.pujakaitem.com/api/products/${id}`)
    const all = await res.json()
    setLoad(false)
    setProduct(all)
  }
  
  useEffect(()=>{
    getProduct()
  },[])
  return(
    <div>
            {!Load && <div className="product-part max-5-xl mx-auto">
        <div className="product-part max-w-5xl">
        <div className="product-overview">
          
            <div className="images-of-product">
               <div className="select-image">
                 {
                   product.image.map((elem)=>{
                    return(
                       <>
                         <LazyLoadImage src={elem.url} alt="image"/>
                       </>
                     )
                   })
                 }
                
               </div>
                <div className="slected-image">
                    <LazyLoadImage src={product.image[0].url} alt="image"/>
                </div>
                
            </div>
        
            <div className="overview-of-product px-3 py-1">
                <h1 className="text-4xl"> {product.name} </h1>
                <p className="pt-3 pb-1">
          {product.description}
                </p>
                
                <button type="button" className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br  focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Add-to-cart</button>
                <button type="button" className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 mx-1">Buy</button>

            </div>
        </div>
    </div>
              <button
        className="goback-button text-white shadow-2xl px-4 py-2 bg-gradient-to-r from-slate-800 via-slate-900 to-slate-950 rounded-xl" onClick={()=>navigate('/products')}>Back</button>
        </div>
      }
      
      {Load && <Loader/>}
    </div>
    )
}
export default Product
/*

*/