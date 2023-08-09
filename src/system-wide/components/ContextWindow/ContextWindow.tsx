import React from 'react'
import {Sidebar, Wrapper} from './ContextWindow.styles'
import Button from 'react-bootstrap/Button'

interface IContextWindowProps {
    active: boolean
    children: React.JSX.Element
    onClose: () => void
}


const ContextWindow = ({active, children, onClose}: IContextWindowProps) => {
    if(!active) return null

    return (
        <Sidebar>
            <Button onClick={onClose}>x</Button>
            {children}
        </Sidebar>
    )
}

ContextWindow.defaultProps = {
    active: false
}

export default ContextWindow