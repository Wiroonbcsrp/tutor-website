/**
 * @flow
 * @relayHash 0bf5d0d7dbeb522c57ebf177ddf3c759
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
export type registerHomeMutationVariables = {|
  input: RegisterMutationInput
|};
export type registerHomeMutationResponse = {|
  +register: ?{|
    +register: ?{|
      +id: string
    |}
  |}
|};
export type registerHomeMutation = {|
  variables: registerHomeMutationVariables,
  response: registerHomeMutationResponse,
|};
*/


/*
mutation registerHomeMutation(
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
    "name": "registerHomeMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "registerHomeMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "registerHomeMutation",
    "id": null,
    "text": "mutation registerHomeMutation(\n  $input: RegisterMutationInput!\n) {\n  register(input: $input) {\n    register {\n      id\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '52d460014b475543b5a945b83a6c22be';
module.exports = node;
