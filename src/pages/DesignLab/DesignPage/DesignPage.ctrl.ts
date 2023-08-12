import {action, computed, makeObservable, observable} from 'mobx'
import designs from '../../../system-wide/entities/Design/Designs.store'
import Goal from '../../../system-wide/entities/Design/Goal.model'
import claimsStore from "../../../system-wide/entities/Claim/Claims.store"
import {IDecision} from "../../../system-wide/entities/Decision/Decision.types";

export default class DesignPageCtrl {

    id: string
    items = designs.items
    conceptsContextOpen: boolean = false
    claimsContextOpen: boolean = false
    goalDuringLinking: Goal = null
    decisionDuringJustification: IDecision = null

    constructor(id) {
        this.id = id

        makeObservable(this, {
            claimsContextOpen: observable,
            conceptsContextOpen: observable,
            goalDuringLinking: observable,
            decisionDuringJustification: observable,
            design: computed,
            justificationsForSelectedDecision: computed,
            showPossibleSubGoals: action,
            attachConcept: action,
            justify: action,
        })
    }

    get design() {
        if (this.id) {
            return this.items.find(item => item.id === this.id)
        }
    }

    get claims() {
        return claimsStore.items
    }

    get justificationsForSelectedDecision(){
        return this.decisionDuringJustification?.justifications || []
    }

    showPossibleSubGoals(goal: Goal) {
        this.conceptsContextOpen = true
        this.goalDuringLinking = goal
    }

    showClaims(decision: IDecision) {
        this.claimsContextOpen = true
        this.decisionDuringJustification = decision
    }

    attachConcept(concept) {
        const goal = new Goal({concept})
        this.goalDuringLinking.attachChild(goal)
        this.closeConceptsContext()
    }

    justify(claim) {
        this.decisionDuringJustification.justifications.push(claim)
    }

    closeConceptsContext() {
        this.conceptsContextOpen = false
        this.goalDuringLinking = null
    }

    closeJustificationsContext() {
        this.claimsContextOpen = false
        this.goalDuringLinking = null
    }
}