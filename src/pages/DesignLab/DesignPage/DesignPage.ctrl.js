import { action, computed, makeObservable, observable } from 'mobx'
import designs from '../../../system-wide/entities/Design/Designs.store'

export default class DesignPageCtrl {

    items = designs.items

    constructor(id) {
        this.id = id

        makeObservable(this, {
            design: computed,
            addChild: action
        })
    }

    get design() {
        if (this.id) {
            return this.items.find(item => item.id === this.id)
        }
    }

    addChild(){

    }
}