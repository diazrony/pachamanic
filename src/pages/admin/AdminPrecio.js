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
                    <h1 className='title is-1' >FIJAR PRECIO AL PRODUCTO <br/> TECNICA DE PRECIO PROMEDIO:</h1>
                </div>
                <div className="column is-6 box-center text-center">
                    <h1 className='title is-3' >Fertilizantes de calidad y costos similares.</h1>
                </div>
                <div className="column is-6 box-center text-center">
                    <h1 >Composta Orgánica Humus de Lombriz 3 kg <br/>  $109 mxn Es decir $36.3 por Kg <br/> <a href="https://amzn.to/3772MgV">https://amzn.to/3772MgV</a> </h1>
                    <h1 >FERTIFRASS 2.5kg <br/> $230 Es decir $92 por Kg <br/> <a href="https://bit.ly/3gyw3UQ">https://bit.ly/3gyw3UQ</a> </h1>
                    <h1 >Sustrato Humus De Lombriz 2 Kg. Abono Natural 100% <br/> Organico - $55 mxn Es decir 27.5 por Kg
                    <br/> <a href="https://bit.ly/3oDgSfD">https://bit.ly/3oDgSfD</a></h1>
                    <h1 className='title is-3' >Precio promedio: $52 <br/> Ganancia: $52 - 11.6 = $40.6 === $41</h1>
                </div>
            </div>
        </div>
    )
}
