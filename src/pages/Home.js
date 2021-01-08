import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import abono from '../assets/img/Bolsas-abono-pachamanic.png'
import homeImg from '../assets/img/home-img.svg'
import artHome from '../assets/img/art-home.svg'
import valueHome from '../assets/img/value-home.svg'



export const Home = () => {
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
            <div className="columns  is-multiline mt-5">
                <div className="column is-6 text-center">
                    <img src={abono} alt="Bolsas de abono"/>
                </div>
                <div className="column is-6 box-center mt-5 is-centered ">
                    <h1 className='text-center title is-1'>¡Bienvenido a Pachamanic!</h1>
                    <h1 className='text-center title is-3'>Por un mundo más verde </h1>
                    <Link to='/login' className='button is-success is-large' >Registrate</Link>
                </div>
                <div className="column box-center is-centered is-6  ">
                    <div className="p-5">
                        <h2 className='title is-1'>¿Que es pachamanic?</h2>
                        <p className='text-justificado'> Es un fertilizante y mejorador orgánico de suelos, resultado
                        de la inoculación del estiércol con bacterias aeróbicas termofilicas, las cuales inician un proceso
                        de descomposición generando temperaturas de hasta 75º C eliminando de esta manera las semillas de malas 
                        hierbas y patógenos, convirtiéndolo en humus y en nutrientes asimilables para los cultivos</p>
                    </div>
                </div>
                <div className="column mt-5 is-6 box-center mt-5 ">
                    <img src={homeImg} alt="imagen"/>
                </div>
                <div className="column img-media is-6 box-center mb-5 ">
                    <img src={artHome} alt="imagen"/>
                </div>
                <div className="column box-center is-centered mb-5 is-6  ">
                    <div className="p-5">
                        <h2 className='title is-1'>¿Qué contiene?</h2>
                        <p className='text-justificado'> Para tener suelos fértiles, vivos y hacerlos productivos es necesario vitalizarlos 
                        con Pachamanic que provee materia orgánica inoculada con bacterias, rica en energía (humus) que contiene Nitrógeno,
                        Fósforo y Potasio en forma disponible y que hace accesibles el Calcio, Magnesio y Azufre necesarios para el desarrollo
                        y crecimiento de las plantas.- Contiene 85% Materia Orgánica, 60% Humus, 10% Ácidos humicos, Nitrógeno, Fósforo, Potasio,
                        elementos secundarios y microelementos.</p>
                    </div>
                </div>
                <div className="column is-6 box-center mt-5 is-centered ">
                    <div className="p-5">
                        <h2 className='title is-1'>¿Por qué es valioso?</h2>
                        <ul>
                            <li>Provee materia orgánica, humus y microorganismos benéficos.</li>
                            <li>Provee y aumenta la disponibilidad de Nitrógeno, Fósforo, Potasio y hace accesibles y solubles los elementos menores y micronutrientes.</li>
                            <li>Aumenta la calidad del suelo vitalizándolo y haciéndolo fértil y productivo.</li>
                            <li>Modifica su estructura.- Aumenta los niveles de aereación.</li>
                            <li>Aumenta la porosidad.- Aumenta la capacidad de retención del agua.</li>
                            <li>Actúa como agente buferizador contrarrestando los cambios abruptos de pH del suelo cuando se aplican materiales ácidos o alcalinos.</li>
                        </ul>
                    </div>
                </div>
                <div className="column is-6 text-center">
                    <img src={valueHome} alt="Bolsas de abono"/>
                </div>
            </div>
        </div>
    )
}
