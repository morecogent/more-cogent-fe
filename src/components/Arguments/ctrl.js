import { action, computed, makeObservable, observable } from 'mobx'
import claims from '../../stores/Claims.store'
import ClaimModel from '../../models/Claim.model'

export default class Ctrl {
    //
    // newClaim = new ClaimModel({})
    isAdding = false

    constructor() {
        makeObservable(this, {
            isAdding: observable,
            toggleIsAdding: action,
        })
    }

    getClaimById(id) {
        return claims.items.find(item => item.id === id)
    }

    toggleIsAdding(){
        this.isAdding = !this.isAdding
    }
}