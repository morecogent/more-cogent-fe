import React from 'react'
import { observer } from 'mobx-react'
import Ctrl from './ClaimPage.ctrl'
import { ArgumentContainers, Title, Wrapper } from './ClaimPage.styles'
import { useParams } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import LinkClaim from '../../../system-wide/entities/Claim/components/LinkClaim'
import Arguments from '../../../system-wide/entities/Claim/components/Arguments'
import TextArea from '../../../system-wide/components/TextArea/TextArea'

function ClaimPage({ ctrl, id }) {

    return (
        <Wrapper>
            <TextArea items={ctrl.claim.nameArr}/>
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
                           parentID={id}/>
                <Arguments items={ctrl.claim.opposingArguments}
                           isCounter={true}
                           parentID={id}/>
            </ArgumentContainers>

        </Wrapper>
    )
}

const ClaimPageWithMobx = observer(ClaimPage)

function ClaimPageWrapper() {
    const { id } = useParams()
    const ctrl = new Ctrl(id)

    return (
        <ClaimPageWithMobx ctrl={ctrl} id={id}/>
    )
}

export default ClaimPageWrapper