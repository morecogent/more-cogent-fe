import React from 'react'
import Tag from '../../../../../components/Tag'
import { Concepts, Name, Percentage, Wrapper } from './index.styles'

const storiesList = ({ id, title, advices, onClick }) => (
    <Wrapper onClick={() => onClick(id)}>
        <Name>
            {title}
        </Name>
        <b>{advices.length}</b>&nbsp;advices(s)
    </Wrapper>
)

export default storiesList