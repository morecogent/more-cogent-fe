import styled from 'styled-components'

export const Wrapper = styled.div`
  padding: 20px;
  border: 1px solid;
  display: grid;
  grid-template-columns: 60px 1fr;
  cursor: pointer;
`

export const Percentage = styled.div`
  font-size: 1.25rem;
  font-weight: 600;
`

export const ArgumentsCount = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`

export const Arguments = styled.span`
  color: #5A905C;
`

export const CounterArguments = styled.span`
  color: #B55B5B;
`

export const Strong = styled.span`
  font-weight: 600;
`

export const Concepts = styled.div`
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  
  div{
    margin-right: 8px;
  }
`