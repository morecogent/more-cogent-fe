import ConceptModel from './Concept.model'

export default class CompositeModel extends ConceptModel {
  static color = '#ebceab'

  constructor({id, name, color}) {
    super({id, name, color})
    this.type = 'COMPOSITE'
  }
}