import React,{ useEffect }  from 'react'

export const AdminHome = (props) => {
    let response = JSON.parse(window.localStorage.getItem('token')) 
    let user = {name : '' , imagen: ''}
    let scroll = () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        })
    }
    useEffect(() => {
        scroll()
    })
    if( response === undefined || !response || response === null ) { 
        window.location.href = '/login'
    }else {
        user = response.user
        return (
            <div className='container mt-8'>
            <div className="columns ">
                <div className="column is-6 box-center text-center">
                    <h1 className='title is-1' >¡Bienvenido!</h1>
                        <h1 className='title is-2' >{user.name}</h1>
                        <img className='img-admin' src={`${user.imagen}`} alt={user.name} />
                </div>
                <div className="column mb-8 is-6 box-center text-center">
                    <i className="flecha-admin fas fa-arrow-up"></i>
                    <h1 className="title-fecha" >Ingresa al menú el cual tendra nuevas opciones de administración</h1>
                </div>
            </div>
            </div>
        )    
}
}