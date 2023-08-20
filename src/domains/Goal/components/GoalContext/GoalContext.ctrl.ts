import {action, computed, makeObservable, observable} from 'mobx'
import designs from '../../../../system-wide/entities/Design/Designs.store'
import Goal from '../../../../system-wide/entities/Design/Goal.model'
import claimsStore from "../../../../system-wide/entities/Claim/Claims.store"
import Concept from "../../../../system-wide/entities/Concept/Concept.model";
import conceptsStore from "../../../../system-wide/entities/Concept/Concepts.store";
import Claim from "../../../../system-wide/entities/Claim/Claim.model";
import Design from "../../../../system-wide/entities/Design/Design.model";
import activitiesStore from "../../../Activities/stores/Activities.store";
import Activity from "../../../Activities/models/Activity.model";

export default class GoalContextCtrl {

    item: Goal | Activity
    design: Design
    children: Goal[]
    items = designs.items

    constructor(item, design, children: Goal[]) {
        this.item = item
        this.design = design
        this.children = children || []

        makeObservable(this, {
            claims: computed,
            concepts: computed,
            isGoal: computed,
            createSubGoal: action,
            createActivity: action,
            attachGoal: action,
            justify: action,
            removeJustification: action,
            removeItem: action,
            changeName: action,
        })
    }

    get claims() {
        return claimsStore.items
    }

    get concepts(){
        return conceptsStore.items
    }

    get name(){
        if(this.item instanceof Goal){
            return this.item.concept.name
        }

        return this.item.name
    }

    get isGoal(){
        return this.item instanceof Goal
    }

    changeName(name: string){
        if(this.item instanceof Goal){
            this.item.concept.changeName(name)
        } else {
            this.item.changeName(name)
        }
    }

    // Handling adding decision
    createSubGoal(name) {
        const concept = new Concept({name})
        conceptsStore.add(concept)

        this.attachGoal(concept)
    }

    createActivity(name) {
        const activity = new Activity({name, parentId: this.item.id})
        activitiesStore.add(activity)

        this.design.mainTree.activities.push(activity)
    }

    attachGoal(concept: Concept) {
        const goal = new Goal({
            conceptId: concept.id,
            parentId: this.item.id
        })
        this.design.mainTree.goals.push(goal)
    }

    removeItem(item: Goal | Activity) {
        if(item instanceof Goal){
            this.design.mainTree.removeGoal(item.id)
        } else {
            this.design.mainTree.removeActivity(item.id)
        }
    }

    // ---

    // Handling justification
    justify(claim: Claim) {
        this.item.justify(claim.id)
    }

    removeJustification(id: string) {
        this.item.removeJustification(id)
    }

    // ---
}