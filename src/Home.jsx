import './App.css'
import React from 'react';
import {Link} from "react-router-dom"
export default function Home() {
  return (
    <>
      <div className="main">
        <div className="container">
          <div className="row my-5 shadow pb-0 p-3  bg-body rounded">
            <div className="col-md-6">
              <h1 classname="m-0 p-0">Introduce to P-K-B-D </h1>
              <p className="para m-0">
                <b class="title-na">International</b> inter school
                <br/>
              <button className="abtbtn shadow btn pb-2  px-2  mt-0 mb-2"><Link  to="/about">Learn More</Link></button>
                </p>
              
            </div>
            <div className="col-md-6 d-flex align-items-center mt-1">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRp1jkUuGxwLpukZvIigT9tuGEt1AJx8_du3mhpQXVEKg&usqp=CAU&ec=48665698" className="images" />
            </div>
          </div>
        </div>
      </div>



      <div className="experience bg-dark color-white p-5 mx-2">

        <div className="container text-center">
          <h2 className="mx-3">Experience of teaching the subject</h2>
          <div className="row">
            <div className="col-md-6 p-2 mt-3 experience">
              <b>English</b>
              <p>Experience of teacher twenty to twenty-five years between</p>
            </div>

            <div className="col-md-6 p-2 mt-3 experience">
              <b>Science</b>
              <p>Experience of teacher thirteen to fifteen years between</p>
            </div>

            <div className="col-md-6  p-2 mt-3 experience">
              <b>Math</b>
              <p>Experience of teacher four  to nine years between</p>
            </div>

            <div className="col-md-6 p-2 mt-3 experience">
              <b>Computer</b>
              <p>Experience of teacher one to five years between</p>
            </div>

            <div className="col-md-6  p-2 mt-3 experience shadow-active">
              <b>Social studies</b>
              <p>Experience of teacher to eleven to fifteen -years between</p>
            </div>


          </div>
        </div>
      </div>



      <div className="functions text-center container my-4">
        <h2 className="my-3">Beautiful Labs of school </h2>
        <div className="row mx-auto my-auto mb-3">
          <div className="col-md-12 p-2 ">
            <div className="row shadow p-3">
              <div className="col-md-5">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcFXNaj-MXrDbQF3UXfFR-0ppNCWyq1rcSaRUo-UiLAQ&usqp=CAU&ec=48665698" className="images" />
              </div>
              <div className="col-md-7">
                <h2 className="text-left mt-1">Computer</h2>
                <p className="text-left lead">In the compuetr lab ,
                  students learn programming language according to book students learn c language ,graphic-designing and more skills.
                </p>
              </div>
            </div>

            <div className="row shadow p-3 mt-5 mb-3">
              <div className="col-md-7">
                <h2 className="text-left mt-1">Science</h2>
                <p className="text-left lead">In the science lab,Children are made to do physical practical, it is remembered more by the children and the experience increases.
                </p>
              </div>
              <div className="col-md-5">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRi5bISUDkxH8mF7kRTT_a5NtiMHsw5aiOFEh7nWi9cVQ&usqp=CAU&ec=48665698" className="images" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="functions bg-dark color-white mb-5">
        <div className="container py-2">
          <h2 className="text-center my-2">Comptitions of school</h2>
          <div className="row my-3 p-3">
            <div className="col-md-4 p-2 competition">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSo32Q2yzzcaWtIJ8gB6s8gnfU3q-FAOc5eedtbxTIXxA&usqp=CAU&ec=48665698" className="images" />
              <h2 className="text-left my-2 text-center">
                Rangoli competition
              </h2>
            </div>

            <div className="col-md-4  p-2 competition">
              <img src="https://m.media-amazon.com/images/I/91TLInw0VqL.jpg" className="images" />
              <h2 className="text-left my-2 text-center">
                Mechanical competition
              </h2>
            </div>


            <div className="col-md-4 p-2 competition">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWaE0hF_uGKltZAErnViVheb8JGU_H9c64O63BRDxBGA&usqp=CAU&ec=48665698" className="images" />
              <h2 className="text-left my-2 text-center">
                Chart competition
              </h2>
            </div>


            <div className="col-md-4 p-2 competition">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCdl6AdPtnuElFas9hm_i7lADh-SzCOfJ6xuP-VddOLw&usqp=CAU&ec=48665698" className="images" />
              <h2 className="text-left my-2 text-center">
                Card competition
              </h2>
            </div>

            <div className="col-md-4 p-2 competition active-competition">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyW9t5CwTalfa4GaPtsmRLBc7wL0YPcDZg7t-Pd8BT3w&usqp=CAU&ec=48665698" className="images" />
              <h2 className="my-2 text-center">
                Rakhi competition
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div className="sports p-4">
        <div className="container">
          <h2 className="text-center my-4">Sports of school</h2>
          <div className="row">
            <div className="col-md-12 text-center p-2 shadow">
              <h3>Kabaddi</h3>
            </div>
            <div className="col-md-12 text-center p-2 shadow">
              <h3>Footbal</h3>
            </div>
            <div className="col-md-12 shadow text-center p-2">
              <h3>Volleyball</h3>
            </div>
            <div className="col-md-12 shadow text-center p-2">
              <h3>Khokho</h3>
            </div>
            <div className="col-md-12 shadow text-center p-2">
              <h3>Race</h3>
            </div>
            <div className="col-md-12 shadow text-center p-2">
              <h3>High-jump</h3>
            </div>
          </div>
        </div>
      </div>


    </>
  )
}