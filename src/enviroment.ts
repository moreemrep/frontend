import { execute } from 'apollo-link'
import { setContext } from 'apollo-link-context'
import { HttpLink } from 'apollo-link-http'
// import { WebSocketLink } from 'apollo-link-ws'
import { parse } from 'graphql'
import { Environment, Network, RecordSource, Store } from 'relay-runtime'
// import firebase from './services/firebase'

// let userFire: firebase.User

// firebase.auth().onAuthStateChanged((user: any) => {
//   userFire = user
// })

const authLink = setContext(async (_: any, { headers }: any) =>
  1
    ? {
        headers: {
          ...headers,
          token: 'teste'
          // token: await userFire.getIdToken(true)
        }
      }
    : {
        headers: {
          ...headers
        }
      }
)

const httpLink = new HttpLink({
  uri: 'http://localhost:3000/graphql'
})

// const subscriptionLink = () => new WebSocketLink({
//   options: {
//     connectionParams: async () => (userFire ? { token: await userFire.getIdToken(true) } : {}),
//     reconnect: true
//   },
//   uri: __DEV__
//     ? 'ws://192.168.100.13:3000/graphql'
//     : 'wss://automation-batcaverna.herokuapp.com/graphql'
// })

function fetchFunction(
  operation: { text: any },
  variables: any,
  cacheConfig: any,
  uploadables: any
): any {
  return execute(authLink.concat(httpLink), {
    query: parse(operation.text),
    variables
  })
}

// function subscriptionFunction (operation: any, variables: any, cacheConfig: any, observer: any) {
//   return subscriptionLink().request({
//     query: parse(operation.text),
//     variables
//   })
// }

const network = Network.create(fetchFunction)
const store = new Store(new RecordSource())

export const environment = new Environment({
  network,
  store
})
