/**
 * @flow
 * @relayHash 3c6530c9d6783822b7554610f0672ebd
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type feedbackHomeQueryVariables = {||};
export type feedbackHomeQueryResponse = {|
  +customerViewer: ?{|
    +allCustomer: ?{|
      +edges: $ReadOnlyArray<?{|
        +node: ?{|
          +id: string,
          +name: string,
          +position: string,
          +quote: string,
          +thumbnail: ?string,
        |}
      |}>
    |}
  |}
|};
export type feedbackHomeQuery = {|
  variables: feedbackHomeQueryVariables,
  response: feedbackHomeQueryResponse,
|};
*/


/*
query feedbackHomeQuery {
  customerViewer {
    allCustomer {
      edges {
        node {
          id
          name
          position
          quote
          thumbnail
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
    "name": "feedbackHomeQuery",
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
    "name": "feedbackHomeQuery",
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
    "name": "feedbackHomeQuery",
    "id": null,
    "text": "query feedbackHomeQuery {\n  customerViewer {\n    allCustomer {\n      edges {\n        node {\n          id\n          name\n          position\n          quote\n          thumbnail\n        }\n      }\n    }\n    id\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '70f3f4bffeb30829c4573efad76b6bcf';
module.exports = node;
