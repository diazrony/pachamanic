import React, { useEffect } from 'react'
import {dataAplication} from '../assets/json/dataAplication'
export const Aplication = () => {
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
            <div className="columns is-multiline mt-5">
                <div className="column text-center box-center is-12"> 
                    <h1 className='title is-1' >Aplicación del fertilizante</h1>
                </div>
                {dataAplication.map(data => {
                    return (
                        <div className="column text-center mt-5 is-4">
                                <div className="card height-card p-5 m-5">
                                    <div className="card-image">
                                        <figure class="image is-4by3">
                                            <img src={data.img} alt={data.name}/>
                                        </figure>
                                    </div>
                                    <div class="card-content">
                                        <div class="media-content">
                                            <h4 class="title is-4">{data.name}</h4>
                                            <h4> <b>Dosis:</b> {data.dosis}</h4>
                                            <h4> <b>Aplicación:</b>  {data.aplicacion}</h4>
                                        </div>
                                    </div> 
                                </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
