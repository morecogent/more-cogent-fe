import React, { useState } from 'react'
import { observer } from 'mobx-react'
import Ctrl from './ClaimPage.ctrl'
import { ArgumentContainers, Wrapper } from './ClaimPage.styles'
import { useParams } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import LinkClaim from '../../../entities/Claim/components/LinkClaim'
import Arguments from '../../../entities/Claim/components/Arguments'

export default observer(() => {
        const { id } = useParams()
        // TODO - single instance kept in the hooks prevents moving from one claim to another (no refresh)
        const [ctrl] = useState(new Ctrl(id))

        return (
            <Wrapper>
                <div>
                    <h4>{ctrl.claim.name}</h4>
                </div>
                {
                    ctrl.linking ?
                        <LinkClaim linkingTo={id} linkingAs="CONCLUSION"/> :
                        <div>
                            <Button onClick={() => ctrl.linkAsArgument()}>Link as a premise</Button>
                        </div>
                }
                <ArgumentContainers>
                    <Arguments items={ctrl.claim.supportingArguments}
                               isCounter={false}
                               parentID={id} />
                    <Arguments items={ctrl.claim.opposingArguments}
                               isCounter={true}
                               parentID={id} />
                </ArgumentContainers>

            </Wrapper>
        )
    }
)