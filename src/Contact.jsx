import React, { useState, useEffect } from 'react'
import { useHistory } from "react-router-dom";
import './App.css'
import Send from './Send.jsx'
const Contact = () => {
  const [visible,setVisible] = useState(false)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [number, setNumber] = useState("")
  const [password, setPassword] = useState("")
  const [comment, setComment] = useState("")
  const handlename = (e) => {
    setName(e.target.value)
  }
  const handlemail = (e) => {
    setEmail(e.target.value)
  }
  const handlenumber = (e) => {
    setNumber(e.target.value)
  }
  const handlepass = (e) => {
    setPassword(e.target.value)
  }
  const handlecomment = (e) => {
    setComment(e.target.value)
  }
  const submitform = async (e) => {
    
    e.preventDefault()
    
    if (name && password && number && email && comment) {
      setVisible(true)
      
      const userdata = { name, email, password, number, comment }
      const res = await fetch('https://sitaram-7bd1b-default-rtdb.firebaseio.com/Clients-data.json', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ userdata })
      })
      setVisible(false)
      setName("")
      setPassword("")
      setEmail("")
      setNumber("")
      setComment("")
      history.push('/about')
      
    }
    else {
      console.log("Hey Hey Hey Hey")
    }
  }

return (
  <div>
    {
      visible && <Send/>
    }
        {
        !visible && 
        <form method="POST">
    <div className="main-contact">
      <div className="container shadow p-5">
        <h1 className="text-cente mb-3">Contact form</h1>
        <div className="row">
          <div className="col-md-6">
            <label>Name</label>
            <input type="text" required min="5" max="15" placeholder="Enter the name" className="form-control mb-5 my-1" value={name} onChange={handlename}/>
            <label>Mobile number</label>
            <input type="number" placeholder="Enter the mobile number" required min="10" max="10" className="form-control mb-5 my-1" value={number}
              onChange={handlenumber}/>
          </div>

        <div className="col-md-6">
          <label>Email</label>
          <input type="email" placeholder="Enter the email" required className="form-control mb-5 my-1" value={email} onChange={handlemail}/>
          <label>Password</label>
          <input type="password" placeholder="Enter the email password" required min="8" max="11" className="form-control mb-5 my-1" value={password} onChange={handlepass}/>
        </div>
        <div className="col-md-11">
          <label>Comment</label>
          <textarea className="form-control mb-3 my-2" 
          rows="4" 
          required
          min="10" 
          max="100"
          value={comment}
          onChange={handlecomment}
          ></textarea>
          <button type="submit" className="btn btn-outline-dark px-5 py-2 my-2 shadow"onClick={submitform}>Contact</button>
        </div>
      </div>
    </div>
   </div>
  </form>
        
}
    </div>
)
}




export default Contact;