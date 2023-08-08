import React from 'react'
import { Wrapper } from './Link.styles'

const Link = ({ title, onClick }) => (
    <Wrapper onClick={onClick}>
        {title}
    </Wrapper>
)

export default Link