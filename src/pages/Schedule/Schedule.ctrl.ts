import {action, computed, makeObservable, observable} from 'mobx'
import designs from '../../system-wide/entities/Design/Designs.store'
import Goal from '../../system-wide/entities/Design/Goal.model'
import claimsStore from "../../system-wide/entities/Claim/Claims.store"
import Activity from "../../domains/Activities/models/Activity.model";

export default class ScheduleCtrl {

    id: string
    items = designs.items
    itemContextOpen: boolean = false
    claimsContextOpen: boolean = false
    selectedItem: Goal | Activity = null

    constructor(id) {
        this.id = id

        makeObservable(this, {
            claimsContextOpen: observable,
            itemContextOpen: observable,
            selectedItem: observable,
            design: computed,
            justificationsForSelectedDecision: computed,
            selectItem: action
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
        return this.selectedItem?.justifications
    }


    selectItem(goal: Goal) {
        this.itemContextOpen = true
        this.selectedItem = goal
    }

    closeItemContext() {
        this.itemContextOpen = false
        this.selectedItem = null
    }
}