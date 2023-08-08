import React from 'react'
import { observer } from 'mobx-react'
import ctrl from './DesignLabPage.ctrl'
import { Wrapper } from '../../../App.styles'
import { useNavigate } from 'react-router-dom'
import Button from 'react-bootstrap/Button'

export default observer(() => {
        const navigate = useNavigate()

        return (
            <Wrapper>
                <h3>Designs</h3>
                {
                    ctrl.designs.map(({id, name}) => (
                        <Button key={id} onClick={() => navigate(`/design/${id}`)}>
                            {name}
                        </Button>
                    ))
                }
            </Wrapper>
        )
    }
)