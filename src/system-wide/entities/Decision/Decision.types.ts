import {IGoal} from "../Design/Goal.types";
import {IClaim} from "../Claim/Claim.types";

export type IDecision = {
    parent: IGoal
    child: IGoal
    justifications?: IClaim[]
}