import React, { useEffect } from 'react'

export const AdminHome = (props) => {
    let response = JSON.parse(window.localStorage.getItem('token')) 
    useEffect(() => {
        scroll();
    })
    let scroll = () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        })
    }
    return (
        <div className='container mt-8'>
        <div className="columns ">
            <div className="column is-6 box-center text-center">
                <h1 className='title is-1' >¡Bienvenido!</h1>
                <h1 className='title is-2' >{response.user.name}</h1>
                <img className='img-admin' src={`${response.user.imagen}`} alt={response.user.name} />
            </div>
            <div className="column is-6 box-center text-center">
                <i className="flecha-admin fas fa-arrow-up"></i>
                <h1 className="title-fecha" >Ingresa al menú el cual tendra nuevas opciones de administración</h1>
            </div>
        </div>
        </div>
    )
}
