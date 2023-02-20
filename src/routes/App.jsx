import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Layout } from '../containers/Layout'
import { Login } from '../containers/Login'
import { RecoveryPassword } from '../containers/RecoveryPassword'
import { Home } from '../pages/Home'
import { NotFound } from '../pages/NotFound'
import '../styles/global.css'

export const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/recovery_password' component={RecoveryPassword} />
          <Route path='*' component={NotFound} />
        </Switch>
      </Layout>
    </BrowserRouter>
  )
}
