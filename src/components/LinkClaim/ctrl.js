import { action, computed, makeObservable, observable } from 'mobx'
import claims from '../../stores/Claims.store'

export default class Ctrl {
    constructor(linkingTo, linkingAs) {
        this.linkingTo = linkingTo

        makeObservable(this, {
            claims: computed
        })
    }

    get claims(){
        const claim = claims.items.find(item => item.id === this.linkingTo)

        return claims.items.slice()
            .filter(item => item.id !== this.linkingTo)
            .filter(item => !claim.linkedClaimIDs.includes(item.id))
            .sort((a, b) => b.percentage - a.percentage)
    }
}