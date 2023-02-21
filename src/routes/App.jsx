import React from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'
import { Layout } from '../containers/Layout'
// import { Login } from '../containers/Login'
import { Home } from '../pages/Home'
import { PasswordRecovery } from '../pages/PasswordRecovery'
import { SendEmail } from '../pages/SendEmail'
import { Login } from '../pages/Login'
import { NotFound } from '../pages/NotFound'
import { NewPassword } from '../pages/NewPassword'
import { MyAccount } from '../pages/MyAccount'
import { Checkout } from '../pages/Checkout'
import { Orders } from '../pages/Orders'
import '../styles/global.css'
import AppContext from '../context/AppContext'
import { useInitialState } from '../hooks/useInitialState'

export const App = () => {
  const initialState = useInitialState()

  return (
    <AppContext.Provider value={initialState}>
      <HashRouter basename='/'>
        <Layout>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/password_recovery' component={PasswordRecovery} />
            <Route exact path='/send_email' component={SendEmail} />
            <Route exact path='/new_password' component={NewPassword} />
            <Route exact path='/account' component={MyAccount} />
            <Route exact path='/checkout' component={Checkout} />
            <Route exact path='/orders' component={Orders} />
            <Route path='*' component={NotFound} />
          </Switch>
        </Layout>
      </HashRouter>
    </AppContext.Provider>
  )
}
