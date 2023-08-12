export type IConceptConstructor = {
  id?: string
  name: string
  color?: string
}

export type IConcept = {
  id: string
  name: string
  color: string
  type: 'CONCEPT' | 'COMPOSITE'
}