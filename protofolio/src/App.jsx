import './App.css'
import React, { Suspense} from "react";

import Loader from './components/Loader.jsx'
const Navbar = React.lazy(() => import("./components/Navbar.jsx"));
const Footer = React.lazy(() => import("./components/Footer.jsx"));
const Home = React.lazy(() => import("./pages/Home.jsx"));
const About = React.lazy(() => import("./pages/About.jsx"));
const Contact = React.lazy(() => import("./pages/Contact.jsx"));
import {Routes,Route} from 'react-router-dom'
export default function App() {
  return (
    <>
      <Suspense fallback={<Loader/>}>
				<div>
				<Navbar />
          <Routes>
            <Route path="/" element={<Suspense fallback={<Loader/>}>
				<Home />
			</Suspense>} />
            <Route path="/about" element={
              <Suspense fallback={<Loader/>}>
				<About />
			</Suspense>
            
            } />
            <Route path="/contact" element={
            <Suspense fallback={<Loader/>}>
				<Contact/>
			</Suspense>
            } />
          </Routes>
          <Footer/>
        </div>
			</Suspense>
    </>
  )
}
