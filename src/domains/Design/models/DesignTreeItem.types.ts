import {IConcept} from "../../../system-wide/entities/Concept/Concept.types";

export type IDesignTreeItem = {
  id: string
  conceptId: string
  justificationIds: string[]

  get name(): string
  get concept(): IConcept
  get justifications(): any[]
}

export type IDesignTreeItemProperties = {
  id?: string
  conceptId: string
  parentId?: string
  justificationIds?: string[]
}