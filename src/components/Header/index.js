// Write your JS code here
import './index.css'

import {Link} from 'react-router-dom'

const Header = () => (
  <nav>
    <div className="nav-container">
      <div className="wave-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
          alt="wave"
          className="wave-image"
        />
        <h1 className="wave-heading">Wave</h1>
      </div>
      <ul className="nav-menu">
        <li>
          <Link to="/" className="link">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className="link">
            About
          </Link>
        </li>
        <li>
          <Link to="/contact" className="link">
            Contact
          </Link>
        </li>
      </ul>
    </div>
  </nav>
)

export default Header
