/**
 * @flow
 * @relayHash 073fb7f3b8be75106b08123984c7adb6
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type ProcurarUniversidadeInput = {|
  nome?: ?string,
  sigla?: ?string,
|};
export type useUniversidadeActionsProcurarUniversidadeMutationVariables = {|
  input: ProcurarUniversidadeInput
|};
export type useUniversidadeActionsProcurarUniversidadeMutationResponse = {|
  +payload: {|
    +success: boolean,
    +error: ?string,
    +universidades: $ReadOnlyArray<{|
      +id: string,
      +nome: string,
      +sigla: string,
    |}>,
  |}
|};
export type useUniversidadeActionsProcurarUniversidadeMutation = {|
  variables: useUniversidadeActionsProcurarUniversidadeMutationVariables,
  response: useUniversidadeActionsProcurarUniversidadeMutationResponse,
|};
*/


/*
mutation useUniversidadeActionsProcurarUniversidadeMutation(
  $input: ProcurarUniversidadeInput!
) {
  payload: procurarUniversidade(input: $input) {
    success
    error
    universidades {
      id
      nome
      sigla
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "ProcurarUniversidadeInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": "payload",
    "name": "procurarUniversidade",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "ProcurarUniversidadePayload",
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
        "name": "universidades",
        "storageKey": null,
        "args": null,
        "concreteType": "Universidade",
        "plural": true,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "id",
            "args": null,
            "storageKey": null
          },
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
            "name": "sigla",
            "args": null,
            "storageKey": null
          }
        ]
      }
    ]
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "useUniversidadeActionsProcurarUniversidadeMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "useUniversidadeActionsProcurarUniversidadeMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "useUniversidadeActionsProcurarUniversidadeMutation",
    "id": null,
    "text": "mutation useUniversidadeActionsProcurarUniversidadeMutation(\n  $input: ProcurarUniversidadeInput!\n) {\n  payload: procurarUniversidade(input: $input) {\n    success\n    error\n    universidades {\n      id\n      nome\n      sigla\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '48a866a38b5350b92d894e98904e32b5';
module.exports = node;
