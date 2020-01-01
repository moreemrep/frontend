/**
 * @flow
 * @relayHash 181ffd02c6bd826c2e451238843b45e1
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type Tipo = "FEMININA" | "MASCULINA" | "MISTA" | "%future added value";
export type EditarRepublicaInput = {|
  nome?: ?string,
  endereco?: ?string,
  localizacao: CoordenadasInput,
  tipo?: ?Tipo,
  descricao?: ?string,
  disponivel?: ?boolean,
|};
export type CoordenadasInput = {|
  latitude: number,
  longitude: number,
|};
export type useAuthActionsEditarMutationVariables = {|
  input: EditarRepublicaInput
|};
export type useAuthActionsEditarMutationResponse = {|
  +payload: {|
    +success: boolean,
    +error: ?string,
  |}
|};
export type useAuthActionsEditarMutation = {|
  variables: useAuthActionsEditarMutationVariables,
  response: useAuthActionsEditarMutationResponse,
|};
*/


/*
mutation useAuthActionsEditarMutation(
  $input: EditarRepublicaInput!
) {
  payload: editarRepublica(input: $input) {
    success
    error
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "EditarRepublicaInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": "payload",
    "name": "editarRepublica",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "ResponsePayload",
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
      }
    ]
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "useAuthActionsEditarMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "useAuthActionsEditarMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "useAuthActionsEditarMutation",
    "id": null,
    "text": "mutation useAuthActionsEditarMutation(\n  $input: EditarRepublicaInput!\n) {\n  payload: editarRepublica(input: $input) {\n    success\n    error\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'af4cfa2f624223f9458fead1de14c72a';
module.exports = node;
