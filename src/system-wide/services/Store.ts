import {makeObservable, observable, computed} from 'mobx'

export type HashTable<T> = {
    [id: string]: T
}

export default class Store {
    items: any[]

    constructor(items = []) {
        this.items = items

        makeObservable(this, {
            items: observable,
            _hashTable: computed
        })
    }

    get _hashTable(): HashTable<any> {
        return arrayToHashTable(this.items)
    }


    getByIds(ids: string[]) {
        const items = ids.map(id => this._hashTable[id])
        return items
    }
}

type ObjectWithId = {
    id: string
}

// TODO - move out to helper
function arrayToHashTable<T extends ObjectWithId>(items: Array<T>): HashTable<T> {
    const hashTable = {}

    for (let item of items) {
        hashTable[item.id] = item
    }

    return hashTable
}