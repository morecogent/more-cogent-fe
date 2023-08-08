import React from 'react'
import { Wrapper } from './index.styles'

const Tag = ({ name, color }) => (
    <Wrapper color={color}>
        {name}
    </Wrapper>
)

export default Tag