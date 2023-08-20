import styled from 'styled-components'

export const Wrapper = styled.div`
  margin: 20px auto;
  max-width: 960px;
  display: flex;
  flex-direction: column;
`

export const DesignTreeItem = styled.div`
  cursor: pointer;
  border: 1px solid ${({unjustified}) => unjustified ? '#F66' : '#c2c2c2'};
  padding: 15px;
  margin: 10px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  background-color: ${({isActive, isActivity}) => {
    if(isActivity) {
      return isActive ? '#f1d2ae' : '#f9ecec'
    } else {
      return isActive ? '#f1d2ae' : '#FFF'
    }
  }};
`