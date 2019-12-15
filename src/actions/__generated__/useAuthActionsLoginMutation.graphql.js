/**
 * @flow
 * @relayHash e63e60d577fbbef0fa0283282c760250
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type Tipo = "FEMININA" | "MASCULINA" | "MISTA" | "%future added value";
export type useAuthActionsLoginMutationVariables = {||};
export type useAuthActionsLoginMutationResponse = {|
  +payload: {|
    +success: boolean,
    +error: ?string,
    +republica: {|
      +nome: ?string,
      +disponivel: ?boolean,
      +endereco: ?string,
      +localizacao: ?$ReadOnlyArray<?number>,
      +mostrarNoMapa: ?boolean,
      +tipo: ?Tipo,
    |},
  |}
|};
export type useAuthActionsLoginMutation = {|
  variables: useAuthActionsLoginMutationVariables,
  response: useAuthActionsLoginMutationResponse,
|};
*/


/*
mutation useAuthActionsLoginMutation {
  payload: login {
    success
    error
    republica {
      nome
      disponivel
      endereco
      localizacao
      mostrarNoMapa
      tipo
      id
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "success",
  "args": null,
  "storageKey": null
},
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "error",
  "args": null,
  "storageKey": null
},
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "nome",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "disponivel",
  "args": null,
  "storageKey": null
},
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "endereco",
  "args": null,
  "storageKey": null
},
v5 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "localizacao",
  "args": null,
  "storageKey": null
},
v6 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "mostrarNoMapa",
  "args": null,
  "storageKey": null
},
v7 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "tipo",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "useAuthActionsLoginMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": "payload",
        "name": "login",
        "storageKey": null,
        "args": null,
        "concreteType": "LoginPayload",
        "plural": false,
        "selections": [
          (v0/*: any*/),
          (v1/*: any*/),
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "republica",
            "storageKey": null,
            "args": null,
            "concreteType": "RepublicaUser",
            "plural": false,
            "selections": [
              (v2/*: any*/),
              (v3/*: any*/),
              (v4/*: any*/),
              (v5/*: any*/),
              (v6/*: any*/),
              (v7/*: any*/)
            ]
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "useAuthActionsLoginMutation",
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": "payload",
        "name": "login",
        "storageKey": null,
        "args": null,
        "concreteType": "LoginPayload",
        "plural": false,
        "selections": [
          (v0/*: any*/),
          (v1/*: any*/),
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "republica",
            "storageKey": null,
            "args": null,
            "concreteType": "RepublicaUser",
            "plural": false,
            "selections": [
              (v2/*: any*/),
              (v3/*: any*/),
              (v4/*: any*/),
              (v5/*: any*/),
              (v6/*: any*/),
              (v7/*: any*/),
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "id",
                "args": null,
                "storageKey": null
              }
            ]
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "mutation",
    "name": "useAuthActionsLoginMutation",
    "id": null,
    "text": "mutation useAuthActionsLoginMutation {\n  payload: login {\n    success\n    error\n    republica {\n      nome\n      disponivel\n      endereco\n      localizacao\n      mostrarNoMapa\n      tipo\n      id\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '150152b59f99a52869835e3fc9b51dcc';
module.exports = node;
