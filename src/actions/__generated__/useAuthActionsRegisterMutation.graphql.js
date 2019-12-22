/**
 * @flow
 * @relayHash b109fc975c32f288dd837fddad7b3a4c
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type Tipo = "FEMININA" | "MASCULINA" | "MISTA" | "%future added value";
export type CriarRepublicaInput = {|
  nome: string,
  endereco: string,
  localizacao: CoordenadasInput,
  tipo: Tipo,
  descricao: string,
  disponivel: boolean,
  mostrarNoMapa: boolean,
|};
export type CoordenadasInput = {|
  latitude: number,
  longitude: number,
|};
export type useAuthActionsRegisterMutationVariables = {|
  input: CriarRepublicaInput
|};
export type useAuthActionsRegisterMutationResponse = {|
  +payload: {|
    +success: boolean,
    +error: ?string,
    +republica: ?{|
      +nome: string,
      +disponivel: boolean,
      +endereco: string,
      +localizacao: {|
        +latitude: number,
        +longitude: number,
      |},
      +mostrarNoMapa: boolean,
      +tipo: Tipo,
    |},
  |}
|};
export type useAuthActionsRegisterMutation = {|
  variables: useAuthActionsRegisterMutationVariables,
  response: useAuthActionsRegisterMutationResponse,
|};
*/


/*
mutation useAuthActionsRegisterMutation(
  $input: CriarRepublicaInput!
) {
  payload: criarRepublica(input: $input) {
    success
    error
    republica {
      nome
      disponivel
      endereco
      localizacao {
        latitude
        longitude
      }
      mostrarNoMapa
      tipo
      id
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "CriarRepublicaInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "input",
    "variableName": "input"
  }
],
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "success",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "error",
  "args": null,
  "storageKey": null
},
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "nome",
  "args": null,
  "storageKey": null
},
v5 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "disponivel",
  "args": null,
  "storageKey": null
},
v6 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "endereco",
  "args": null,
  "storageKey": null
},
v7 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "localizacao",
  "storageKey": null,
  "args": null,
  "concreteType": "Coordenadas",
  "plural": false,
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "latitude",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "longitude",
      "args": null,
      "storageKey": null
    }
  ]
},
v8 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "mostrarNoMapa",
  "args": null,
  "storageKey": null
},
v9 = {
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
    "name": "useAuthActionsRegisterMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": "payload",
        "name": "criarRepublica",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "CriarRepublicaPayload",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "republica",
            "storageKey": null,
            "args": null,
            "concreteType": "RepublicaUser",
            "plural": false,
            "selections": [
              (v4/*: any*/),
              (v5/*: any*/),
              (v6/*: any*/),
              (v7/*: any*/),
              (v8/*: any*/),
              (v9/*: any*/)
            ]
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "useAuthActionsRegisterMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": "payload",
        "name": "criarRepublica",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "CriarRepublicaPayload",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "republica",
            "storageKey": null,
            "args": null,
            "concreteType": "RepublicaUser",
            "plural": false,
            "selections": [
              (v4/*: any*/),
              (v5/*: any*/),
              (v6/*: any*/),
              (v7/*: any*/),
              (v8/*: any*/),
              (v9/*: any*/),
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
    "name": "useAuthActionsRegisterMutation",
    "id": null,
    "text": "mutation useAuthActionsRegisterMutation(\n  $input: CriarRepublicaInput!\n) {\n  payload: criarRepublica(input: $input) {\n    success\n    error\n    republica {\n      nome\n      disponivel\n      endereco\n      localizacao {\n        latitude\n        longitude\n      }\n      mostrarNoMapa\n      tipo\n      id\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '0f2d89314729e611d9244f39a040907e';
module.exports = node;
