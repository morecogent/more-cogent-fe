import {action, computed, makeObservable, observable} from 'mobx'
import designs from '../../../system-wide/entities/Design/Designs.store'
import Goal from '../../../system-wide/entities/Design/Goal.model'
import claimsStore from "../../../system-wide/entities/Claim/Claims.store"
import {IDecision} from "../../../system-wide/entities/Decision/Decision.types";
import Concept from "../../../system-wide/entities/Concept/Concept.model";
import conceptsStore from "../../../system-wide/entities/Concept/Concepts.store";

export default class DesignPageCtrl {

    id: string
    items = designs.items
    conceptsContextOpen: boolean = false
    claimsContextOpen: boolean = false
    goalDuringLinking: Goal = null
    goalDuringJustification: Goal = null

    constructor(id) {
        this.id = id

        makeObservable(this, {
            claimsContextOpen: observable,
            conceptsContextOpen: observable,
            goalDuringLinking: observable,
            goalDuringJustification: observable,
            design: computed,
            justificationsForSelectedDecision: computed,
            showPossibleSubGoals: action,
            attachConcept: action,
            justify: action,
            removeJustification: action,
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
        return this.goalDuringJustification?.justifications
    }

    showPossibleSubGoals(goal: Goal) {
        this.conceptsContextOpen = true
        this.goalDuringLinking = goal
    }

    showClaims(goal: Goal) {
        this.claimsContextOpen = true
        this.goalDuringJustification = goal
    }

    attachConcept(concept) {
        // const goal = new Goal({concept})
        // this.goalDuringLinking.attachChild(goal)
        this.closeConceptsContext()
    }

    createGoal(name){
        const concept = new Concept({name})
        conceptsStore.add(concept)

        this.attachConcept(concept)
    }

    justify(claim) {
        // this.goalDuringJustification.justify(claim)
    }

    removeJustification(id: string){
        // this.goalDuringJustification.removeJustification(id)
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