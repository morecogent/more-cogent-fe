import React from 'react'
import { Wrapper } from './ContextWindow.styles'

interface IContextWindowProps {
    active: boolean
    children: React.JSX.Element
}

const ContextWindow = ({active, children}: IContextWindowProps) => {
    if(!active) return null

    return (
        <Wrapper>
            {children}
        </Wrapper>
    )
}

ContextWindow.defaultProps = {
    active: false
}

export default ContextWindow