import styled from 'styled-components'

export const Wrapper = styled.div`
  margin: 20px auto;
  max-width: 960px;
  display: flex;
  flex-direction: column;
`

export const Concept = styled.div`
  border: 1px solid ${({unjustified}) => unjustified ? '#F66' : '#c2c2c2'};
  padding: 15px;
  margin: 10px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  
  ${({active}) => active && 'background-color: #ddd;'}
`

