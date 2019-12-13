import React from 'react'
import { Route, Redirect, Switch, BrowserRouter } from 'react-router-dom'
import { useAuthStore } from '../store/reducers/auth-reducer'
import { LandingPage } from '../pages/LandingPage'
import { ProcurarRepublica } from '../pages/ProcurarRepublica'
import { EditarRepublica } from '../pages/EditarRepublica'
import { CadastrarRepublica } from '../pages/CadastrarRepublica'
import { Login } from '../pages/Login'
import { GAListener } from './gaListener'

export function Router() {
  const [user] = useAuthStore()
  const logado = !!user.email

  return (
    <BrowserRouter>
      <GAListener>
        <Switch>
          <Route path="/procurar" component={ProcurarRepublica} />
          {logado && <Route path="/editar" component={EditarRepublica} />}
          {!logado && <Route path="/cadastrar" component={CadastrarRepublica} />}
          {!logado && <Route path="/login" component={Login} />}
          <Route path="/" component={LandingPage} />
          <Redirect to="/" exact />
        </Switch>
      </GAListener>
    </BrowserRouter>
  )
}
