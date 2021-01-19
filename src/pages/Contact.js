import React, { useEffect } from 'react'
import ContactForm from '../components/ContactForm';

export const Contact = () => {
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
        <div  className='container p-5 mt-8'>
                <div className="columns is-multiline">
                    <div className="column is-12 box-center text-center">
                        <h1 className='title is-1' >Contacto</h1>
                    </div>
                    <div className="column  is-6">
                        <h1 className='title is-3' >Horarios de Atención</h1>
                        <h1 className='title is-4' > <i class="far fa-clock"></i>  Lunes a Viernes 8:00 am - 18:00 pm</h1>
                        <div class="card">
                            <header class="card-header is-centered has-text-centered">
                                <p class="title is-3 card-header-title">
                                    Dirección
                                </p>
                            </header>
                            <div class="card-content is-centered has-text-centered">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d249677.5777001116!2d-86.39854718013481!3d12.097623905938692!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f71560dd907880b%3A0x6c5ef4a2144f4c6a!2sManagua%2C%20Nicaragua!5e0!3m2!1ses-419!2smx!4v1610077826318!5m2!1ses-419!2smx" width="100%" height="300" frameborder="0" title='location' aria-hidden="false" tabindex="0"></iframe>
                                <a href="https://goo.gl/maps/CJnGDkkmbPJ4qsLT8">
                                    <h1>Managua, Nicaragua</h1>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="column mb-8 is-6 box-center">
                        <ContactForm/>
                    </div>
                </div>
            </div>
    )
}
