import '../styles/Navfoo.css'
import {Link} from 'react-router-dom'
const Navbar = ()=>{
  return(
    <div>
      <nav className="navbar navbar-expand-lg navbar-light  py-4 shadow-0">
  <div className="container">
    
    <Link className="navbar-brand me-2" to="/">
      <div className="f-family">Coder</div>
    </Link>

    <button
      className="navbar-toggler"
      type="button"
      data-mdb-toggle="collapse"
      data-mdb-target="#navbarButtonsExample"
      aria-controls="navbarButtonsExample"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <i className="fas fa-bars"></i>
    </button>

   
    <div className="collapse navbar-collapse" id="navbarButtonsExample">
      
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item hover-overlay ripple w-100"
        data-mdb-ripple-color="primary"
        >
          <Link className="nav-link"
           to="/">Home</Link>
        </li>
        <li className="nav-item ripple"
        data-mdb-ripple-color="primary">
          <Link className="nav-link" to="/about">Project</Link>
        </li>
        <li className="nav-item ripple" data-mdb-ripple-color="primary">
          <Link className="nav-link" to="/contact">Contact</Link>
        </li>
      </ul>
      

      <div className="d-flex align-items-center">
        <Link
        className="btn text-white   "
        style={{backgroundColor: "#8098ff8f",color:"white"}}
        to="/login"
        role="button"
        ><div className="b-family">LogIn</div>
      </Link>
        
      </div>
    </div>
  </div>
</nav>
  </div>
  )
}
export default Navbar