import { action, computed, makeObservable, observable } from 'mobx'
import conceptsStore from '../../../../system-wide/entities/Concept/Concepts.store'

class ConceptsListCtrl {
    constructor() {
        makeObservable(this, {
            items: computed
        })
    }

    get items() {
        return conceptsStore.items
    }
}

export default new ConceptsListCtrl()