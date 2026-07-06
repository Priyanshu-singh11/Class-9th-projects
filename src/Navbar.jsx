import './App.css'
import React from 'react';
import { Link } from 'react-router-dom'
export default function Navbar() {
  return (
    <>
      <div className="Navbar">
        <nav className="navbar navbar-expand-lg bg-white shadow pt-5 pb-5">
          <div className="container">
            <Link className="navbar-brand title" to="/">PKBD-school</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ms-auto mb-lg-0 mt-3">
                <li className="nav-item">
                  <Link className="nav-link" aria-current="page" to="/">HOME</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/about">ABOUT</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/thought">THOUGHTS</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/contact">CONTACT</Link>
                </li>
              </ul>

            </div>
          </div>
        </nav>
      </div>

    </>
  )
}

