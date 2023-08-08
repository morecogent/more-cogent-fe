import styled from 'styled-components'

export const Wrapper = styled.div`
  padding: 20px;
  border: 1px solid;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
`

export const Percentage = styled.div`
  font-size: 1.25rem;
  font-weight: 600;
`

export const Name = styled.div`
  width: 100%;
  margin: 0 20px;
`

export const Concepts = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 35%;
  
  div{
    margin-right: 8px;
  }
`