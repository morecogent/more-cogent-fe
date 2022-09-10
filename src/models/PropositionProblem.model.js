import { computed, makeObservable, observable } from 'mobx'
import { v4 } from 'uuid'
import narrations from '../stores/Narrations.store'
import NarrationModel from './Narration.model'
import ClaimModel from './Claim.model'

export default class PropositionProblemModel {

    constructor({ id, title, stories = [], claims = [] }) {
        this.id = id || v4()
        this.title = title || ''
        this.storiesIds = stories
        this.claims = claims
            .map(claim => new ClaimModel(claim))

        makeObservable(this, {
            title: observable,
            storiesIds: observable,
            claims: observable,
            stories: computed,
        })
    }

    get stories(){
        return narrations.items
            .filter(story => this.storiesIds.includes(story.id))
            .map(story => new NarrationModel(story))
    }

}
