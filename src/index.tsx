import React from 'react'
import ReactDOM from 'react-dom'
import { Router } from './router/router'
import * as serviceWorker from './serviceWorker'
import { StoreProvider } from './store/StoreProvider'
import { store } from './store/store'
import { RelayEnvironmentProvider } from 'relay-hooks'
import { environment } from './enviroment'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Navb } from './pages/Componentes/Navbar'
import { Background } from './pages/Componentes/background'
import './pages/style.css'

ReactDOM.render(
  <RelayEnvironmentProvider environment={environment}>
    <StoreProvider store={store}>
      <Navb></Navb>
      <Background></Background>
      <Router />
    </StoreProvider>
  </RelayEnvironmentProvider>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
