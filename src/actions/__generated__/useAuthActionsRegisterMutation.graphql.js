/**
 * @flow
 * @relayHash c2a18b622aa87b07a1db269666b33c53
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
  mostrarNoMapa: boolean,
|};
export type useAuthActionsRegisterMutationVariables = {|
  input: CriarRepublicaInput
|};
export type useAuthActionsRegisterMutationResponse = {|
  +payload: {|
    +success: boolean,
    +error: ?string,
    +republica: ?{|
      +nome: ?string,
      +disponivel: ?boolean,
      +endereco: ?string,
      +localizacao: ?$ReadOnlyArray<?number>,
      +mostrarNoMapa: ?boolean,
      +tipo: ?Tipo,
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
      localizacao
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
  "kind": "ScalarField",
  "alias": null,
  "name": "localizacao",
  "args": null,
  "storageKey": null
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
    "text": "mutation useAuthActionsRegisterMutation(\n  $input: CriarRepublicaInput!\n) {\n  payload: criarRepublica(input: $input) {\n    success\n    error\n    republica {\n      nome\n      disponivel\n      endereco\n      localizacao\n      mostrarNoMapa\n      tipo\n      id\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '17c5e4ed917d0446dec17feadae2e498';
module.exports = node;
