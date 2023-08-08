import styled from 'styled-components'

export const Wrapper = styled.div`
  padding: 20px;
  border: 1px solid;
  cursor: pointer;
`

export const ArgumentsCount = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
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