import React, { useEffect } from 'react'

export const AdminPrecio = () => {
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
        <div  className='container mt-8'>
            <div className="columns is-multiline">
                <div className="column is-12 box-center text-center">
                    <h1 className='title is-1' >Canvas</h1>
                </div>
                <div className="column is-6 box-center text-center">
                    <h1 className='title is-1' >Canvas</h1>
                </div>
                <div className="column is-6 box-center text-center">
                    <h1 className='title is-1' >Canvas</h1>
                </div>
            </div>
        </div>
    )
}
