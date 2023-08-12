import {IGoal} from "../Design/Goal.types";
import {IClaim} from "../Claim/Claim.types";

export type IDecisionConstructor = {
    parent: IGoal
    child: IGoal
    justifications?: IClaim[]
}

export interface IDecision {
    get justifications(): IClaim[]

    justify: (claim: IClaim) => void
    removeJustification: (id: string) => void
}