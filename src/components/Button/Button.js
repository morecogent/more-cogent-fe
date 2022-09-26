import React from 'react'
import { Wrapper } from './Button.styles'

const Button = ({ name, color, onClick }) => (
    <Wrapper color={color} onClick={onClick}>
        {name}
    </Wrapper>
)

export default Button