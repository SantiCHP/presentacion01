import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
return (
<div>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
        <Link to="/tsundoku/Inicio" id='buttonHome'><a className="navbar-brand" href="#">TSUNDOKU</a></Link>
            <div className="collapse navbar-collapse" id="navbarColor02">
                <ul className="navbar-nav me-auto" id='menu'>

                <li className="nav-item"><Link to="/tsundoku/Inicio" id='buttonHome'><a className="nav-link" href="#">Inicio</a></Link></li>

                <li className="nav-item"><Link to="/tsundoku/Galeria" id='buttonHome'><a className="nav-link" href="#">Galería</a></Link></li>

                <li className="nav-item"><Link to="/tsundoku/Coleccion" id='buttonHome'><a className="nav-link" href="#">Colección</a></Link></li>

                {/* <li className="nav-item"><Link to="/tsundoku/Logout" id='buttonHome'><a className="nav-link" href="#">Log Out</a></Link></li> */}

                </ul>
            </div>
        </div>
    </nav>
</div>
)
}

export default Header