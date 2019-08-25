# lodash-merge-diff
[![npm version](https://badge.fury.io/js/lodash-merge-diff.svg)](https://badge.fury.io/js/lodash-merge-diff)

Returns object containing properties that were updated. Similar behavior to lodash.merge.

## Install

#### Choose 1 of 3 options:

Install from NPM:

    npm install lodash-merge-diff

Install latest from GitHub:

    npm install github:kosinix/lodash-merge-diff

Tied to a specific version/release from GitHub:

    npm install github:kosinix/lodash-merge-diff#1.0.0
    
## Example

    let orig = {
        documents: [
            {
                name: 'profilePic',
                files: []
            }
        ]
    }
    let patch = {
        documents: [
            {
                name: 'profilePic',
                files: [
                    {
                        name: 'file.jpeg'
                    }
                ]
            }
        ]
    }

    let result = {}
    differ(orig, patch, result);

    console.log(result)

Returns

    {
        documents: [
            {
                files: [
                    {
                        name: 'file.jpeg'
                    }
                ]
            }
        ]
    };

## Test

    npm test