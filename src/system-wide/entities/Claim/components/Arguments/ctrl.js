import { action, computed, makeObservable, observable } from 'mobx'
import claims from '../../Claims.store'
import Claim from '../../Claim'

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