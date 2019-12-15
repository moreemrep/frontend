import React, { lazy, Suspense } from 'react';
import { Route, Redirect, Switch, HashRouter } from 'react-router-dom';
import { GAListener } from './gaListener';
import { useAuthStore } from 'src/store/reducers/auth-reducer';

const LoadingMessage = () => <div>loading...</div>;

const CadastrarRepublica = lazy(() => import('../view/Pages/CadastrarRepublica/CadastrarRepublicaPage'));
const EditarRepublica = lazy(() => import('../view/Pages/EditarRepublica'));
const Login = lazy(() => import('../view/Pages/Login'));
const Info = lazy(() => import('../view/Pages/info'));
const LandingPage = lazy(() => import('../view/Pages/LandingPage'));

export function Router() {
  const [user] = useAuthStore();
  const logado = !!user.email;

  return (
    <HashRouter>
      <GAListener>
        <Suspense fallback={<LoadingMessage />}>
          <Switch>
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
  );
}
