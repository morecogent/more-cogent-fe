import React, { useState, Fragment } from 'react'
import Ctrl from './ctrl'
import Button from 'react-bootstrap/Button'
import {observer} from 'mobx-react'
import ClaimListItem from '../ClaimElement/list'
import { Argument, Wrapper } from './index.styles'
import { useNavigate } from 'react-router-dom'
import AddClaim from '../AddClaim'
import PropTypes from 'prop-types'
import {BsArrowDown} from 'react-icons/bs'

const Arguments = ({items, isCounter, parentID}) => {
    const navigate = useNavigate()
    const [ctrl] = useState(new Ctrl())

    return (
        <Wrapper isCounter={isCounter}>
            <h5>{isCounter ? 'Objections' : 'Arguments'}</h5>
            {
                items.map(item => (
                    <Argument>
                        {
                            item.claimsID.map((claimId, i) => {
                                const claim = ctrl.getClaimById(claimId)

                                return <Fragment key={i}>
                                    <ClaimListItem {...claim} onClick={() => navigate(`/claim/${claimId}`)}/>
                                    { !!item.claimsID[i+1] && <BsArrowDown /> }
                                </Fragment>
                            })
                        }
                    </Argument>
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