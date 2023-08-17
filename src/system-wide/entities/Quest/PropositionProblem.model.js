import { computed, makeObservable, observable } from 'mobx'
import { v4 } from 'uuid'
import narrations from '../Story/Narrations.store'
import claims from '../Claim/Claims.store'
import NarrationModel from '../Story/Narration.model'
import Claim from '../Claim/Claim'

export default class PropositionProblemModel {

    constructor({ id, title, stories = [], claims = [] }) {
        this.id = id || v4()
        this.title = title || ''
        this.storiesIds = stories
        this.claimsIds = claims
            // .map(claim => new ClaimModel(claim))

        makeObservable(this, {
            title: observable,
            storiesIds: observable,
            claimsIds: observable,
            claims: computed,
            stories: computed,
        })
    }

    get stories(){
        return narrations.items
            .filter(story => this.storiesIds.includes(story.id))
            .map(story => new NarrationModel(story))
    }
    get claims(){
        return claims.items
            .filter(claim => this.claimsIds.includes(claim.id))
            .map(claim => new Claim(claim))
    }

}
