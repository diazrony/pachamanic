import React, { useEffect } from 'react'

export const AdminCanvas = () => {
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
                <div className="column mb-8 is-6 box-center text-center">
                    <h1 className='title is-3' >Segmento de mercado</h1>
                    <p>El producto va dirigido a todos los entusiastas de la botánica , jardinería y agricultores</p>
                    <h1 className='title is-3' >Propuesta de valor</h1>
                    <p>Evitar la muerte de las plantas en cuestión y garantizarles un crecimiento sano.</p>
                    <h1 className='title is-3' >Canales</h1>
                    <p>El producto se distribuirá a través de plataformas digitales, mercado libre, amazon ,
                    Facebook market y plataforma de delivery.</p>
                    <h1 className='title is-3' >Relación con los clientes</h1>
                    <p>Al momento de hacer compras a través de nuestra pagina web recolectamos una gran
                    base de datos de usuarios con el cual podemos hacer campañas de correo electrónico para
                    nuestras promociones y nuevos productos.</p>
                    <h1 className='title is-3' >Flujo de ingresos</h1>
                    <p>La única fuente de ingresos es la venta del producto en
                    cuestión en varias presentaciones y precios que ofrecemos.</p>
                </div>
                <div className="column is-6 mb-8 box-center text-center">
                    
                    <h1 className='title is-3' >Recursos clave</h1>
                    <p>Para iniciar se necesitaría una inversión inicial relativamente
                    pequeña por que es coste de producción es barato, se aproximaría a los 15,000 pesos.
                    I necesitaríamos un a gran gama de clientes frecuentes al mes para que al pasar de
                    los meses sea mucho más rentable.</p>
                    <h1 className='title is-3' >Actividades clave</h1>
                    <p>Tener una constancia y apostarle a compradores mayoritarios de agricultura.</p>
                    <h1 className='title is-3' >Alianzas</h1>
                    <p>En el caso de este producto seria genial impulsar el producto con Asociaciones de
                    Agricultores en Mexico y Estados Unidos por lo cual es un mercado especifico y gigante
                    de como promocionar el producto.</p>
                    <h1 className='title is-3' >Estructura de costos</h1>
                    <p>La estructura de costos del producto se puede ver en la pagina 6 de este documento.</p>
                </div>
            </div>
        </div>
    )
}
