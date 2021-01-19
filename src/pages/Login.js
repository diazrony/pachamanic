import React from 'react'
import axios from 'axios';
import GoogleLogin from 'react-google-login'
import { LoaderPage } from './LoaderPage';

export const Login = (props) => {
    const [isLoading, setLoading] = React.useState(false);
    const responseSuccessGoogle = (res) => {
        setLoading(true)
        console.log(res);
        axios.post('https://apiudlrdandug.herokuapp.com/google', {idtoken: res.tokenId})
            .then( res => {
                setLoading(false)
                window.localStorage.setItem('token', JSON.stringify(res.data));
                props.history.push('/admin')
            })
            .catch(e => console.log(e))
    }
    const responseErrorGoogle = (res) => {
        console.log(res);
    }

    return (
        <div className='container mt-8'>
            {isLoading && <LoaderPage/>}
            { !isLoading && (
                <div className="columns">
                    <div className="column text-center box-center">
                        <h1 className='title is-2'> Genial...!!!</h1>
                        <h2 className='title is-3'> Estas a punto de entrar a la sección administrativa</h2>
                        <h2 className='title is-4'>Registrate / Login</h2>
                    </div>
                    <div className="column box-center">
                        <GoogleLogin
                            clientId="486105028590-uudenu4qbnencsiec6tb67fpmov3r0jj.apps.googleusercontent.com"
                            buttonText="Register / Login with Google"
                            onSuccess={responseSuccessGoogle}
                            onFailure={responseErrorGoogle}
                            cookiePolicy={'single_host_origin'}
                            className='google-btn'
                        />
                    </div>
                </div>
            )}
        </div>
    )
}
