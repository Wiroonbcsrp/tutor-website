/**
 * @flow
 * @relayHash b6dcde59d7f4d9abba24891d362f6ab4
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type blogFooterQueryVariables = {||};
export type blogFooterQueryResponse = {|
  +blogContentViewer: ?{|
    +allBlogContent: ?{|
      +edges: $ReadOnlyArray<?{|
        +node: ?{|
          +id: string,
          +name: string,
          +metaDescription: string,
          +thumbnail: string,
        |}
      |}>
    |}
  |}
|};
export type blogFooterQuery = {|
  variables: blogFooterQueryVariables,
  response: blogFooterQueryResponse,
|};
*/


/*
query blogFooterQuery {
  blogContentViewer {
    allBlogContent(first: 3) {
      edges {
        node {
          id
          name
          metaDescription
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
  "name": "allBlogContent",
  "storageKey": "allBlogContent(first:3)",
  "args": [
    {
      "kind": "Literal",
      "name": "first",
      "value": 3
    }
  ],
  "concreteType": "BlogContentNodeConnection",
  "plural": false,
  "selections": [
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "edges",
      "storageKey": null,
      "args": null,
      "concreteType": "BlogContentNodeEdge",
      "plural": true,
      "selections": [
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "node",
          "storageKey": null,
          "args": null,
          "concreteType": "BlogContentNode",
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
              "name": "metaDescription",
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
    "name": "blogFooterQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "blogContentViewer",
        "storageKey": null,
        "args": null,
        "concreteType": "BlogContentViewer",
        "plural": false,
        "selections": [
          (v1/*: any*/)
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "blogFooterQuery",
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "blogContentViewer",
        "storageKey": null,
        "args": null,
        "concreteType": "BlogContentViewer",
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
    "name": "blogFooterQuery",
    "id": null,
    "text": "query blogFooterQuery {\n  blogContentViewer {\n    allBlogContent(first: 3) {\n      edges {\n        node {\n          id\n          name\n          metaDescription\n          thumbnail\n        }\n      }\n    }\n    id\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '26b7d00ae88a6faf0df652672bd5a984';
module.exports = node;
