import styled from 'styled-components'

export const Wrapper = styled.div`
  
`

export const Element = styled.span`
  ${({func}) => {
      switch (func){
        case 'KEY_CONCEPT':
            return {
                fontWeight: 700,
                color: '#00AE31'
            }
        case 'RELATED_CONCEPT':
            return {
                fontWeight: 700,
                color: '#DC3545'
            }
        case 'RELATION':
            return {
                textDecoration: 'underline'
            }
      }
  }}
`