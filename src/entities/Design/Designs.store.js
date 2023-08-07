import { makeObservable, observable } from 'mobx'
import DesignModel from './Design.model'

class DesignsStore {
    items = []

    constructor() {
        makeObservable(this, {
            items: observable
        })
    }

    add(item) {
        let instance = item instanceof DesignModel ?
            item :
            new DesignModel(item)

        this.items.push(instance)
        return instance
    }

}

export default new DesignsStore()