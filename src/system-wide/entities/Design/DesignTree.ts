import Goal from "./Goal.model";
import {
    DecisionHierarchy,
    DecisionHierarchyHashMap,
    GoalsHashTable,
    GoalsTree
} from "./DesignTree.types";


export default class DesignTree {
    // Not serializable
    _decisionsHierarchyHashMap: DecisionHierarchyHashMap
    _goalsHashTable: GoalsHashTable

    constructor(private goals: Goal[], private decisionsHierarchy: DecisionHierarchy, private rootId: string) {
        this._goalsHashTable = DesignTree.goalsToHashTable(goals)
        this._decisionsHierarchyHashMap = DesignTree.hierarchyToHashTable(decisionsHierarchy)
    }

    get asTree(): GoalsTree {
        return this.composeTree(this.rootId)
    }

    // TODO - move out to helper
    composeTree(rootId: string) {
        const {id, type, parentId, childrenIds} = this._decisionsHierarchyHashMap[rootId]
        const children = childrenIds.map(id => this.composeTree(id))
        const item = this._goalsHashTable[id]

        return {
            item,
            type,
            children
        }
    }

    // TODO - move out to helper
    static hierarchyToHashTable(items: DecisionHierarchy): DecisionHierarchyHashMap {
        const hashTable = {}

        for(let item of items){
            hashTable[item.id] = item
        }

        return hashTable
    }

    // TODO - move out to helper
    static goalsToHashTable(goals: Goal[]): GoalsHashTable {
        const hashTable = {}

        for(let goal of goals){
            hashTable[goal.id] = goal
        }

        return hashTable
    }
}