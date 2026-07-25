import LazyLoad from 'react-lazy-load';
const About = ()=>{
  return(
    <>
      <div className="container">
        <h1 className="my-4 f-family">Here you can see my projects</h1>
        <div className="row my-4 d-flex align-items-center justify-content-center">
          <div className="col-md-6">
            <LazyLoad>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq3zj3YPpgp-UZPvTe-nqpK0wl8N7snnGzOA&usqp=CAU" alt="image" width="100%" className="shadow rounded my-2"/>
            </LazyLoad>
          </div>
          <div className="col-md-6 ">
            <h1 className="f-family pt-2">Your Beautiful Todo App..</h1>
            <p className="f-future bold">In this app you can create your task and when completed you can checked and then you can delete 
              <br/>
              <button className="btn"><a href="https://todo-list.ajitsingh32.repl.co/">Todo App</a></button>
            </p>
          </div>
        </div>
                <div className="row my-5 d-flex align-items-center justify-content-center">
          <div className="col-md-6">
              <h1 className="f-family pt-2">School project</h1>
            <p className="f-future bold">This is my first best projects because in this app i learn how to make our websites light weight and how to optimise and deploy websites.
              <br/>
              <button className="btn"><a href="https://pkbd.ajitsingh32.repl.co/">School</a></button>
            </p>
          </div>
          <div className="col-md-6">
            <LazyLoad>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRp1jkUuGxwLpukZvIigT9tuGEt1AJx8_du3mhpQXVEKg&usqp=CAU&ec=48665698" alt="image" width="100%" className="shadow rounded"/>
              </LazyLoad>
          </div>
        </div>
                <div className="row my-5 d-flex align-items-center justify-content-center">
          <div className="col-md-6">
            <LazyLoad>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHEZTNjlJvtWvJW47AjgcUwcnEmrErC1f81A&usqp=CAU" alt="image" width="100%" className="shadow rounded my-2"/>
            </LazyLoad>
          </div>
          <div className="col-md-6 ">
            <h1 className="f-family pt-2">Make e-commerce</h1>
            <p className="f-future bold">This app i make when i am a beginner coder and build for learn ing react-redux in this project i use react and <b>React-Redux</b> except best Ui.
              <br/>
              <button className="btn"><a href="https://e-commerce.ajitsingh32.repl.co/">E-COMMERCE</a></button>
            </p>
          </div>
        </div>

                        <div className="row my-5 d-flex align-items-center justify-content-center">
          <div className="col-md-6">
              <h1 className="f-family pt-2">Protofolio web app</h1>
            <p className="f-future bold">In this page he said create 2 pages one page for me and one page for Movies and for movie page he gave me limited api 
              <br/>
              <button className="btn"><a href="https://tarun.ajitsingh32.repl.co/">Protofolio</a></button>
            </p>
          </div>
          <div className="col-md-6">
            <LazyLoad>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsETuIfHXaoXVPtrWFJTcymhV7RcuGuHHPNg&usqp=CAU" alt="image" width="100%" className="shadow rounded"/>
              </LazyLoad>
          </div>
        </div>
              
      </div>
    </>
  )
}
export default About