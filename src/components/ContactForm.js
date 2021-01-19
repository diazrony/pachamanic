import React, { Component } from 'react'
import emailjs from 'emailjs-com';
import SweetAlert from 'sweetalert2-react';
import { LoaderPage } from '../pages/LoaderPage';

const validate = values => {
    const errors = {};
    if (!values.name) {
        errors.name = 'Este campo es requerido'
    }
    if (!values.email) {
        errors.email = 'Este campo es requerido'
    }
    if (!values.message) {
        errors.message = 'Este campo es requerido'
    }
    return errors;
}
export default class ContactForm extends Component {

    state = {
        errors: {sendButton: true},
        show: false,
        loading: false
    }
    handleChange = ({target}) => {
        const {name, value} = target;
        this.setState({[name]: value});
    }

    sendEmail = e => {
        e.preventDefault();
        const { errors , ...errorsLess} = this.state;
        console.log(errorsLess);
        let result = validate(errorsLess);
        if (Object.keys(result).length || null ) {
            return this.setState({errors: result})
        }else {
            this.setState({ errors : {}});
            emailjs.send('service_axm138j',"template_b9v6lt9",{name: errorsLess.name, email: errorsLess.email, message: errorsLess.message}, "user_QaiQuaMKR3FID7WNlOIqG")
            .then(result => {
                this.setState({
                    show:true,
                    name: '',
                    message: '',
                    email: '',
                    loading: false
                })
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
            
        }
        
    }
    render() {
        if (this.state.loading === true) {
            return <LoaderPage/>
        }
        const {errors} = this.state
        return (
            <div id="form" className="card container p-5">
                <p className="title-form title is-3 p-5"> <b>Contact Form</b> </p>
                <form onSubmit={this.sendEmail} className="container">
                    <div>
                        <label className="label">Name</label>
                        <div class="control has-icons-left has-icons-right">
                            <input
                            onChange={this.handleChange}
                            class="input" 
                            type="text" 
                            placeholder="Name"
                            name="name"
                            value={this.state.name}
                            />
                            <span class="icon is-small is-left">
                            <i class="fas fa-user"></i>
                            </span>
                        </div>
                        {errors.name && <p class="help is-danger">{errors.name}</p> } 
                    </div>

                    <div class="field">
                        <label class="label">Email</label>
                        <div class="control has-icons-left has-icons-right">
                            <input
                            onChange={this.handleChange}
                            class="input"
                            type="email"
                            placeholder="example@example.com"
                            name="email"
                            value={this.state.email}
                            />
                            <span class="icon is-small is-left">
                            <i class="fas fa-envelope"></i>
                            </span>
                        </div>
                        {errors.email && <p class="help is-danger">{errors.email}</p> } 
                    </div>
                    <div class="field">
                        <label class="label">Message</label>
                        <div class="control">
                            <textarea 
                            onChange={this.handleChange} 
                            class="textarea" 
                            placeholder="Message"
                            name="message"
                            value={this.state.message}
                            ></textarea>
                        </div>
                        {errors.message && <p class="help is-danger">{errors.message}</p> } 
                    </div>
                    <div class="field">
                        <div class="control">
                            <button disabled={this.state.sendButton} type="submit" class="button is-warning" >Send</button>
                        </div>
                    </div>
                </form>
                <SweetAlert
                    show={this.state.show}
                    title='Pachamanic ha recibido tu correo'
                    text="Sigue navegando"
                    onConfirm={() => this.setState({ show: false })}
                />
            </div>
        )
    }
}