import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/img/Pachamanic-letras.png';

export const Header = () => {
    const [isActive, setisActive] = React.useState(false);
    return (
        <div className='container' >
            <nav className="navbar is-fixed-top container p-5 is-transparent ">
                <div className="navbar-brand">
                    <Link to='/' className="navbar-item">
                        <img src={Logo} alt="logo" width="200" height="250" />
                    </Link>
                    <button
                    onClick={() => {
                        setisActive(!isActive);
                    }} 
                    className={`navbar-burger burger ${isActive ? "is-active" : ""}`}
                    data-target="navbarExampleTransparentExample">
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>

                <div id="navbarExampleTransparentExample" className={`navbar-menu ${isActive ? "is-active" : ""}`}>
                    <div className="navbar-start">
                        <Link onClick={() => {setisActive(!isActive)}} to='/' class="navbar-item">
                                Home
                        </Link>
                        <div className="navbar-item has-dropdown is-hoverable">
                            <Link onClick={() => {setisActive(!isActive)}} to='/' class="navbar-item">
                                    Docs
                            </Link>
                            <div className="navbar-dropdown is-boxed">
                                <Link onClick={() => {setisActive(!isActive)}} to='/' class="navbar-item">
                                        Other
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="navbar-end">
                    <div className="navbar-item">
                        <div className="field is-grouped">
                        <p className="control">
                            <Link to='/' className="bd-tw-button button is-success">
                            <span className="icon">
                                <i className="fas fa-user-shield"></i>
                            </span>
                            <span>
                                Login
                            </span>
                            </Link>
                        </p>
                        <p className="control">
                            <Link  to='/' className="button is-primary" >
                            <span className="icon">
                                <i className="fas fa-sign-in-alt"></i>
                            </span>
                            <span>sign up</span>
                            </Link>
                        </p>
                        </div>
                    </div>
                    </div>
                </div>
                </nav>
        </div>
    )
}
