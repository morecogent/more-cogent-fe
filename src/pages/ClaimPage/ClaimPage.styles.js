import styled from 'styled-components'

export const Wrapper = styled.div`
  margin: 20px auto;
  max-width: 960px;
  display: flex;
  flex-direction: column;
`

export const ArgumentContainers = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  margin-top: 30px;
`

export const SupportingArguments = styled.div`
  padding: 20px;
  background-color: #85C6521F;
  display: flex;
  flex-direction: column;
`

export const OpposingArguments = styled.div`
  padding: 20px;
  background-color: #A93F3F1F;
  display: flex;
  flex-direction: column;
`

export const Item = styled.div`
  margin: 20px 0 20px 20px;
  padding: 20px;
  border: 1px solid;
  border-radius: 4px;
`