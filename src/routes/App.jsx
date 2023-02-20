import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Layout } from '../containers/Layout'
import { Login } from '../containers/Login'
import { RecoveryPassword } from '../containers/RecoveryPassword'
import './styles/global.css'

export const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Layout>
          <Route exact path='/login' component={Login} />
          <Route exact path='/recovery_password' component={RecoveryPassword} />
        </Layout>
      </Switch>
    </BrowserRouter>
  )
}
