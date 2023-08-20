export type IDesignTreeItem = {
  id: string
  justificationIds: string[]

  get justifications(): any[]
}

export type IDesignTreeItemProperties = {
  id?: string
  parentId?: string
  justificationIds?: string[]
}