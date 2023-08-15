import Goal from "./Goal.model";
import {adjacencyToChildren, ChildrenHashTable} from "../../functions/hierarchical.functions";
import {computed, makeObservable, observable} from "mobx";

export default class DesignTree {
    goals

    constructor(goals: Goal[]) {
        this.goals = goals

        makeObservable(this, {
            goals: observable,
            asTree: computed
        })
    }

    get asTree(): ChildrenHashTable<Goal[]> {
        const tree = adjacencyToChildren(this.goals)
        console.log(this.goals)
        console.log(tree)
        return tree
    }
}