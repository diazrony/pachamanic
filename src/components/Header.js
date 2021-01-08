import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/img/Pachamanic-letras.png';
import { GoogleLogout } from 'react-google-login';

export const Header  = (props, context) => {
    const [isActive, setisActive] = React.useState(false);
    const [islogin, setIsLogin] = React.useState(false);
    const logoutGoogle = () => {
        window.localStorage.removeItem('token')
        window.location.href = '/'
    }
    let intervalLogin = setInterval(() => {
        let response = JSON.parse(window.localStorage.getItem('token')) 
        if(response !== undefined && response) {
            setIsLogin(true)
        }else {
            setIsLogin(false)
        }
        if(islogin) {
            clearInterval(intervalLogin);
        }
    }, 3000 );
    
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
                                    <b>Home</b> 
                            </Link>
                            <Link onClick={() => {setisActive(!isActive)}} to='/aplication' class="navbar-item">
                                    <b>Aplicación</b>
                            </Link>
                            <Link onClick={() => {setisActive(!isActive)}} to='/presentations' class="navbar-item">
                                    <b>Presentaciónes</b>
                            </Link>
                            <Link onClick={() => {setisActive(!isActive)}} to='/contact' class="navbar-item">
                                    <b>Contacto</b>
                            </Link>
                            {islogin && (
                                <div class="navbar-item has-dropdown is-hoverable">
                                <Link onClick={() => {setisActive(!isActive)}} to='/admin' class="navbar-item">
                                        <b>Admin</b>
                                </Link>
                                    <div class="navbar-dropdown">
                                        <Link onClick={() => {setisActive(!isActive)}} to='/admin/costos' class="navbar-item">
                                                <b>Costos</b>
                                        </Link>
                                        <Link onClick={() => {setisActive(!isActive)}} to='/admin/precios' class="navbar-item">
                                                <b>Precios</b>
                                        </Link>
                                        <Link onClick={() => {setisActive(!isActive)}} to='/admin/retorno' class="navbar-item">
                                                <b>Retorno</b>
                                        </Link>
                                        <hr class="navbar-divider"/>
                                        <Link onClick={() => {setisActive(!isActive)}} to='/admin/canvas' class="navbar-item">
                                                <b>Canvas</b>
                                        </Link>
                                    </div>
                                </div>
                            )}
                        </div>
    
                        <div className="navbar-end">
                        <div className="navbar-item">
                            <div className="field is-grouped">
                                {!islogin && (
                                    <p className="control">
                                        <Link onClick={() => {setisActive(!isActive)}}  to='/login' className="bd-tw-button button is-success">
                                        <span className="icon">
                                            <i className="fas fa-user-shield"></i>
                                        </span>
                                        <span>
                                            Login
                                        </span>
                                        </Link>
                                    </p>
                                )}
                                
                                {islogin && (
                                    <p className="control">
                                        <GoogleLogout
                                        clientId="486105028590-uudenu4qbnencsiec6tb67fpmov3r0jj.apps.googleusercontent.com"
                                        buttonText="Cerrar Sessión"
                                        onLogoutSuccess={logoutGoogle}
                                        />
                                    </p>
                                )}
                            </div>
                        </div>
                        </div>
                    </div>
                    </nav>
            </div>
        )
}
