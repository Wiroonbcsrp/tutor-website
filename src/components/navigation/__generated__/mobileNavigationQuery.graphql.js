/**
 * @flow
 * @relayHash 94861b5a64eb453aca9fe05b78b3eff9
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type mobileNavigationQueryVariables = {||};
export type mobileNavigationQueryResponse = {|
  +blogCategoryViewer: ?{|
    +allBlogCategory: ?{|
      +edges: $ReadOnlyArray<?{|
        +node: ?{|
          +id: string,
          +name: string,
          +metaDescription: string,
          +slug: string,
        |}
      |}>
    |}
  |}
|};
export type mobileNavigationQuery = {|
  variables: mobileNavigationQueryVariables,
  response: mobileNavigationQueryResponse,
|};
*/


/*
query mobileNavigationQuery {
  blogCategoryViewer {
    allBlogCategory {
      edges {
        node {
          id
          name
          metaDescription
          slug
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
  "name": "allBlogCategory",
  "storageKey": null,
  "args": null,
  "concreteType": "BlogCategoryNodeConnection",
  "plural": false,
  "selections": [
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "edges",
      "storageKey": null,
      "args": null,
      "concreteType": "BlogCategoryNodeEdge",
      "plural": true,
      "selections": [
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "node",
          "storageKey": null,
          "args": null,
          "concreteType": "BlogCategoryNode",
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
              "name": "slug",
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
    "name": "mobileNavigationQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "blogCategoryViewer",
        "storageKey": null,
        "args": null,
        "concreteType": "BlogCategoryViewer",
        "plural": false,
        "selections": [
          (v1/*: any*/)
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "mobileNavigationQuery",
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "blogCategoryViewer",
        "storageKey": null,
        "args": null,
        "concreteType": "BlogCategoryViewer",
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
    "name": "mobileNavigationQuery",
    "id": null,
    "text": "query mobileNavigationQuery {\n  blogCategoryViewer {\n    allBlogCategory {\n      edges {\n        node {\n          id\n          name\n          metaDescription\n          slug\n        }\n      }\n    }\n    id\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '51b013fe829c95c32f087e76d06b0eb7';
module.exports = node;
