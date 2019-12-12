import React from 'react'
import ReactDOM from 'react-dom'
import { Router } from './router/router'
import * as serviceWorker from './serviceWorker'
import { StoreProvider } from './store/StoreProvider'
import { store } from './store/store'
import { RelayEnvironmentProvider } from 'relay-hooks'
import { environment } from './enviroment'

ReactDOM.render(
  <RelayEnvironmentProvider environment={environment}>
    <StoreProvider store={store}>
      <Router />
    </StoreProvider>
  </RelayEnvironmentProvider>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
