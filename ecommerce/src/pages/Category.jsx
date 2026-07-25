import React, { useState, useEffect } from 'react'
import '../styles/Home.css'
import { useParams,useNavigate } from 'react-router-dom'
import Loader from '../components/Loader.jsx';
import { LazyLoadImage } from 'react-lazy-load-image-component';
const Category = () => {
  const [product, setProduct] = useState([])
  const [Load, setLoad] = useState(true)
  let { id } = useParams()
  const navigate = useNavigate()
  const getProduct = async () => {
    const res = await fetch(`https://dummyjson.com/products/category/${id}`)
    const data = await res.json()
    setLoad(false)
    setProduct(data.products)
  }

  useEffect(() => {
    getProduct()
  }, [])
  return (
    <>
      <h1 className="text-4xl mx-auto max-w-5xl mt-4 pl-2">{id}</h1>
      {!Load && <div className="category-item max-w-5xl mx-auto">
        
        {
          product && product.map((el) => {
            return (
              <div key={el.description}>
  
                <div className="relative flex category-card flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md mx-3 my-7 max-w-5xl">
                  <div className="relative mx-4 mt-4  overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700">
                    <LazyLoadImage
                      src={el.images[0]}
                      className="max-h-72 object-cover category-img"
                    />
                  </div>
                  <div className="px-6 py-2">
                    <div className="mb-2 flex items-center justify-between">
                      <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
                        {el.title.length >= 3 ? `${el.title.slice(0, 11)}...` : el.title}
                      </p>
                      <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
                        $ {el.price}
                      </p>
                    </div>
                    <p className="block font-sans text-sm font-normal leading-normal text-gray-700 antialiased opacity-75">
                      {el.description.length >= 51 ? `${el.description.slice(0, 51)}...` : el.description}
                    </p>
                  </div>
                  <div className="p-6 pt-0">
<button type="button" class="text-white bg-gradient-to-r from-indigo-500 via-indigo-600 to-indigo-700 hover:bg-gradient-to-br focus:ring-indigo-300 dark:focus:ring-indigo-800 shadow-lg shadow-indigo-500/50 dark:shadow-lg dark:shadow-indigo-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mt-2">Preview</button>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>}
      {
        Load && <Loader />
      }
      <button
        className="goback-button text-white shadow-2xl px-4 py-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-500 rounded-xl" onClick={()=>navigate('/')}>Back</button>
      
    </>
  )
}
export default Category;