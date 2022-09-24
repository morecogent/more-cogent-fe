import React from 'react'
import { Wrapper } from './index.styles'

const Link = ({ title, onClick }) => (
    <Wrapper onClick={onClick}>
        {title}
    </Wrapper>
)

export default Link