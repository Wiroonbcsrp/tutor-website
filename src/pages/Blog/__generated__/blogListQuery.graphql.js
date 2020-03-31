/**
 * @flow
 * @relayHash fd94cdc95530204fc1e7d439a9aa6b5e
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type blogListQueryVariables = {|
  category?: ?string
|};
export type blogListQueryResponse = {|
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
  |},
  +banner: ?{|
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
  |},
  +list: ?{|
    +allBlogContent: ?{|
      +edges: $ReadOnlyArray<?{|
        +node: ?{|
          +id: string,
          +name: string,
          +metaDescription: string,
          +thumbnail: string,
          +category: {|
            +id: string,
            +name: string,
            +slug: string,
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
|};
export type blogListQuery = {|
  variables: blogListQueryVariables,
  response: blogListQueryResponse,
|};
*/


/*
query blogListQuery(
  $category: String
) {
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
  banner: blogContentViewer {
    allBlogContent(last: 2) {
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
  list: blogContentViewer {
    allBlogContent(category: $category) {
      edges {
        node {
          id
          name
          metaDescription
          thumbnail
          category {
            id
            name
            slug
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
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "category",
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
  "kind": "ScalarField",
  "alias": null,
  "name": "metaDescription",
  "args": null,
  "storageKey": null
},
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "slug",
  "args": null,
  "storageKey": null
},
v5 = {
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
            (v1/*: any*/),
            (v2/*: any*/),
            (v3/*: any*/),
            (v4/*: any*/)
          ]
        }
      ]
    }
  ]
},
v6 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "thumbnail",
  "args": null,
  "storageKey": null
},
v7 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "allBlogContent",
  "storageKey": "allBlogContent(last:2)",
  "args": [
    {
      "kind": "Literal",
      "name": "last",
      "value": 2
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
            (v3/*: any*/),
            (v6/*: any*/)
          ]
        }
      ]
    }
  ]
},
v8 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "allBlogContent",
  "storageKey": null,
  "args": [
    {
      "kind": "Variable",
      "name": "category",
      "variableName": "category"
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
            (v3/*: any*/),
            (v6/*: any*/),
            {
              "kind": "LinkedField",
              "alias": null,
              "name": "category",
              "storageKey": null,
              "args": null,
              "concreteType": "BlogCategoryNode",
              "plural": false,
              "selections": [
                (v1/*: any*/),
                (v2/*: any*/),
                (v4/*: any*/)
              ]
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
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "blogListQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
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
          (v5/*: any*/)
        ]
      },
      {
        "kind": "LinkedField",
        "alias": "banner",
        "name": "blogContentViewer",
        "storageKey": null,
        "args": null,
        "concreteType": "BlogContentViewer",
        "plural": false,
        "selections": [
          (v7/*: any*/)
        ]
      },
      {
        "kind": "LinkedField",
        "alias": "list",
        "name": "blogContentViewer",
        "storageKey": null,
        "args": null,
        "concreteType": "BlogContentViewer",
        "plural": false,
        "selections": [
          (v8/*: any*/)
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "blogListQuery",
    "argumentDefinitions": (v0/*: any*/),
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
          (v5/*: any*/),
          (v1/*: any*/)
        ]
      },
      {
        "kind": "LinkedField",
        "alias": "banner",
        "name": "blogContentViewer",
        "storageKey": null,
        "args": null,
        "concreteType": "BlogContentViewer",
        "plural": false,
        "selections": [
          (v7/*: any*/),
          (v1/*: any*/)
        ]
      },
      {
        "kind": "LinkedField",
        "alias": "list",
        "name": "blogContentViewer",
        "storageKey": null,
        "args": null,
        "concreteType": "BlogContentViewer",
        "plural": false,
        "selections": [
          (v8/*: any*/),
          (v1/*: any*/)
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "blogListQuery",
    "id": null,
    "text": "query blogListQuery(\n  $category: String\n) {\n  blogCategoryViewer {\n    allBlogCategory {\n      edges {\n        node {\n          id\n          name\n          metaDescription\n          slug\n        }\n      }\n    }\n    id\n  }\n  banner: blogContentViewer {\n    allBlogContent(last: 2) {\n      edges {\n        node {\n          id\n          name\n          metaDescription\n          thumbnail\n        }\n      }\n    }\n    id\n  }\n  list: blogContentViewer {\n    allBlogContent(category: $category) {\n      edges {\n        node {\n          id\n          name\n          metaDescription\n          thumbnail\n          category {\n            id\n            name\n            slug\n          }\n          tag {\n            edges {\n              node {\n                id\n                name\n              }\n            }\n          }\n        }\n      }\n    }\n    id\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '73dedcd3d422762da8b772d695027a32';
module.exports = node;
