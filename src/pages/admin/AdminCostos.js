import React, { useEffect } from 'react'

export const AdminCostos = () => {
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
                <div className="column is-12 p-5 box-center text-center">
                    <h1 className='title is-1' >Costos de Pachamanic</h1>
                </div>
                <div className="column is-6 box-center text-center">
                    <h1 className='title is-4' >Producción de 1kg de Fertilizante</h1>
                </div>
                <div className="column is-6 box-center text-center">
                    <table class="table">
                        <thead>
                            <tr>
                                <th>Material de Uso</th>
                                <th>Unidad de Medida</th>
                                <th>Costos</th>
                            </tr>   
                        </thead>
                        <tbody>
                            <tr>
                                <td>Saco organico</td>
                                <td>Pza</td>
                                <td>$2.5 mxn</td>
                            </tr>   
                            <tr>
                                <td>Agua</td>
                                <td>3Lt</td>
                                <td>?</td>
                            </tr>   
                            <tr>
                                <td>Basura Organica</td>
                                <td>500g</td>
                                <td>$2 mnx / Gratis</td>
                            </tr> 
                            <tr>
                                <td>Tierra</td>
                                <td>500g</td>
                                <td>$4 mnx</td>
                            </tr> 
                        </tbody>
                    </table>
                </div>
                <div className="column is-6 box-center text-center">
                    <h1 className='title is-4' >Costo de materiales / Unica inversión</h1>
                </div>
                <div className="column is-6 mb-8 box-center text-center">
                    <table class="table">
                        <thead>
                            <tr>
                                <th>Material de Uso</th>
                                <th>Unidad de Medida</th>
                                <th>Costos</th>
                            </tr>   
                        </thead>
                        <tbody>
                            <tr>
                                <td>Cubeta de plastico</td>
                                <td>5 galones</td>
                                <td>$133 mxn</td>
                            </tr>   
                            <tr>
                                <td>Plastico negro</td>
                                <td>3 mts</td>
                                <td>$60 mxn</td>
                            </tr>   
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        
    )
}
