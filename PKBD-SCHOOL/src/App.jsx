import React,{Suspense,lazy} from 'react'
import {Routes,Route} from 'react-router-dom'
const Home = lazy(() => import('./Home.jsx'))
const About = lazy(() => import('./About.jsx'))
const Contact = lazy(() => import('./Contact.jsx'))
const Error = lazy(() => import('./Error.jsx'))
const Navbar = lazy(() => import('./Navbar.jsx'))
const Thought = lazy(() => import('./Thought.jsx'))
import Loader from "./Loader.jsx"

export default function App() {
  return (
    <>
      <div>
      <Suspense fallback={<Loader/>}>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={
          <Suspense fallback={<Loader/>}>
          <About/>
          </Suspense>
          
        }/>
        
        <Route path="/thought" element={
          <Suspense fallback={<Loader/>}>
          <Thought/>
          </Suspense>
          
        }/>
        
        
        <Route path="/contact" element={
          <Suspense fallback={<Loader/>}>
          <Contact/>
          </Suspense>
        }/>
        <Route path="*" element={<Error/>}/>

      </Routes>
        </Suspense>
        </div>
    </>
  )
}
/** 
import Navbar from './Navbar.jsx'
import Home from './Home.jsx'
import About from './About.jsx'
import Contact from './Contact.jsx'
import Error from './Error.jsx'
*/