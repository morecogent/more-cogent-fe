import {action, computed, makeObservable, observable} from 'mobx'
import designs from '../../../system-wide/entities/Design/Designs.store'
import Goal from '../../../system-wide/entities/Design/Goal.model'
import claimsStore from "../../../system-wide/entities/Claim/Claims.store"
import Concept from "../../../system-wide/entities/Concept/Concept.model";
import Claim from "../../../system-wide/entities/Claim/Claim.model";

export default class DesignPageCtrl {

    id: string
    items = designs.items
    conceptsContextOpen: boolean = false
    claimsContextOpen: boolean = false
    selectedGoal: Goal = null

    constructor(id) {
        this.id = id

        makeObservable(this, {
            claimsContextOpen: observable,
            conceptsContextOpen: observable,
            selectedGoal: observable,
            design: computed,
            justificationsForSelectedDecision: computed,
            showPossibleSubGoals: action,
            attachGoal: action,
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

    get justificationsForSelectedDecision() {
        return this.selectedGoal?.justifications
    }

    // Handling adding decision

    attachGoal(concept: Concept) {
        const goal = new Goal({
            conceptId: concept.id,
            parentId: this.selectedGoal.id
        })
        this.design.mainTree.goals.push(goal)
        this.closeConceptsContext()
    }

    // ---

    // Handling justification
    justify(claim: Claim) {
        this.selectedGoal.justify(claim.id)
    }

    removeJustification(id: string) {
        this.selectedGoal.removeJustification(id)
    }

    // ---

    showPossibleSubGoals(goal: Goal) {
        this.conceptsContextOpen = true
        this.selectedGoal = goal
    }

    showClaims(goal: Goal) {
        this.selectedGoal = goal
        this.claimsContextOpen = true
    }

    closeConceptsContext() {
        this.conceptsContextOpen = false
        this.selectedGoal = null
    }

    closeJustificationsContext() {
        this.selectedGoal = null
        this.claimsContextOpen = false
    }
}