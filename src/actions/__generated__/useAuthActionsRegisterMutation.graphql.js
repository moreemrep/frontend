/**
 * @flow
 * @relayHash 7c949fbfadb921394f4f6dfc80ba504f
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type Tipo = "FEMININA" | "MASCULINA" | "MISTA" | "%future added value";
export type CriarRepublicaInput = {|
  nome: string,
  endereco: string,
  localizacao: $ReadOnlyArray<number>,
  tipo: Tipo,
  descricao: string,
  disponivel: boolean,
|};
export type useAuthActionsRegisterMutationVariables = {|
  input: CriarRepublicaInput
|};
export type useAuthActionsRegisterMutationResponse = {|
  +payload: {|
    +success: boolean,
    +error: ?string,
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
    "kind": "LinkedField",
    "alias": "payload",
    "name": "criarRepublica",
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
    "name": "useAuthActionsRegisterMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "useAuthActionsRegisterMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "useAuthActionsRegisterMutation",
    "id": null,
    "text": "mutation useAuthActionsRegisterMutation(\n  $input: CriarRepublicaInput!\n) {\n  payload: criarRepublica(input: $input) {\n    success\n    error\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '4961044a086f096c85a67013d2cab739';
module.exports = node;
