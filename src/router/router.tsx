import React, { lazy, Suspense } from 'react'
import { Route, Redirect, Switch, HashRouter } from 'react-router-dom'
import { useAuthStore } from '../store/reducers/auth-reducer'
import { GAListener } from './gaListener'

const LoadingMessage = () => <div>loading...</div>

const CadastrarRepublica = lazy(() => import('../pages/CadastrarRepublica'))
const ProcurarRepublica = lazy(() => import('../pages/ProcurarRepublica'))
const EditarRepublica = lazy(() => import('../pages/EditarRepublica'))
const Login = lazy(() => import('../pages/Login'))
const Info = lazy(() => import('../pages/info'))
const LandingPage = lazy(() => import('../pages/LandingPage'))

export function Router() {
  const [user] = useAuthStore()
  const logado = !!user.email

  return (
    <HashRouter>
      <GAListener>
        <Suspense fallback={<LoadingMessage />}>
          <Switch>
            <Route path="/procurar" component={ProcurarRepublica} />
            {logado && <Route path="/editar" component={EditarRepublica} />}
            {!logado && <Route path="/cadastrar" component={CadastrarRepublica} />}
            {!logado && <Route path="/login" component={Login} />}
            <Route path="/informacoes" component={Info} />
            <Route path="/" component={LandingPage} />
            <Redirect to="/" exact />
          </Switch>
        </Suspense>
      </GAListener>
    </HashRouter>
  )
}
