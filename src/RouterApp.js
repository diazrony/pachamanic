import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Layout } from './components/Layout'
import { AdminCanvas } from './pages/admin/AdminCanvas'
import { AdminCostos } from './pages/admin/AdminCostos'
import { AdminHome } from './pages/admin/AdminHome'
import { AdminPrecio } from './pages/admin/AdminPrecio'
import { AdminRetorno } from './pages/admin/AdminRetorno'
import { Aplication } from './pages/Aplication'
import { Contact } from './pages/Contact'
import { Home } from './pages/Home'
import { Login } from './pages/Login'
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
                        <Route exact path='/login' component={Login}/>
                        <Route exact path='/admin' component={AdminHome}/>
                        <Route exact path='/admin/costos' component={AdminCostos}/>
                        <Route exact path='/admin/precios' component={AdminPrecio}/>
                        <Route exact path='/admin/retorno' component={AdminRetorno}/>
                        <Route exact path='/admin/canvas' component={AdminCanvas}/>
                    </Switch>
                </Layout>
            </BrowserRouter>  
        </>
    )
}
