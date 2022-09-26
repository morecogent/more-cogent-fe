import styled from 'styled-components'

export const Wrapper = styled.div`
  padding: 10px;
  border: 1px solid #DEE2E6;
  cursor: pointer;
  border-radius: 5px;
  position: relative;
  transition: background-color 200ms;
  
  :hover{
    background-color: rgba(0,0,0,.05);
  }
`


export const RemoveBtn = styled.div`
  position: absolute;
  top: -7px;
  right: -7px;
`

export const RemoveDefaultIcon = styled.div`
  opacity: 0;
  transition: opacity 200ms;
  position: absolute;
  top: 0;
  right: 0;

  ${Wrapper}:hover & {
    opacity: 1;
  }
  ${RemoveBtn}:hover & {
    opacity: 0;
  }
`

export const RemoveActiveIcon = styled.div`
  opacity: 0;
  transition: opacity 200ms;
  position: absolute;
  top: 0;
  right: 0;

  ${RemoveBtn}:hover & {
    opacity: 1;
  }
`