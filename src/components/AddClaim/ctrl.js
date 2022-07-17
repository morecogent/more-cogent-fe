import { action, computed, makeObservable, observable } from 'mobx'
import claims from '../../stores/Claims.store'
import ClaimModel from '../../models/Claim.model'

export default class Ctrl {

    newClaim = new ClaimModel({})

    constructor() {
        makeObservable(this, {
            newClaim: observable,
            changeName: action,
            addClaim: action,
        })
    }

    changeName = (value) => {
        this.newClaim.name = value
    }

    addClaim = () => {
        claims.add(this.newClaim)
        this.newClaim = new ClaimModel({})
    }
}