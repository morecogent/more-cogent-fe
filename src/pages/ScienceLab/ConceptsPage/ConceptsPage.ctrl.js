import { action, computed, makeObservable, observable } from 'mobx'
import store from '../../../system-wide/entities/Concept/Concepts.store'

class ConceptsPageCtrl {
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

export default new ConceptsPageCtrl()