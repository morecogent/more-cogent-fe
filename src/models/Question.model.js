import { makeObservable, observable } from 'mobx'
import { v4 } from 'uuid'
import PropositionModel from './Proposition.model'

export default class QuestionModel {

    constructor({ id, text, propositions = [] }) {
        this.id = id || v4()
        this.text = text || ''
        this.propositions = propositions
            .map(proposition => new PropositionModel(proposition))

        makeObservable(this, {
            text: observable,
            propositions: observable
        })
    }

}
