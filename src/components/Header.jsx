import { React } from 'react';
import { NavLink } from "react-router-dom";
import logo from '../assets/images/easy-chef.svg';


function Header() {
    

    return (
        <>
            <div className="navbar">
                <div className="container">
                    <nav className="navbar navbar-expand-lg navbar-light w-100">
                        <div className="container-fluid">
                            <NavLink to="/" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active navbar-brand" : "navbar-brand"}><img src={logo} alt="" /></NavLink>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                        <NavLink to="/" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active nav-link" : "nav-link"}>
                                            Home
                                        </NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink to="/feature" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active nav-link" : "nav-link"}>
                                            Features
                                        </NavLink>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
            

        </>
    )
}

export default Header

