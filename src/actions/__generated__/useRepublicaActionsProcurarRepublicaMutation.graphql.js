/**
 * @flow
 * @relayHash aa8cebec4a1c23d30b7f5519011378a9
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type Tipo = "FEMININA" | "MASCULINA" | "MISTA" | "%future added value";
export type ProcurarRepublicaInput = {|
  universidade: string,
  tipo: Tipo,
  distancia: number,
|};
export type useRepublicaActionsProcurarRepublicaMutationVariables = {|
  input: ProcurarRepublicaInput
|};
export type useRepublicaActionsProcurarRepublicaMutationResponse = {|
  +payload: {|
    +success: boolean,
    +error: ?string,
    +republicas: $ReadOnlyArray<{|
      +nome: string,
      +distancia: number,
      +descricao: string,
      +localizacao: ?{|
        +latitude: number,
        +longitude: number,
      |},
    |}>,
    +centro: {|
      +latitude: number,
      +longitude: number,
    |},
  |}
|};
export type useRepublicaActionsProcurarRepublicaMutation = {|
  variables: useRepublicaActionsProcurarRepublicaMutationVariables,
  response: useRepublicaActionsProcurarRepublicaMutationResponse,
|};
*/


/*
mutation useRepublicaActionsProcurarRepublicaMutation(
  $input: ProcurarRepublicaInput!
) {
  payload: procurarRepublica(input: $input) {
    success
    error
    republicas {
      nome
      distancia
      descricao
      localizacao {
        latitude
        longitude
      }
    }
    centro {
      latitude
      longitude
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "ProcurarRepublicaInput!",
    "defaultValue": null
  }
],
v1 = [
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
],
v2 = [
  {
    "kind": "LinkedField",
    "alias": "payload",
    "name": "procurarRepublica",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "ProcurarRepublicaPayload",
    "plural": false,
    "selections": [
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "success",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "error",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "republicas",
        "storageKey": null,
        "args": null,
        "concreteType": "RepublicaPayload",
        "plural": true,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "nome",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "distancia",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "descricao",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "localizacao",
            "storageKey": null,
            "args": null,
            "concreteType": "Coordenadas",
            "plural": false,
            "selections": (v1/*: any*/)
          }
        ]
      },
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "centro",
        "storageKey": null,
        "args": null,
        "concreteType": "Coordenadas",
        "plural": false,
        "selections": (v1/*: any*/)
      }
    ]
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "useRepublicaActionsProcurarRepublicaMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v2/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "useRepublicaActionsProcurarRepublicaMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v2/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "useRepublicaActionsProcurarRepublicaMutation",
    "id": null,
    "text": "mutation useRepublicaActionsProcurarRepublicaMutation(\n  $input: ProcurarRepublicaInput!\n) {\n  payload: procurarRepublica(input: $input) {\n    success\n    error\n    republicas {\n      nome\n      distancia\n      descricao\n      localizacao {\n        latitude\n        longitude\n      }\n    }\n    centro {\n      latitude\n      longitude\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'f477a5b0dd87a77616ca1f801ebb84af';
module.exports = node;
