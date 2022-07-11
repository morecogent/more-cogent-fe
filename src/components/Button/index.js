import React from 'react'
import { Wrapper } from './index.styles'

const Button = ({ name, color, onClick }) => (
    <Wrapper color={color} onClick={onClick}>
        {name}
    </Wrapper>
)

export default Button