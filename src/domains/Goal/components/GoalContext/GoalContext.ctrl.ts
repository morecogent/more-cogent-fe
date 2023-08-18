import {action, computed, makeObservable, observable} from 'mobx'
import designs from '../../../../system-wide/entities/Design/Designs.store'
import Goal from '../../../../system-wide/entities/Design/Goal.model'
import claimsStore from "../../../../system-wide/entities/Claim/Claims.store"
import Concept from "../../../../system-wide/entities/Concept/Concept.model";
import conceptsStore from "../../../../system-wide/entities/Concept/Concepts.store";
import Claim from "../../../../system-wide/entities/Claim/Claim.model";
import Design from "../../../../system-wide/entities/Design/Design.model";

export default class GoalContextCtrl {

    goal: Goal
    design: Design
    items = designs.items

    constructor(goal, design) {
        this.goal = goal
        this.design = design

        makeObservable(this, {
            claims: computed,
            createSubGoal: action,
            attachGoal: action,
            justify: action,
            removeJustification: action,
        })
    }

    get claims() {
        return claimsStore.items
    }

    // Handling adding decision
    createSubGoal(name) {
        const concept = new Concept({name})
        conceptsStore.add(concept)

        this.attachGoal(concept)
    }

    attachGoal(concept: Concept) {
        const goal = new Goal({
            conceptId: concept.id,
            parentId: this.goal.id
        })
        this.design.mainTree.goals.push(goal)
    }

    // ---

    // Handling justification
    justify(claim: Claim) {
        this.goal.justify(claim.id)
    }

    removeJustification(id: string) {
        this.goal.removeJustification(id)
    }

    // ---
}