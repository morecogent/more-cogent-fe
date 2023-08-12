import {IDecision} from "../Decision/Decision.types";
import {IConcept} from "../Concept/Concept.types";

export type IGoal = {
  id: string
  concept: IConcept
  children: IDecision[]
}

export type IGoalConstructor = {
  id?: string
  concept: IConcept
  children?: IDecision[]
}