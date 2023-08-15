import {IConcept} from "../Concept/Concept.types";

export type IGoal = {
  id: string
  conceptId: string
  justificationIds: string[]

  get name(): string
  get concept(): IConcept
  get justifications(): any[]
}

export type IGoalProperties = {
  id?: string
  conceptId: string
  justificationIds?: string[]
}