import { action, computed, makeObservable, observable } from 'mobx'
import claims from '../../../system-wide/entities/Claim/Claims.store'
import Claim from '../../../system-wide/entities/Claim/Claim'

export default class ClaimPageCtrl {

    linking = false

    constructor(id) {
        this.id = id

        makeObservable(this, {
            linking: observable,
            claim: computed,
            linkAsArgument: action
        })
    }

    get claim() {
        if (this.id) {
            return claims.items.find(item => item.id === this.id)
        } else {
            return new Claim({})
        }
    }

    getClaimById(id) {
        return claims.items.find(item => item.id === id)
    }

    linkAsArgument() {
        this.linking = true
    }
    // addNarration = () => {
    //   narrations.add(this.newNarration)
    //   this.resetNewNarration()
    // }
}