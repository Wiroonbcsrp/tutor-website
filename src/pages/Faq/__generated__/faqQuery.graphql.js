/**
 * @flow
 * @relayHash 052dfef686f137b1f7816bd3a2f30f73
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type faqQueryVariables = {|
  keyword?: ?string
|};
export type faqQueryResponse = {|
  +faqCategoryViewer: ?{|
    +allFaqCategory: ?{|
      +edges: $ReadOnlyArray<?{|
        +node: ?{|
          +id: string,
          +name: string,
          +slug: string,
          +content: {|
            +edges: $ReadOnlyArray<?{|
              +node: ?{|
                +id: string,
                +name: string,
                +text: string,
              |}
            |}>
          |},
        |}
      |}>
    |}
  |}
|};
export type faqQuery = {|
  variables: faqQueryVariables,
  response: faqQueryResponse,
|};
*/


/*
query faqQuery(
  $keyword: String
) {
  faqCategoryViewer {
    allFaqCategory(keyword: $keyword) {
      edges {
        node {
          id
          name
          slug
          content {
            edges {
              node {
                id
                name
                text
              }
            }
          }
        }
      }
    }
    id
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "keyword",
    "type": "String",
    "defaultValue": null
  }
],
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "allFaqCategory",
  "storageKey": null,
  "args": [
    {
      "kind": "Variable",
      "name": "keyword",
      "variableName": "keyword"
    }
  ],
  "concreteType": "FaqCategoryNodeConnection",
  "plural": false,
  "selections": [
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "edges",
      "storageKey": null,
      "args": null,
      "concreteType": "FaqCategoryNodeEdge",
      "plural": true,
      "selections": [
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "node",
          "storageKey": null,
          "args": null,
          "concreteType": "FaqCategoryNode",
          "plural": false,
          "selections": [
            (v1/*: any*/),
            (v2/*: any*/),
            {
              "kind": "ScalarField",
              "alias": null,
              "name": "slug",
              "args": null,
              "storageKey": null
            },
            {
              "kind": "LinkedField",
              "alias": null,
              "name": "content",
              "storageKey": null,
              "args": null,
              "concreteType": "FaqContentNodeConnection",
              "plural": false,
              "selections": [
                {
                  "kind": "LinkedField",
                  "alias": null,
                  "name": "edges",
                  "storageKey": null,
                  "args": null,
                  "concreteType": "FaqContentNodeEdge",
                  "plural": true,
                  "selections": [
                    {
                      "kind": "LinkedField",
                      "alias": null,
                      "name": "node",
                      "storageKey": null,
                      "args": null,
                      "concreteType": "FaqContentNode",
                      "plural": false,
                      "selections": [
                        (v1/*: any*/),
                        (v2/*: any*/),
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
    "name": "faqQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "faqCategoryViewer",
        "storageKey": null,
        "args": null,
        "concreteType": "FaqCategoryViewer",
        "plural": false,
        "selections": [
          (v3/*: any*/)
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "faqQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "faqCategoryViewer",
        "storageKey": null,
        "args": null,
        "concreteType": "FaqCategoryViewer",
        "plural": false,
        "selections": [
          (v3/*: any*/),
          (v1/*: any*/)
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "faqQuery",
    "id": null,
    "text": "query faqQuery(\n  $keyword: String\n) {\n  faqCategoryViewer {\n    allFaqCategory(keyword: $keyword) {\n      edges {\n        node {\n          id\n          name\n          slug\n          content {\n            edges {\n              node {\n                id\n                name\n                text\n              }\n            }\n          }\n        }\n      }\n    }\n    id\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '48bc0dea6b7a83ae2a33c015600256dc';
module.exports = node;
