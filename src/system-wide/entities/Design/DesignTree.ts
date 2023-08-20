import Goal from "./Goal.model";
import {adjacencyToChildren, ChildrenHashTable} from "../../functions/hierarchical.functions";
import {action, computed, makeObservable, observable} from "mobx";
import Activity from "../../../domains/Activities/models/Activity.model";

export default class DesignTree {
    goals
    activities

    constructor(goals: Goal[], activities: Activity[] = []) {
        this.goals = goals.map(goal => new Goal(goal))
        this.activities = activities.map(activity => new Activity(activity))

        makeObservable(this, {
            goals: observable,
            activities: observable,
            asHashTable: computed,
            removeGoal: action,
            removeActivity: action
        })
    }

    get asHashTable(): ChildrenHashTable<Goal[] | Activity[]> {
        const items = [...this.goals, ...this.activities]
        const result = adjacencyToChildren(items)
        return result
    }

    removeGoal(id){
        this.goals = this.goals.filter(item => item.id !== id)
    }

    removeActivity(id){
        this.activities = this.activities.filter(item => item.id !== id)
    }
}