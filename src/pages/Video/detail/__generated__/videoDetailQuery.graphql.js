/**
 * @flow
 * @relayHash 5526b5120e296761ed3161b3fe9943fb
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type videoDetailQueryVariables = {|
  id?: ?string,
  category?: ?string,
|};
export type videoDetailQueryResponse = {|
  +detail: ?{|
    +allTutorialVideo: ?{|
      +edges: $ReadOnlyArray<?{|
        +node: ?{|
          +id: string,
          +name: string,
          +text: string,
          +youtubeId: string,
          +metaDescription: string,
          +metaKeyword: string,
          +category: {|
            +id: string,
            +name: string,
            +slug: string,
          |},
        |}
      |}>
    |}
  |},
  +groupVideo: ?{|
    +allTutorialVideo: ?{|
      +edges: $ReadOnlyArray<?{|
        +node: ?{|
          +id: string,
          +name: string,
          +thumbnail: ?string,
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
export type videoDetailQuery = {|
  variables: videoDetailQueryVariables,
  response: videoDetailQueryResponse,
|};
*/


/*
query videoDetailQuery(
  $id: ID
  $category: String
) {
  detail: tutorialVideoViewer {
    allTutorialVideo(id: $id) {
      edges {
        node {
          id
          name
          text
          youtubeId
          metaDescription
          metaKeyword
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
  groupVideo: tutorialVideoViewer {
    allTutorialVideo(category: $category, first: 4) {
      edges {
        node {
          id
          name
          thumbnail
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
    "name": "id",
    "type": "ID",
    "defaultValue": null
  },
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
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "slug",
      "args": null,
      "storageKey": null
    }
  ]
},
v4 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "allTutorialVideo",
  "storageKey": null,
  "args": [
    {
      "kind": "Variable",
      "name": "id",
      "variableName": "id"
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
            {
              "kind": "ScalarField",
              "alias": null,
              "name": "text",
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
              "kind": "ScalarField",
              "alias": null,
              "name": "metaDescription",
              "args": null,
              "storageKey": null
            },
            {
              "kind": "ScalarField",
              "alias": null,
              "name": "metaKeyword",
              "args": null,
              "storageKey": null
            },
            (v3/*: any*/)
          ]
        }
      ]
    }
  ]
},
v5 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "allTutorialVideo",
  "storageKey": null,
  "args": [
    {
      "kind": "Variable",
      "name": "category",
      "variableName": "category"
    },
    {
      "kind": "Literal",
      "name": "first",
      "value": 4
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
            {
              "kind": "ScalarField",
              "alias": null,
              "name": "thumbnail",
              "args": null,
              "storageKey": null
            },
            (v3/*: any*/)
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
    "name": "videoDetailQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": "detail",
        "name": "tutorialVideoViewer",
        "storageKey": null,
        "args": null,
        "concreteType": "TutorialVideoViewer",
        "plural": false,
        "selections": [
          (v4/*: any*/)
        ]
      },
      {
        "kind": "LinkedField",
        "alias": "groupVideo",
        "name": "tutorialVideoViewer",
        "storageKey": null,
        "args": null,
        "concreteType": "TutorialVideoViewer",
        "plural": false,
        "selections": [
          (v5/*: any*/)
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "videoDetailQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": "detail",
        "name": "tutorialVideoViewer",
        "storageKey": null,
        "args": null,
        "concreteType": "TutorialVideoViewer",
        "plural": false,
        "selections": [
          (v4/*: any*/),
          (v1/*: any*/)
        ]
      },
      {
        "kind": "LinkedField",
        "alias": "groupVideo",
        "name": "tutorialVideoViewer",
        "storageKey": null,
        "args": null,
        "concreteType": "TutorialVideoViewer",
        "plural": false,
        "selections": [
          (v5/*: any*/),
          (v1/*: any*/)
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "videoDetailQuery",
    "id": null,
    "text": "query videoDetailQuery(\n  $id: ID\n  $category: String\n) {\n  detail: tutorialVideoViewer {\n    allTutorialVideo(id: $id) {\n      edges {\n        node {\n          id\n          name\n          text\n          youtubeId\n          metaDescription\n          metaKeyword\n          category {\n            id\n            name\n            slug\n          }\n        }\n      }\n    }\n    id\n  }\n  groupVideo: tutorialVideoViewer {\n    allTutorialVideo(category: $category, first: 4) {\n      edges {\n        node {\n          id\n          name\n          thumbnail\n          category {\n            id\n            name\n            slug\n          }\n        }\n      }\n    }\n    id\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'e58c7424ddd6cf54fdc4bd2c9cc1b575';
module.exports = node;
