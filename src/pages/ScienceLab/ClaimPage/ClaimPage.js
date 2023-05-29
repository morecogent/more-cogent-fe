import React from 'react'
import { observer } from 'mobx-react'
import Ctrl from './ClaimPage.ctrl'
import { ArgumentContainers, Title, Wrapper } from './ClaimPage.styles'
import { useParams } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import LinkClaim from '../../../entities/Claim/components/LinkClaim'
import Arguments from '../../../entities/Claim/components/Arguments'
import ClaimTitle from '../../../entities/Claim/components/ClaimTitle'

function ClaimPage({ ctrl, id }) {
    return (
        <Wrapper>
            <Title>
                { ctrl.claim.nameArr.length > 0 ?
                    <ClaimTitle title={ctrl.claim.nameArr}/> :
                    ctrl.claim.name
                }

            </Title>
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