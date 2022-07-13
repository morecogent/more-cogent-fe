import React, { useState } from 'react'
import { observer } from 'mobx-react'
import Ctrl from './ClaimPage.ctrl'
import { Wrapper } from './ClaimPage.styles'
import { useParams } from 'react-router-dom'

export default observer(() => {
        const { id } = useParams()
        const [ctrl] = useState(new Ctrl(id))

        return (
            <Wrapper>
                <div>
                    <h4>{ctrl.claim.name}</h4>
                </div>
            </Wrapper>
        )
    }
)