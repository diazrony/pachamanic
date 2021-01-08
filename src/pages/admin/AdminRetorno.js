import React, { useEffect } from 'react'

export const AdminRetorno = () => {
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
                    <h1 className='title is-1' >Retorno de Inversión</h1>
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
                <div className="column is-12 p-5 mb-8 box-center text-center">
                    <h1 className='title is-3' >$10 + 16%(1.6) = $11.6</h1>
                    <h1 className='title is-4' > Precio de mercado promedio = $64</h1>
                    <h1 className='title is-4' >$10 + 16%(1.6) = $11.6
                    Formula de retorno de inversión: Ganancia total de la inversión
                    - Costos de la Inversión / Costo de la Inversión</h1>
                    <h1 className='title is-3' >  ROI = $64 – 11.6 / 11.6 = 6.517</h1>
                </div>
            </div>
        </div>
    )
}
