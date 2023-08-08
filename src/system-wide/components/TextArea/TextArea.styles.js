import styled from 'styled-components'
import CompositeModel from '../../entities/Concept/Composite.model'
import ConceptModel from '../../entities/Concept/Concept.model'

export const Container = styled.div`
  position: relative;
`

export const Wrapper = styled.div`
  display: block;
  margin: 15px 0;
  border-radius: 4px;
  padding: 25px 5px 15px;
  position: relative;
  background-color: #F6F6F6;
`

export const Label = styled.span`
  position: absolute;
  top: 16px;
  left: 10px;
  font-weight: 600;
  color: #444;
  font-size: 0.875rem;
`

export const TextSpan = styled.div`
  display: ${({ block }) => block ? 'block' : 'inline'};
  padding: 6px;
  ${({last}) => last && `flex: 1 0 auto;`}
  

  :focus-visible {
    outline: none;
  }
`

export const TemporaryConcept = styled.span`
  padding: 6px;
  margin: 3px 0px;
  background-color: ${ConceptModel.color};
  cursor: pointer;
  border-radius: 5px;
`

export const TemporaryComposite = styled(TemporaryConcept)`
  background-color: ${CompositeModel.color};
`

export const TextInput = styled.div`
  padding: 6px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`

export const Popover = styled.div`
  background-color: white;
  width: 240px;
  height: 300px;
  border: 1px solid;
  padding: 10px;
  position: absolute;
  top: 0;
`