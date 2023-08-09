import styled from 'styled-components'

export const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: #FFF;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
`

export const Sidebar = styled.div`
  background-color: #FFF;
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 0;
  right: 0;
  width: 30%;
  min-height: 100vh;
  border-left: 1px solid grey;
`