import React from 'react'
import { Footer } from './Footer'
import { Header } from './Header'

export const Layout = (props) => {
    return (
        <div>
            <React.Fragment>
                <Header/>
                {props.children}
                <Footer/>
            </React.Fragment>
        </div>
    )
}
