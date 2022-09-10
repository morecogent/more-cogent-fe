import { makeObservable, observable } from 'mobx'
import { v4 } from 'uuid'
import NarrationModel from './Narration.model'
import ClaimModel from './Claim.model'

export default class PropositionProblemModel {

    constructor({ id, title, stories = [], claims = [] }) {
        this.id = id || v4()
        this.title = title || ''
        this.stories = stories
            .map(story => new NarrationModel(story))
        this.claims = claims
            .map(claim => new ClaimModel(claim))

        makeObservable(this, {
            title: observable,
            stories: observable,
            claims: observable
        })
    }

}
