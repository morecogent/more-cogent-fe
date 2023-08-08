import styled from 'styled-components'

export const Wrapper = styled.div`
  padding: 20px;
  background-color: ${({isCounter}) => isCounter ? '#A93F3F1F' : '#85C6521F'};
  display: flex;
  flex-direction: column;
`

export const Argument = styled.div`
  background-color: #F5F5F5;
  padding: 20px;
  margin-bottom: 20px;
  display: grid;
  grid-row-gap: 20px;
  justify-content: center;
  justify-items: center;
`

export const Percentage = styled.span`
  font-weight: bold;
  font-size: 1.1rem;
  margin-right: 5px;
`