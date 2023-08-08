import styled from 'styled-components'

export const Wrapper = styled.div`
  padding: 10px 16px;
  color: white;
  font-weight: 600;
  background-color: ${({color}) => color};
  border-radius: 4px;
  margin-bottom: 8px;
  cursor: pointer;
`