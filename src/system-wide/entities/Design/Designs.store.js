import { makeObservable, observable } from 'mobx'
import Design from './Design.model'

class DesignsStore {
    items = []

    constructor() {
        makeObservable(this, {
            items: observable
        })
    }

    add(item) {
        let instance = item instanceof Design ?
            item :
            new Design(item)

        this.items.push(instance)
        return instance
    }

}

export default new DesignsStore()