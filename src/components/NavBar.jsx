import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import '../styles/navbar.css'
export const NavBar = () => {
  return (
    
    <nav className="navbar navbar-expand-sm">
        
        <Link 
            className="navbar-brand" 
            to="/"
        >
            My mind
        </Link>

        <div className="navbar-collapse">
            <div className="navbar-nav">

                <NavLink 
                    className="nav-item nav-link" 
                    to="/centros"
                >
                    Ayuda
                </NavLink>

                <NavLink 
                    className="nav-item nav-link" 
                    to="/quiz"
                >
                    Test
                </NavLink>

               
            </div>
        </div>

        <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
            <ul className="navbar-nav ml-auto">
            
                <button 
                    className="nav-item nav-link btn" 
                    // onClick={handleLogout}
                >
                    Logout
                </button>
            </ul>
        </div>
    </nav>
  )}