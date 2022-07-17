import React, { useState } from 'react'
import { observer } from 'mobx-react'
import Ctrl from './ClaimPage.ctrl'
import { ArgumentContainers, OpposingArguments, SupportingArguments, Wrapper } from './ClaimPage.styles'
import { useParams, useNavigate } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import LinkClaim from '../../components/LinkClaim'
import ClaimListItem from '../../components/Claim/list'

export default observer(() => {
        const navigate = useNavigate()
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
                        <LinkClaim linkingTo={id} linkingAs="PARENT"/> :
                        <div>
                            <Button onClick={() => ctrl.linkAsArgument()}>Extrapolate</Button>
                        </div>
                }
                <ArgumentContainers>
                    <SupportingArguments>
                        <h5>Supporting arguments</h5>
                        {
                            ctrl.claim.supportingArguments.map(cArg => (
                                <div>
                                    {
                                        cArg.claims.map(claimId => {
                                            const claim = ctrl.getClaimById(claimId)

                                            return <ClaimListItem {...claim} onClick={() => navigate(`/claim/${claimId}`)}/>
                                        })
                                    }
                                </div>
                            ))
                        }
                        <Button variant="outline-success"
                                style={{ backgroundColor: 'white', marginTop: 20 }}>Add supportive argument</Button>
                    </SupportingArguments>
                    <OpposingArguments>
                        <h5>Opposing arguments</h5>
                        {
                            ctrl.claim.opposingArguments.map(cArg => (
                                <div>
                                    {
                                        cArg.claims.map(claimId => {
                                            const claim = ctrl.getClaimById(claimId)

                                            return <ClaimListItem {...claim}/>
                                        })
                                    }
                                </div>
                            ))
                        }
                        <Button variant="outline-danger"
                                style={{ backgroundColor: 'white', marginTop: 20 }}>Add counter argument</Button>
                    </OpposingArguments>
                </ArgumentContainers>

            </Wrapper>
        )
    }
)