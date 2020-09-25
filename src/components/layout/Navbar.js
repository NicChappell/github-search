// dependencies
import React from 'react'
import { Link } from 'react-router-dom'

// static files
import logo from '../../img/logo.png'

const Navbar = () => {
    return (
        <nav className="white">
            <div className="container">
                <Link to="/">
                    <img alt="GitHub Search" src={logo} />
                </Link>
            </div>
        </nav>
    )
}

export default Navbar