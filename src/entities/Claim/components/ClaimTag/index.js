import React, { useState } from 'react'
import { Percentage, Wrapper } from './index.styles'
import Ctrl from './ClaimTag.ctrl'
import { useNavigate } from 'react-router-dom'

const ClaimTag = ({ id }) => {
    const [ctrl] = useState(new Ctrl(id))
    const navigate = useNavigate()

    return (
        <Wrapper onClick={() => navigate(`/claim/${id}`)}>
            <Percentage>{ctrl.claim?.percentage}%</Percentage>
             | {ctrl.claim?.name}
        </Wrapper>
    )
}

export default ClaimTag