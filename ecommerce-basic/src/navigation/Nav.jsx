import { FiHeart } from 'react-icons/fi';
import { AiOutlineShoppingCart, AiOutlineUserAdd } from 'react-icons/ai';
import './Nav.css';

function Nav({handleInputChange}) {
  return (
    <nav>
      <div className="nav-container">
        <input 
          type="text"
          className='search-input'
          onChange={handleInputChange}
          placeholder='Search your items here'
        />
      </div>
      <div className="profile-containe">
        <a href="#">
          <FiHeart className='nav-icons' />
        </a>
        <a href="#">
          <AiOutlineShoppingCart className='nav-icons' />
        </a>
        <a href="#">
          <AiOutlineUserAdd className='nav-icons' />
        </a>
      </div>
    </nav>
  )
}

export default Nav