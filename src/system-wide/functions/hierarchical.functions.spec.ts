import {adjacencyToChildren} from "./hierarchical.functions"

describe('Hierarchical functions', () => {

    describe('function: adjacencyToChildren', () => {

        it(`Should transform simple adjacency list into hash table`, () => {
            /*
            * Hash table should contain the root node under '_' key.
            * All other nodes should be grouped under their respective parentId keys
            * */

            const adjacency = [
                {id: '1', parentId: null},
                {id: '2', parentId: '1'},
                {id: '3', parentId: '1'}
            ]

            const hashTable = {
                '1': [adjacency[1], adjacency[2]],
                '_': adjacency[0]
            }

            expect(adjacencyToChildren(adjacency)).toEqual(hashTable)
        });

    });


});