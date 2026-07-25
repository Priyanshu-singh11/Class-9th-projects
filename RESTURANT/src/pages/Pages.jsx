import Home from './Home.jsx';
import {Routes,Route} from 'react-router-dom';
import Cusine from './Cusine.jsx';
import SearchedTerm from './SearchedTerm.jsx';
import Recipe from './Recipe.jsx';
import {AnimatePresence} from 'framer-motion';
import Error from '../Error.jsx';

const Pages = ()=>{
  return(
    <>
      <AnimatePresence wait>
        <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/cusine/:type" element={<Cusine/>}/>
        <Route path="/searched/:search" element={<SearchedTerm/>}/>
        <Route path="/Recipe/:id" element={<Recipe/>}/>
         <Route path="*" element={<Error/>}/>
      </Routes>
      </AnimatePresence>
    </>
  )
}
export default Pages;