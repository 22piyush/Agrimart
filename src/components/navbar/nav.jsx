import './nav.css';
import { NavLink, useLocation } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { headerdata } from './../../config/config';
import { Toaster, toast } from 'react-hot-toast';
import brandIcon from "./../../../src/images/nav/logo2.png";

function Header() {
  const location = useLocation();
  const [menuActive, setMenuActive] = useState(false);

  useEffect(() => {

    if (location.pathname === "/") {
      toast.success("Home loaded 🏠", {
        position: 'top-center',
        duration: 1000,
      });
    }

    else if (location.pathname === "/about") {
      toast.success("About loaded 🔎", {
        position: 'top-center',
        duration: 1000,
      });
    }

    else if (location.pathname === "/services") {
      toast.success("Services loaded 👨🏻‍💻", {
        position: 'top-center',
        duration: 1000,
      });
    }

    else if (location.pathname === "/blog") {
      toast.success("Blog loaded ✍️", {
        position: 'top-center',
        duration: 1000,
      });
    }

    else if (location.pathname === "/cart") {
      toast.success("Cart loaded 🛒", {
        position: 'top-center',
        duration: 1000,
      });
    }

  }, [location]);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <div className='header-container'>
      <header className="header">
        <nav className="navbar">
          <div className="nav-logo">
            <NavLink to="/">
              <img src={brandIcon} alt="brand logo" className='brand-logo' />
            </NavLink>
          </div>

          <ul className={`nav-menu ${menuActive ? 'active' : ''}`} >

            {headerdata.map((item, index) => (
              <li className="nav-item" key={index}>
                <NavLink
                  to={item.to}
                  style={({ isActive }) =>
                    isActive ? { color: 'white' } : { color: '#999999' }
                  }
                  className="nav"
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="dropdown-items" onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </nav>
      </header>

      <Toaster />
    </div>
  );
}

export default Header;
