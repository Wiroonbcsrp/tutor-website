/**
 * @flow
 * @relayHash 1867e5cb634b35773c1de0162e33d93e
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type slideCustomerQueryVariables = {||};
export type slideCustomerQueryResponse = {|
  +customerViewer: ?{|
    +allCustomer: ?{|
      +edges: $ReadOnlyArray<?{|
        +node: ?{|
          +id: string,
          +name: string,
          +position: string,
          +quote: string,
          +thumbnail: ?string,
          +text: string,
        |}
      |}>
    |}
  |}
|};
export type slideCustomerQuery = {|
  variables: slideCustomerQueryVariables,
  response: slideCustomerQueryResponse,
|};
*/


/*
query slideCustomerQuery {
  customerViewer {
    allCustomer {
      edges {
        node {
          id
          name
          position
          quote
          thumbnail
          text
        }
      }
    }
    id
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v1 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "allCustomer",
  "storageKey": null,
  "args": null,
  "concreteType": "CustomerNodeConnection",
  "plural": false,
  "selections": [
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "edges",
      "storageKey": null,
      "args": null,
      "concreteType": "CustomerNodeEdge",
      "plural": true,
      "selections": [
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "node",
          "storageKey": null,
          "args": null,
          "concreteType": "CustomerNode",
          "plural": false,
          "selections": [
            (v0/*: any*/),
            {
              "kind": "ScalarField",
              "alias": null,
              "name": "name",
              "args": null,
              "storageKey": null
            },
            {
              "kind": "ScalarField",
              "alias": null,
              "name": "position",
              "args": null,
              "storageKey": null
            },
            {
              "kind": "ScalarField",
              "alias": null,
              "name": "quote",
              "args": null,
              "storageKey": null
            },
            {
              "kind": "ScalarField",
              "alias": null,
              "name": "thumbnail",
              "args": null,
              "storageKey": null
            },
            {
              "kind": "ScalarField",
              "alias": null,
              "name": "text",
              "args": null,
              "storageKey": null
            }
          ]
        }
      ]
    }
  ]
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "slideCustomerQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "customerViewer",
        "storageKey": null,
        "args": null,
        "concreteType": "CustomerViewer",
        "plural": false,
        "selections": [
          (v1/*: any*/)
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "slideCustomerQuery",
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "customerViewer",
        "storageKey": null,
        "args": null,
        "concreteType": "CustomerViewer",
        "plural": false,
        "selections": [
          (v1/*: any*/),
          (v0/*: any*/)
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "slideCustomerQuery",
    "id": null,
    "text": "query slideCustomerQuery {\n  customerViewer {\n    allCustomer {\n      edges {\n        node {\n          id\n          name\n          position\n          quote\n          thumbnail\n          text\n        }\n      }\n    }\n    id\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'dd5b8bb70dc24547917d248bc01f1f1d';
module.exports = node;
