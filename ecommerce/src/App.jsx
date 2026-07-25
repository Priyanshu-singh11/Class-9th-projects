import React, { Suspense, lazy } from 'react'
const Navbar = lazy(() => import('./components/Navbar.jsx'));
const Loader = lazy(() => import('./components/Loader.jsx'));
const Product = lazy(() => import('./pages/Product.jsx'));
import { Routes, Route } from 'react-router-dom';
const Home = lazy(() => import('./pages/Home.jsx'));
const Products = lazy(() => import('./pages/Products.jsx'));
const Category = lazy(() => import('./pages/Category.jsx'))
import './App.css'
import './styles/product.css'

export default function App() {
  return (
    <main>
      <div>
        <Suspense fallback={<Loader/>}>
          <div>
            <Navbar/>
          </div>
          <Routes>
            <Route path="/" element={
              <Suspense fallback={<Loader/>}>
                <Home />
              </Suspense>
            } />
            <Route path="/products" element={
              <Suspense fallback={<Loader/>}>
                <Products/>
              </Suspense>
            } />
            <Route path="/product/:id" element={
              <Suspense fallback={<Loader/>}>
                <Product/>
              </Suspense>
            } />
            <Route path="/category/:id" element={
              <Suspense fallback={<Loader/>}>
                <Category/>
              </Suspense>
            } />
          </Routes>
        </Suspense>
      </div>
    </main>
  )
}
