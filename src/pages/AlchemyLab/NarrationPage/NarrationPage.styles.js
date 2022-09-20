import styled from 'styled-components'

export const Wrapper = styled.div`
  margin: 20px auto;
  max-width: 846px;
  display: flex;
  flex-direction: column;

  h5{
    font-weight: 700;
    font-size: 1rem;
    color: #68717A;
  }
`

export const Title = styled.h1`
  font-size: 1.75rem;
  font-weight: 100;
  margin-bottom: 20px;
`

export const ProblemBody = styled.div`
  margin: 20px 0;
  border-radius: 3px;
  padding-bottom: 20px;
  border-left: 2px solid grey;
  padding-left: 20px;
`


export const Item = styled.div`
  padding: 20px;
  border-radius: 4px;
  border: 1px solid #DEE2E6;
`

export const Author = styled.div`
  border: 1px solid #DEE2E6;
  border-radius: 4px;
  padding: 10px;
  background-color: rgba(0, 0, 0, 0.05);
  color: #68717A;
  float: right;
`
export const AuthorName = styled.span`
  color: #DC3545;
`

export const Message = styled.div`
  border-bottom: 2px solid #DEE2E6;
  padding: 10px;
`

export const Discussion = styled.div`
  margin-bottom: 20px;
`

export const MessageDate = styled.span`
  color: #00000038;
`