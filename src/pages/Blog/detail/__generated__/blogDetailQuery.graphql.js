/**
 * @flow
 * @relayHash 82fcc4900a21943687283196c867f425
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type blogDetailQueryVariables = {|
  id?: ?string
|};
export type blogDetailQueryResponse = {|
  +detail: ?{|
    +allBlogContent: ?{|
      +edges: $ReadOnlyArray<?{|
        +node: ?{|
          +id: string,
          +name: string,
          +text: string,
          +metaDescription: string,
          +thumbnail: string,
          +publishDate: any,
          +category: {|
            +id: string,
            +name: string,
            +slug: string,
            +metaDescription: string,
            +metaKeyword: string,
          |},
          +tag: {|
            +edges: $ReadOnlyArray<?{|
              +node: ?{|
                +id: string,
                +name: string,
              |}
            |}>
          |},
        |}
      |}>
    |}
  |},
  +category: ?{|
    +allBlogCategory: ?{|
      +edges: $ReadOnlyArray<?{|
        +node: ?{|
          +id: string,
          +name: string,
          +slug: string,
          +metaDescription: string,
          +metaKeyword: string,
        |}
      |}>
    |}
  |},
|};
export type blogDetailQuery = {|
  variables: blogDetailQueryVariables,
  response: blogDetailQueryResponse,
|};
*/


/*
query blogDetailQuery(
  $id: ID
) {
  detail: blogContentViewer {
    allBlogContent(id: $id) {
      edges {
        node {
          id
          name
          text
          metaDescription
          thumbnail
          publishDate
          category {
            id
            name
            slug
            metaDescription
            metaKeyword
          }
          tag {
            edges {
              node {
                id
                name
              }
            }
          }
        }
      }
    }
    id
  }
  category: blogCategoryViewer {
    allBlogCategory {
      edges {
        node {
          id
          name
          slug
          metaDescription
          metaKeyword
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
    "name": "id",
    "type": "ID",
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
  "kind": "ScalarField",
  "alias": null,
  "name": "metaDescription",
  "args": null,
  "storageKey": null
},
v4 = [
  (v1/*: any*/),
  (v2/*: any*/),
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "slug",
    "args": null,
    "storageKey": null
  },
  (v3/*: any*/),
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "metaKeyword",
    "args": null,
    "storageKey": null
  }
],
v5 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "allBlogContent",
  "storageKey": null,
  "args": [
    {
      "kind": "Variable",
      "name": "id",
      "variableName": "id"
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
            (v1/*: any*/),
            (v2/*: any*/),
            {
              "kind": "ScalarField",
              "alias": null,
              "name": "text",
              "args": null,
              "storageKey": null
            },
            (v3/*: any*/),
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
              "name": "publishDate",
              "args": null,
              "storageKey": null
            },
            {
              "kind": "LinkedField",
              "alias": null,
              "name": "category",
              "storageKey": null,
              "args": null,
              "concreteType": "BlogCategoryNode",
              "plural": false,
              "selections": (v4/*: any*/)
            },
            {
              "kind": "LinkedField",
              "alias": null,
              "name": "tag",
              "storageKey": null,
              "args": null,
              "concreteType": "BlogTagNodeConnection",
              "plural": false,
              "selections": [
                {
                  "kind": "LinkedField",
                  "alias": null,
                  "name": "edges",
                  "storageKey": null,
                  "args": null,
                  "concreteType": "BlogTagNodeEdge",
                  "plural": true,
                  "selections": [
                    {
                      "kind": "LinkedField",
                      "alias": null,
                      "name": "node",
                      "storageKey": null,
                      "args": null,
                      "concreteType": "BlogTagNode",
                      "plural": false,
                      "selections": [
                        (v1/*: any*/),
                        (v2/*: any*/)
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
},
v6 = {
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
          "selections": (v4/*: any*/)
        }
      ]
    }
  ]
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "blogDetailQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": "detail",
        "name": "blogContentViewer",
        "storageKey": null,
        "args": null,
        "concreteType": "BlogContentViewer",
        "plural": false,
        "selections": [
          (v5/*: any*/)
        ]
      },
      {
        "kind": "LinkedField",
        "alias": "category",
        "name": "blogCategoryViewer",
        "storageKey": null,
        "args": null,
        "concreteType": "BlogCategoryViewer",
        "plural": false,
        "selections": [
          (v6/*: any*/)
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "blogDetailQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": "detail",
        "name": "blogContentViewer",
        "storageKey": null,
        "args": null,
        "concreteType": "BlogContentViewer",
        "plural": false,
        "selections": [
          (v5/*: any*/),
          (v1/*: any*/)
        ]
      },
      {
        "kind": "LinkedField",
        "alias": "category",
        "name": "blogCategoryViewer",
        "storageKey": null,
        "args": null,
        "concreteType": "BlogCategoryViewer",
        "plural": false,
        "selections": [
          (v6/*: any*/),
          (v1/*: any*/)
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "blogDetailQuery",
    "id": null,
    "text": "query blogDetailQuery(\n  $id: ID\n) {\n  detail: blogContentViewer {\n    allBlogContent(id: $id) {\n      edges {\n        node {\n          id\n          name\n          text\n          metaDescription\n          thumbnail\n          publishDate\n          category {\n            id\n            name\n            slug\n            metaDescription\n            metaKeyword\n          }\n          tag {\n            edges {\n              node {\n                id\n                name\n              }\n            }\n          }\n        }\n      }\n    }\n    id\n  }\n  category: blogCategoryViewer {\n    allBlogCategory {\n      edges {\n        node {\n          id\n          name\n          slug\n          metaDescription\n          metaKeyword\n        }\n      }\n    }\n    id\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'd362be24bf57585072514634ab0e0b6e';
module.exports = node;
