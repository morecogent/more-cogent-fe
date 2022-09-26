import React from 'react'
import { Wrapper } from './LinkedResult.styles'

const linkedResult = ({ result, onClick }) => (
    <Wrapper onClick={() => onClick(result.id)}>
        {result.title}
    </Wrapper>
)

export default linkedResult