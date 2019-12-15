import { execute } from 'apollo-link';
import { setContext } from 'apollo-link-context';
import { HttpLink } from 'apollo-link-http';
import { parse } from 'graphql';
import { Environment, Network, RecordSource, Store } from 'relay-runtime';
import { useFirebase } from './services/useFirebase';

const { auth } = useFirebase();

let userFire: firebase.User | null;
auth.onAuthStateChanged(user => {
  userFire = user;
});

const authLink = setContext(async (_: any, { headers }: any) =>
  userFire
    ? {
        headers: {
          ...headers,
          token: await userFire.getIdToken(true)
        }
      }
    : {
        headers: {
          ...headers
        }
      }
);

const httpLink = new HttpLink({
  // eslint-disable-next-line no-undef
  uri: process.env.REACT_APP_GRAPHQL
});

function fetchFunction(operation: { text: any }, variables: any, cacheConfig: any, uploadables: any): any {
  return execute(authLink.concat(httpLink), {
    query: parse(operation.text),
    variables
  });
}

const network = Network.create(fetchFunction);
const store = new Store(new RecordSource());

export const environment = new Environment({
  network,
  store
});
