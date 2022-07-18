import React, { useState } from 'react'
import Ctrl from './ctrl'
import Button from 'react-bootstrap/Button'
import {observer} from 'mobx-react'
import ClaimListItem from '../Claim/list'
import { Wrapper } from './index.styles'
import { useNavigate } from 'react-router-dom'
import AddClaim from '../AddClaim'
import PropTypes from 'prop-types'

const Arguments = ({items, isCounter, parentID}) => {
    const navigate = useNavigate()
    const [ctrl] = useState(new Ctrl())

    return (
        <Wrapper isCounter={isCounter}>
            <h5>{isCounter ? 'Opposing' : 'Supporting'} arguments</h5>
            {
                items.map(item => (
                    <div>
                        {
                            item.claimsID.map(claimId => {
                                const claim = ctrl.getClaimById(claimId)

                                return <ClaimListItem {...claim} onClick={() => navigate(`/claim/${claimId}`)}/>
                            })
                        }
                    </div>
                ))
            }

            {
                ctrl.isAdding ?
                    <AddClaim linkingAs='PREMISE'
                              linkingTo={parentID}
                              isCounter={isCounter}
                              onFinish={() => ctrl.toggleIsAdding()}/> :
                    <Button variant={'outline-' + (isCounter ? 'danger' : 'success')}
                            style={{ backgroundColor: 'white', marginTop: 20 }}
                            onClick={() => ctrl.toggleIsAdding()}
                    >
                        Add {isCounter ? 'a counter-argument' : 'an argument'}
                    </Button>
            }
        </Wrapper>
    )
}

Arguments.propTypes = {
    items: PropTypes.array,
    isCounter: PropTypes.bool,
    parentID: PropTypes.string
}

export default observer(Arguments)