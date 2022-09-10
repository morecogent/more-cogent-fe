import styled from 'styled-components'

export const Wrapper = styled.div`
  background-color: white;
  width: 240px;
  height: 300px;
  border: 1px solid;
  position: absolute;
  top: 0;
`

export const Item = styled.div`
  padding: 15px 20px;
  border-bottom: 1px solid;
  cursor: pointer;
  
  :hover {
    background-color: rgba(0,0,0,.1);
  }
`