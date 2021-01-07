import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Layout } from './components/Layout'
import { Aplication } from './pages/Aplication'
import { Contact } from './pages/Contact'
import { Home } from './pages/Home'
import { Presentations } from './pages/Presentations'

export const RouterApp = () => {
    return (
        <>
            <BrowserRouter>
                <Layout>
                    <Switch>
                        <Route exact path='/' component={Home}/>
                        <Route exact path='/presentations' component={Presentations}/>
                        <Route exact path='/aplication' component={Aplication}/>
                        <Route exact path='/contact' component={Contact}/>
                    </Switch>
                </Layout>
            </BrowserRouter>  
        </>
    )
}
