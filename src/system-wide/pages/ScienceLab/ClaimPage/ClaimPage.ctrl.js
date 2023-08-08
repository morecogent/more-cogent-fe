import { action, computed, makeObservable, observable } from 'mobx'
import claims from '../../../entities/Claim/Claims.store'
import ClaimModel from '../../../entities/Claim/Claim.model'

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
            return new ClaimModel({})
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