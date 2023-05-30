import { computed, makeObservable, observable } from 'mobx'

export default class ClaimsPopoverCtrl {
    filter = ''

    constructor(items, filter) {
        this._items = items
        this.filter = filter

        makeObservable(this, {
            filter: observable,
            items: computed
        })
    }

    get items(){
        if(!this.filter) return this._items

        return this._items.filter(el => el.name.toLowerCase().includes(this.filter.toLowerCase()))
    }

}