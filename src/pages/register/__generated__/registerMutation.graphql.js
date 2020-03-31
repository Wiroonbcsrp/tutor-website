/**
 * @flow
 * @relayHash 4267d210622d4bb7b99a2f86735afffc
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type RegisterMutationInput = {|
  name: string,
  projectName: string,
  projectType: string,
  position: string,
  province: string,
  phone: string,
  email: string,
  unit: string,
  contactType: string,
  clientMutationId?: ?string,
|};
export type registerMutationVariables = {|
  input: RegisterMutationInput
|};
export type registerMutationResponse = {|
  +register: ?{|
    +register: ?{|
      +id: string
    |}
  |}
|};
export type registerMutation = {|
  variables: registerMutationVariables,
  response: registerMutationResponse,
|};
*/


/*
mutation registerMutation(
  $input: RegisterMutationInput!
) {
  register(input: $input) {
    register {
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
    "type": "RegisterMutationInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "register",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "RegisterMutationPayload",
    "plural": false,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "register",
        "storageKey": null,
        "args": null,
        "concreteType": "DataNode",
        "plural": false,
        "selections": [
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
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "registerMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "registerMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "registerMutation",
    "id": null,
    "text": "mutation registerMutation(\n  $input: RegisterMutationInput!\n) {\n  register(input: $input) {\n    register {\n      id\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '11fdc3bdfabed998a4799802c14c22d4';
module.exports = node;
