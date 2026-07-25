import React,{useState} from 'react';
const Home = ()=>{
  return(
    <>
      <div className="home">
    <div className="content">
        <h1>WELCOME , Start Your Day with Inspiration from Quote's'</h1>
        <br/>
        <div className="short-content">
            <div className="left">
                <p>Here</p>
            </div>
            <div className="right">
                <p>  Explore diverse quotes on happiness, freedom, business, and athletics. Let our curated words uplift and inspire you every day</p>
        
        <p>your source for inspiration from great minds like Albert Einstein. Explore insightful quotes with author details. Begin your journey now.</p>
            </div>
        </div>
    </div>
</div>


<h1 className="title">Buisness </h1>
<div className="cards">
    
   <div className="card">
       <h3>Olivier Messiaen</h3>
       <p>One of the tests of leadership is the ability to recognize a problem before it becomes an emergency.</p>
   </div>
   <div className="card">
       <h3>Dee Hock</h3>
       <p>An organization, no matter how well designed, is only as good as the people who live and work in it</p>
   </div>
   <div className="card">
       <h3>Niccolò Machiavelli</h3>
       <p>No enterprise is more likely to succeed than one concealed from the enemy until it is ripe for execution</p>
   </div>
   <div className="card">
       <h3>Niccolò Machiavelli</h3>
       <p>No enterprise is more likely to succeed than one concealed from the enemy until it is ripe for execution</p>
   </div>
</div>



<h1 className="title">Love</h1>
<div className="cards">
    
   <div className="card">
       <h3>Olivier Messiaen</h3>
       <p>One of the tests of leadership is the ability to recognize a problem before it becomes an emergency.</p>
   </div>
   <div className="card">
       <h3>Dee Hock</h3>
       <p>An organization, no matter how well designed, is only as good as the people who live and work in it</p>
   </div>
   <div className="card">
       <h3>Niccolò Machiavelli</h3>
       <p>No enterprise is more likely to succeed than one concealed from the enemy until it is ripe for execution</p>
   </div>
</div>

<div className="dynamic-quote">
    <h1 className="title"> QUOTE FOR YOU </h1>
    <p>A random quoye generated for you my beautiful soup is different from the aur ab Thakur tere baap hai na ki shudra hote pare na ki shudra aur vaishya hai na ki shudra hote pare nahi </p>
    <button><i className="fas fa-solid fa-whatsApp"></i>WhatsApp</button>
    <button><i className="fas fa-solid fa-facebook"></i>facebook</button>
</div>
    </>
  )
}
export default Home;