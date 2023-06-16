import './App.css'
import React from 'react'
import {Link} from 'react-router-dom'
export default function About() {
  return (
    <>
      <div className="bg-white">
        <div className="container">
          <div className="row mt-5">
            <div className="col-md-12 d-flex my-4  shadow p-4 box-anim">
              <div className="row p-3">
                <div className="col-md-6">
                  <img src="./school.jpg" className="images" />
                </div>
                <div className="col-md-6 flex-column justify-content-center align-items-center">
                  <h1>Information </h1>
                  <p>This school located in uttar pradesh Pratapgarh vasudev nagar narayan das pure<br/></p>
                  
                  <button className="btn btn-outline-dark px-4 fill-form mb-3"><Link to="/contact">Contact</Link></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}