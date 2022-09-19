import styled from 'styled-components'

export const Wrapper = styled.div`
  display: inline-flex;
  padding: 5px 10px;
  color: black;
  border-radius: 2px;
  border: 1px solid;
  margin: 8px 0;
  cursor: pointer;
  background-color: white;

  :hover{
    background-color: rgba(0,0,0,.05);
  }
`

export const Percentage = styled.span`
  font-weight: bold;
  font-size: 1.1rem;
  margin-right: 5px;
`