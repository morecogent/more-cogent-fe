import { action, computed, makeObservable, observable } from 'mobx'
import claims from '../../Claims.store'
import Claim from '../../Claim'
import ClaimArgumentModel from '../../ClaimArgumentModel'

export default class Ctrl {
    newClaim = new Claim({concepts: []})

    constructor({linkingTo, linkingAs, isCounter}) {
        this.linkingAs = linkingAs
        this.linkingTo = linkingTo
        this.isCounter = isCounter

        makeObservable(this, {
            newClaim: observable,
            changeName: action,
            addClaim: action,
        })
    }

    changeName = (value) => {
        this.newClaim.name = value
    }

    addClaim = (onFinish) => {
        claims.add(this.newClaim)

        if(this.linkingAs === 'PREMISE'){
            const newArgument = new ClaimArgumentModel({claimsID: [this.newClaim.id]})
            const parentClaim = claims.items.find(item => item.id === this.linkingTo)
            if(this.isCounter){
                parentClaim.linkOpposingArgument(newArgument)
            } else {
                parentClaim.linkSupportiveArgument(newArgument)
            }
        }

        this.newClaim = new Claim({})
        onFinish()
    }
}