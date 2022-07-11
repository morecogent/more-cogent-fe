import React, { useState } from 'react'
import { Percentage, Wrapper } from './index.styles'
import Ctrl from './ClaimTag.ctrl'

const ClaimTag = ({ id }) => {
    const [ctrl] = useState(new Ctrl(id))

    return (
        <Wrapper>
            <Percentage>{ctrl.claim?.percentage}%</Percentage>
             | {ctrl.claim?.name}
        </Wrapper>
    )
}

export default ClaimTag