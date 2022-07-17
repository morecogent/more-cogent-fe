import styled from 'styled-components'

export const Wrapper = styled.div`
  padding: 20px;
  background-color: ${({isCounter}) => isCounter ? '#A93F3F1F' : '#85C6521F'};
  display: flex;
  flex-direction: column;
`

export const Percentage = styled.span`
  font-weight: bold;
  font-size: 1.1rem;
  margin-right: 5px;
`