import { computed, makeObservable, observable } from 'mobx'
import claims from '../../stores/Debates.store'

export default class ClaimsPopoverCtrl {
    filter = ''

    constructor(filter) {
        this.filter = filter

        makeObservable(this, {
            filter: observable,
            items: computed
        })
    }

    get items(){
        if(!this.filter) return claims.items

        return claims.items.filter(el => el.name.toLowerCase().includes(this.filter.toLowerCase()))
    }
    //
    // setFilter(value){
    //     this.filter = value
    // }

}