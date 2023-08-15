type AdjacencyListItem = {
    parentId: string | number
}

export type ChildrenHashTable<T> = Map<string | number, T>

export function adjacencyToChildren<T extends AdjacencyListItem[]>(list: T): ChildrenHashTable<T> {
    const hashTable = new Map()

    for (let item of list) {
        if (item.parentId === null || typeof item.parentId === 'undefined') {
            hashTable.set('_', item)
        } else if (hashTable.has(item.parentId)) {
            hashTable.get(item.parentId).push(item)
        } else {
            hashTable.set(item.parentId, [item])
        }
    }
    return hashTable
}