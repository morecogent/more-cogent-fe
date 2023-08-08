import { makeObservable, observable } from 'mobx'
import { v4 } from 'uuid'
import PropositionModel from './Proposition.model'

export default class QuestModel {

    constructor({ id, title, propositions = [] }) {
        this.id = id || v4()
        this.title = title || ''
        this.propositions = propositions
            .map(proposition => new PropositionModel(proposition))

        makeObservable(this, {
            title: observable,
            propositions: observable
        })
    }

}
