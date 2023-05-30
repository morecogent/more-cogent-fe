import styled from 'styled-components'
import CompositeModel from '../../../Concept/Composite.model'
import ConceptModel from '../../../Concept/Concept.model'

export const Wrapper = styled.div`
  background-color: white;
  width: 100%;
  height: 300px;
  border: 1px solid;
  position: absolute;
  z-index: 10;
  bottom: -310px;
  left: 0;
  display: flex;
  flex-direction: column;
`

export const Items = styled.div`
  overflow: auto;
  padding-bottom: 10px;
  height: 100%;
`

export const NewItemContext = styled.span`
  font-weight: 200;
  font-style: italic;
`

export const NewItemName = styled.span`
  font-weight: 600;
  font-style: normal;
`

export const Item = styled.div`
  padding: 15px 20px;
  border-bottom: 1px solid;
  cursor: pointer;
  background-color: ${({ item }) => {
    if (item instanceof CompositeModel) return CompositeModel.color + '30'
    else if (item instanceof ConceptModel) return ConceptModel.color + '30'
  }};

  :hover {
    background-color: ${({ item }) => {
      if (item instanceof CompositeModel) return CompositeModel.color + '80'
      else if (item instanceof ConceptModel) return ConceptModel.color + '80'
    }};
  }
`