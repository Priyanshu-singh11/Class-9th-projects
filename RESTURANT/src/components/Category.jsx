import { FaPizzaSlice, FaHamburger } from 'react-icons/fa';
import { GiNoodles, GiChopsticks } from 'react-icons/gi';
import {Link} from "react-router-dom"

const Category = () => {
  return (
    <>
      <div className="category">
      <div className="items-of-category">
        <div className="category-name">
          <Link to="/cusine/Italian">
          <div className="category-item">
            
              <FaPizzaSlice />
          </div>
            </Link>
          <h4 className="c-name">Italian</h4>
        </div>

        <div className="category-name">
          <Link to="/cusine/American">
          <div className="category-item">
            <FaHamburger />
          </div>
            </Link>
          <h4 className="c-name">American</h4>
        </div>
        <div className="category-name">
          <Link to="/cusine/Thai">
          <div className="category-item">
            <GiNoodles />
          </div>
            </Link>
          <h4 className="c-name">Thai</h4>
        </div>
        <div className="category-name">
          <Link to="/cusine/Japanese">
          <div className="category-item">
            <GiChopsticks />
          </div>
            </Link>
          <h4 className="c-name">Japanese</h4>
        </div>
      </div>
        </div>
    </>
  )
}
export default Category;