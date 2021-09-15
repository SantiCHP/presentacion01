import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import {Nav,Navbar} from "react-bootstrap";
import './Header.css';

const Header = () => {
    // // Funcion para el logout de la Sesion
    // const logout = () =>{
    //     if(localStorage.getItem("userData").length <= 0){
    //         console.log("No tiene token de usuario no deberia estar aqui.");
    //     }else{
    //         localStorage.removeItem("userData");
    //         // return <Redirect to="/login"/>
    //     }
    // }
return (
<div>
    {/* <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
        <Link to="/tsundoku/Inicio" className="navbar-brand" id='buttonHome'>TSUNDOKU</Link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
            <div className="collapse navbar-collapse" id="navbarColor02">
                <ul className="navbar-nav mr-auto" id='menu'>

                <li className="nav-item"><Link to="/tsundoku/Inicio" className="nav-link" id='buttonHome'>Inicio</Link></li>

                <li className="nav-item"><Link to="/tsundoku/Galeria" className="nav-link" id='buttonHome'>Galería</Link></li>

                <li className="nav-item"><Link to="/tsundoku/Coleccion" className="nav-link" id='buttonHome'>Colección</Link></li>

                <li className="nav-item"><Link to="/tsundoku/Logout" id='buttonHome' onClick={logout()}><a className="nav-link" href="#">Log Out</a></Link></li>

                </ul>
            </div>
        </div>
    </nav> */}
    <Navbar bg="dark" expand="lg">
  {/* <Container> */}
    <Navbar.Brand><Link to="/tsundoku/Inicio" className="navbar-brand" id='logo'>TSUNDOKU</Link></Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" className="buttonHome" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link><Link to="/tsundoku/Inicio" className="nav-link" id='buttonHome'>Inicio</Link></Nav.Link>
        <Nav.Link><Link to="/tsundoku/Galeria" className="nav-link" id='buttonHome'>Galeria</Link></Nav.Link>
        <Nav.Link><Link to="/tsundoku/Coleccion" className="nav-link" id='buttonHome'>Conleccion</Link></Nav.Link>
        {/* <Nav.Link><Link to="/tsundoku/Logout" className="nav-link" id='buttonHome'>Logout</Link></Nav.Link> */} 
      </Nav>
    </Navbar.Collapse>
  {/* </Container> */}
</Navbar>
</div>
)
}

export default Header