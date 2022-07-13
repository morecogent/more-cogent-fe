import styled from 'styled-components'

export const Wrapper = styled.div`
  display: block;
  margin: 15px 0;
  border: 1px solid grey;
  border-radius: 4px;
  padding: 15px 10px;
  position: relative;
`

export const TextInput = styled.div`
  display: ${({block}) => block ? 'block': 'inline'};
  padding: 6px;
`

export const Popover = styled.div`
  background-color: white;
  width: 240px;
  height: 300px;
  border: 1px solid;
  padding: 10px;
  position: absolute;
  top: 0;
`