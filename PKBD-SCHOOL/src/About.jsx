import './App.css'
import React from 'react'
import {Link} from 'react-router-dom'
import { LazyLoadImage } from "react-lazy-load-image-component";
export default function About() {
  return (
    <>
      <div className="bg-white mb-5 about">
        <div className="container">
          <div className="row mt-5 d-flex justify-content-center align-items-center">
            <div className="col-md-12 d-flex my-4  p-4 box-anim">
              <div className="row p-3">
                <div className="col-md-6">
                  <LazyLoadImage src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1cXW0zJG5S5InX3wyNC4TzlnlFiTF6_r2PA&s" className="images" />
                </div>
                <div className="col-md-6 flex-column justify-content-center align-items-center">
                  <h1 className="my-2">Information </h1>
                  <p>This school is located in uttar pradesh Pratapgarh vasudev nagar narayan das pure<br/></p>
                  
                  <button className="btn btn-light px-4 fill-form mb-3 shadow"><Link to="/contact">Contact</Link></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}