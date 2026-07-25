import '../styles/Home.css'
import Category from '../apis/Category.jsx';
import React,{useState} from 'react';

import {Link} from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
const Home=()=>{
  const [category,setCategory] = useState(Category)
  
  return(
    <>
      <div className="max-w-7xl mx-auto">
        <div className="intro-commerce px-2">
        <div className="intro-img">
            <LazyLoadImage src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRilzvRcOgRMLWJNQrZuzEvM82vazANx-IAvQ&usqp=CAU" alt="image" className="ecom-image"/>
        </div>
        <div className="intro">
            <h1 className="text-5xl pt-3">Welcome In e-commerce website </h1>
            <p className="py-3 text-xl">Here you can buy things with best deals and offers . Only in this website you can take more offers and take things  with lowest price </p>
            <Link to="/products">
              <button type="button" className="text-white bg-gradient-to-r from-indigo-500 via-indigo-600 to-indigo-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-indigo-300 dark:focus:ring-indigo-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Products</button>
                
            </Link>

        </div>
    </div>
        </div>
      <div className="category-wise-product max-w-5xl mx-auto">
         <h1 className="text-3xl bold pl-8">Categories</h1>
    <div class="category-part p-3 max-w-5xl">
      {
        category.map((el)=>{
          return(
            <div key={el.name}>
              <Link to={"/category/"+el.name}>
               <div className="categories-card py-3 shadow-xl rounded mb-7 px-2 mx-2">
            <LazyLoadImage src={el.image} alt="image" className="rounded mb-2"/>
            <div className="category-name">
                <h1 className="pt-2 text-2xl">{el.name.length>=5?`${el.name.slice(0,7)}...`:el.name}</h1>
                
<button type="button" className="text-white bg-gradient-to-r from-indigo-500 via-indigo-600 to-indigo-700 hover:bg-gradient-to-br focus:ring-indigo-300 dark:focus:ring-indigo-800 shadow-lg shadow-indigo-500/50 dark:shadow-lg dark:shadow-indigo-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mt-2">Preview</button>
            </div>
        </div>
            </Link>
            </div>
          )
        })
      }
    </div>
      </div>
    </>
  )
}
export default Home
//#4338ca