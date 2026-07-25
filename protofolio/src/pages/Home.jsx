import React from 'react'
import Modal from '../components/Modal.jsx'
import LazyLoad from 'react-lazy-load';
import '../styles/Navfoo.css'
import skills from '../apis/skills.js'
import hire from '../apis/hire.js'
const Home = () => {
  
  return (
    <>
      <div className="container">
        <div className="row my-5">
          <div className="col-md-7 " >
            <LazyLoad height={"auto"} offset={50}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGCd8ZZZ-X-UpDkGz8jyjnHouN_II53zVj-w&usqp=CAU" alt="image" width="100%" className="img shadow" />
              </LazyLoad>
          </div>
          <div className="col-md-5 d-flex justify-content-center align-items-centet flex-column my-3 ">
            <h1 className="f-family">
            
             Hello , i 'am' a developer</h1>
            <p className="lead b-family"><strong>and i have many skills like app and web development designing etc.</strong></p>
          </div>
        </div>
      </div>
      <div className="skills">
        <h1 className="mx-4 f-family">My skills</h1>
        <div className="rows">
          {
            skills.map((elem)=>{
              return(
                <div key={elem.image}>
                  <div className="boxe my-4 rounded">
               <LazyLoad height={"auto"} offset={500}>
                 <img src={elem.image} alt="images" width="100%" className="shadow"/>
               </LazyLoad>
               <h5 className="m-0 px-2 py-2">{elem.title}</h5>
               <p className="m-0 px-2 b-family">{elem.desc.length>=50?`${elem.desc.slice(0,55)} ...`:elem.desc.slice(0,55)}</p>
                    <Modal title={elem.title} popup={elem.popup.toLowerCase()} desc={elem.desc}/>
           </div>
                </div>
              )
            })
          }
        </div>
      </div>
      <div>
        <h2 className="mx-3 f-family">You can hire me on</h2>
        <div className="hire-boxes">
          {
            hire.map((elem)=>{
              return(
                <div key={elem.image}>
                  <div className="hire-box">
            <div className="hire-image">
                <LazyLoad height={"auto"}>
                  <img src={elem.image} alt="image"/>
                </LazyLoad>
            </div>
            <div className="hire-desc b-family">
                on this website you can hire me<p>{elem.title}</p>
            </div>
        </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </>
  )
}

export default Home;