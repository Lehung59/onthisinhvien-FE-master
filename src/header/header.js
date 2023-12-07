import React, { useState } from 'react';
import './header.css';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';


function Header() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const handleMouseEnter = () => {
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setDropdownOpen(false);
  };
  const cartCount = useSelector(state => state.cartCount);

  return (
    <div className="navbar">
      <div className="header-main">
        <div className="left-header">
          <a href="/">
            <img src="/logo-otsv.png" className="small-image" alt="Logo" />
          </a>
          
          <h2 className='ten-cty'>ANFAST COPORATION</h2>
        </div>

        <div className="right-header">
          <a href="/" className='link'>Trang chủ</a>

          <div
            className={`course dropdown-button ${isDropdownOpen ? 'open' : ''}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <button className="dropdown-label1">
              <a className="dropdown-label link">Sản phẩm</a></button>
            <ul className={`dropdown-content ${isDropdownOpen ? 'show' : ''}`}>
              <li><a href="NEU" className='link'>Kìm</a></li>
              <li><a href="#" className='link'>Phoi</a></li>

            </ul>
          </div>

          <a href="/" className='link'>Tin tức</a>


          <div className="ba-coc">
            <img src="https://onthisinhvien.com/images/icon/otsv/cart.svg"></img>
          </div>
          <button className="login">
            <p>0123456789   </p>  
          <FontAwesomeIcon icon={faPhoneAlt} />
            </button>
        </div>
      </div>
    </div>
  );
}

export default Header;