import {IDecision} from "../Decision/Decision.types";

export type IGoal = {
  id: string
  concept: any
  children: IDecision[]
}