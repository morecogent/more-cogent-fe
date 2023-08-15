import Goal from "./Goal.model";

export type DesignTreeConstructor = {
    goals: Goal[]
    decisionsHierarchy: DecisionHierarchy
    rootId: string
}

// Hash map maintaining connections between Goals
export type DecisionHierarchy = DecisionsHierarchyItem[]

export type DecisionHierarchyHashMap = {
    [id: string]: DecisionsHierarchyItem
}

export type DecisionsHierarchyItem = {
    id: string,
    type: 'GOAL' | 'ACTIVITY'
    parentId: string,
    childrenIds: Array<string>
}
// ---

// Hash map (default) representation of Goals
export type GoalsHashTable = {
    [id: string]: Goal
}
// ---

// Tree representation of Goals
export type GoalsTree = {
    item: Goal
    type: 'GOAL' | 'ACTIVITY'
    children: GoalsTree[]
}

// ---