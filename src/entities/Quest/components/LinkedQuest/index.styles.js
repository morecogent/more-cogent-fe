import styled from 'styled-components'

export const Wrapper = styled.div`
  margin: 10px 0;
  display: grid;
  grid-template-columns: 1fr 40px 1fr;
  align-items: center;
`

export const Quest = styled.div`
  padding: 10px;
  border: 1px solid #DEE2E6;
  cursor: pointer;
  border-radius: 5px;
  
  :hover{
    background-color: rgba(0,0,0,.05);
  }
`
export const Proposition = Quest

export const Arrow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Link = styled.a`
  color: #0099CA;
  text-decoration: none;
  padding: 10px;
`