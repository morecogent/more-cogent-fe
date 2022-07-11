import { computed, makeObservable } from 'mobx'
import claims from '../../stores/Debates.store'

export default class ClaimTagCtrl {

    constructor(id) {
        this.id = id

        makeObservable(this, {
            claim: computed
        })
    }

    get claim() {
        if (!this.id) return

        return claims.items.find(item => item.id === this.id)
    }
}