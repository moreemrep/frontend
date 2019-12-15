/**
 * @flow
 * @relayHash da601b74ef3d47b71aee1b330a530545
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
      +descricao: ?string,
      +localizacao: ?$ReadOnlyArray<number>,
    |}>,
    +centro: $ReadOnlyArray<number>,
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
      localizacao
    }
    centro
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
            "kind": "ScalarField",
            "alias": null,
            "name": "localizacao",
            "args": null,
            "storageKey": null
          }
        ]
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "centro",
        "args": null,
        "storageKey": null
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
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "useRepublicaActionsProcurarRepublicaMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "useRepublicaActionsProcurarRepublicaMutation",
    "id": null,
    "text": "mutation useRepublicaActionsProcurarRepublicaMutation(\n  $input: ProcurarRepublicaInput!\n) {\n  payload: procurarRepublica(input: $input) {\n    success\n    error\n    republicas {\n      nome\n      distancia\n      descricao\n      localizacao\n    }\n    centro\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '7178588fb73aba0345f64c5837e016d0';
module.exports = node;
