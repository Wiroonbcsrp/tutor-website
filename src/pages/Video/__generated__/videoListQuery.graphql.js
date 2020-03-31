/**
 * @flow
 * @relayHash cb235ba791aee1191940c1e4e39e335c
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type videoListQueryVariables = {|
  category?: ?string
|};
export type videoListQueryResponse = {|
  +tutorialCategoryViewer: ?{|
    +allTutorialCategory: ?{|
      +edges: $ReadOnlyArray<?{|
        +node: ?{|
          +id: string,
          +name: string,
          +metaKeyword: string,
          +metaDescription: string,
          +slug: string,
          +parent: ?{|
            +id: string,
            +slug: string,
          |},
        |}
      |}>
    |}
  |},
  +list: ?{|
    +allTutorialVideo: ?{|
      +edges: $ReadOnlyArray<?{|
        +node: ?{|
          +id: string,
          +name: string,
          +metaKeyword: string,
          +metaDescription: string,
          +thumbnail: ?string,
          +youtubeId: string,
          +category: {|
            +id: string,
            +name: string,
            +slug: string,
          |},
        |}
      |}>
    |}
  |},
|};
export type videoListQuery = {|
  variables: videoListQueryVariables,
  response: videoListQueryResponse,
|};
*/


/*
query videoListQuery(
  $category: String
) {
  tutorialCategoryViewer {
    allTutorialCategory {
      edges {
        node {
          id
          name
          metaKeyword
          metaDescription
          slug
          parent {
            id
            slug
          }
        }
      }
    }
    id
  }
  list: tutorialVideoViewer {
    allTutorialVideo(category: $category) {
      edges {
        node {
          id
          name
          metaKeyword
          metaDescription
          thumbnail
          youtubeId
          category {
            id
            name
            slug
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
  "name": "metaKeyword",
  "args": null,
  "storageKey": null
},
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "metaDescription",
  "args": null,
  "storageKey": null
},
v5 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "slug",
  "args": null,
  "storageKey": null
},
v6 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "allTutorialCategory",
  "storageKey": null,
  "args": null,
  "concreteType": "TutorialCategoryNodeConnection",
  "plural": false,
  "selections": [
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "edges",
      "storageKey": null,
      "args": null,
      "concreteType": "TutorialCategoryNodeEdge",
      "plural": true,
      "selections": [
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "node",
          "storageKey": null,
          "args": null,
          "concreteType": "TutorialCategoryNode",
          "plural": false,
          "selections": [
            (v1/*: any*/),
            (v2/*: any*/),
            (v3/*: any*/),
            (v4/*: any*/),
            (v5/*: any*/),
            {
              "kind": "LinkedField",
              "alias": null,
              "name": "parent",
              "storageKey": null,
              "args": null,
              "concreteType": "TutorialCategoryNode",
              "plural": false,
              "selections": [
                (v1/*: any*/),
                (v5/*: any*/)
              ]
            }
          ]
        }
      ]
    }
  ]
},
v7 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "allTutorialVideo",
  "storageKey": null,
  "args": [
    {
      "kind": "Variable",
      "name": "category",
      "variableName": "category"
    }
  ],
  "concreteType": "TutorialVideoNodeConnection",
  "plural": false,
  "selections": [
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "edges",
      "storageKey": null,
      "args": null,
      "concreteType": "TutorialVideoNodeEdge",
      "plural": true,
      "selections": [
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "node",
          "storageKey": null,
          "args": null,
          "concreteType": "TutorialVideoNode",
          "plural": false,
          "selections": [
            (v1/*: any*/),
            (v2/*: any*/),
            (v3/*: any*/),
            (v4/*: any*/),
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
              "name": "youtubeId",
              "args": null,
              "storageKey": null
            },
            {
              "kind": "LinkedField",
              "alias": null,
              "name": "category",
              "storageKey": null,
              "args": null,
              "concreteType": "TutorialCategoryNode",
              "plural": false,
              "selections": [
                (v1/*: any*/),
                (v2/*: any*/),
                (v5/*: any*/)
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
    "name": "videoListQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "tutorialCategoryViewer",
        "storageKey": null,
        "args": null,
        "concreteType": "TutorialCategoryViewer",
        "plural": false,
        "selections": [
          (v6/*: any*/)
        ]
      },
      {
        "kind": "LinkedField",
        "alias": "list",
        "name": "tutorialVideoViewer",
        "storageKey": null,
        "args": null,
        "concreteType": "TutorialVideoViewer",
        "plural": false,
        "selections": [
          (v7/*: any*/)
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "videoListQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "tutorialCategoryViewer",
        "storageKey": null,
        "args": null,
        "concreteType": "TutorialCategoryViewer",
        "plural": false,
        "selections": [
          (v6/*: any*/),
          (v1/*: any*/)
        ]
      },
      {
        "kind": "LinkedField",
        "alias": "list",
        "name": "tutorialVideoViewer",
        "storageKey": null,
        "args": null,
        "concreteType": "TutorialVideoViewer",
        "plural": false,
        "selections": [
          (v7/*: any*/),
          (v1/*: any*/)
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "videoListQuery",
    "id": null,
    "text": "query videoListQuery(\n  $category: String\n) {\n  tutorialCategoryViewer {\n    allTutorialCategory {\n      edges {\n        node {\n          id\n          name\n          metaKeyword\n          metaDescription\n          slug\n          parent {\n            id\n            slug\n          }\n        }\n      }\n    }\n    id\n  }\n  list: tutorialVideoViewer {\n    allTutorialVideo(category: $category) {\n      edges {\n        node {\n          id\n          name\n          metaKeyword\n          metaDescription\n          thumbnail\n          youtubeId\n          category {\n            id\n            name\n            slug\n          }\n        }\n      }\n    }\n    id\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '9ea34448e0651b9fae841ad3e22a7812';
module.exports = node;
