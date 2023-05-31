import { action, computed, makeObservable, observable } from 'mobx'
import store from '../../../entities/Concept/Concepts.store'

export default class ConceptsPageCtrl {
    constructor() {
        makeObservable(this, {
            items: computed,
            onDelete: action
        })
    }

    get items(){
        return store.items
    }

    onDelete(item){
        store.remove(item)
    }
}