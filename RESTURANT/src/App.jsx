import './App.css'
import Pages from './pages/Pages.jsx';
import {BrowserRouter,Link} from 'react-router-dom';
import Category from './components/Category.jsx';
import Search from './components/Search.jsx';
import {GiKnifeFork} from 'react-icons/gi';

export default function App() {
  return (
    <main className="max-w">
      <BrowserRouter>
        <div className="header">
        <p className="navtitle">
             <GiKnifeFork style={{padding:'0rem 0.2rem',
                              fontSize:'2rem'}}/>
        
               <Link to="/" style={{ textDecoration:'none'}} className='navtitle'>
                 Delicious
               </Link>
             
        </p>
        </div>
        <Search/>
        <Category/>
        <Pages/>
      </BrowserRouter>
    </main>
  )
}
