import {makeObservable, observable, computed, autorun} from 'mobx'

export type HashTable<T> = {
    [id: string]: T
}

interface IStore {
    items: any[]
}

export default abstract class Store implements IStore {
    items: any[]

    constructor(items = [], Model) {
        const parentClassName = Object.getPrototypeOf(this).constructor.name

        const storedCollection = Store.rehydrateStorage(`cogent.collections.${parentClassName}`)
        this.items = storedCollection ? Store.initializeCollection(storedCollection, Model) : items

        makeObservable(this, {
            items: observable,
            _hashTable: computed
        })

        autorun(() => {
            window.localStorage
                .setItem(`cogent.collections.${Object.getPrototypeOf(this).constructor.name}`, JSON.stringify(this.items))
        })
    }

    get _hashTable(): HashTable<any> {
        return arrayToHashTable(this.items)
    }


    getByIds(ids: string[]) {
        const items = ids.map(id => this._hashTable[id])
        return items
    }

    static rehydrateStorage(collectionName){
        const storedCollection = window.localStorage.getItem(collectionName)
        return storedCollection && JSON.parse(storedCollection)
    }

    static initializeCollection(items, Model){
        return items.map(item => new Model(item))
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