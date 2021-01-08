import React, { useEffect } from 'react'
import Logo from '../assets/img/Pachamanic.png';
import Bolsas from '../assets/img/Bolsas-abono-pachamanic.png';

export const Presentations = () => {
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
                    <h1 className='title is-1'>Prensentaciones</h1>
                </div>
                <div className="column is-6 box-center text-center">
                    <img src={Logo} alt="logo pachamanic"/>
                </div>
                <div className="column is-6 box-center text-center">
                    <h1 className='title is-1' >Actualmente contamos <br/> con diferentes presentaciones</h1>
                </div>
                <div className="column is-6 mb-8 box-center text-center">
                    <h1 className='title is-1' >Precios</h1>
                </div>
                <div className="column is-6 mb-8 box-center text-center">
                <table class="table">
                        <thead>
                            <tr>
                                <th>Material de Uso</th>
                                <th>Unidad de Medida</th>
                            </tr>   
                        </thead>
                        <tbody>
                            <tr>
                                <td>10k</td>
                                <td>$300 mxn</td>
                            </tr>   
                            <tr>
                                <td>5k</td>
                                <td>$170 mxn</td>
                            </tr>
                            <tr>
                                <td>2k</td>
                                <td>$40 mxn</td>
                            </tr>   
                        </tbody>
                    </table>
                </div>
                <div className="column is-12 mb-8 box-center text-center">
                    <img src={Bolsas} alt="logo pachamanic"/>
                </div>
            </div>
        </div>
    )
}
