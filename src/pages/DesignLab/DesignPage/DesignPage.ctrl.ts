import { action, computed, makeObservable, observable } from 'mobx'
import designs from '../../../system-wide/entities/Design/Designs.store'
import Goal from '../../../system-wide/entities/Design/Goal.model'

export default class DesignPageCtrl {

    id
    items = designs.items
    claimsContextOpen = false
    goalDuringLinking = null

    constructor(id) {
        this.id = id

        makeObservable(this, {
            claimsContextOpen: observable,
            goalDuringLinking: observable,
            design: computed,
            showPossibleSubGoals: action,
            addSubGoal: action
        })
    }

    get design() {
        if (this.id) {
            return this.items.find(item => item.id === this.id)
        }
    }

    showPossibleSubGoals(goal: Goal){
        this.claimsContextOpen = true
        this.goalDuringLinking = goal
    }

    addSubGoal(concept){
        this.goalDuringLinking.addSubGoal(concept)
        this.closeContextWindow()
    }

    closeContextWindow(){
        this.claimsContextOpen = false
        this.goalDuringLinking = null
    }
}