import React, { useState } from 'react'
import Ctrl from './ctrl'
import { observer } from 'mobx-react'
import List from '../List'
import ClaimList from '../Claim/list'
import AddClaim from '../AddClaim'
import PropTypes from 'prop-types'

const LinkClaim = ({linkingTo, linkingAs}) => {
    const [ctrl] = useState(new Ctrl(linkingTo, linkingAs))

    return (
        <div>
            <div style={{ marginTop: 30 }}>
                <h5>Select an existing claim</h5>
                <List items={ctrl.claims} Component={ClaimList}/>
            </div>

            <div style={{ marginTop: 30 }}>
                <h5>Or create a new one</h5>
                <AddClaim/>
            </div>
        </div>
    )
}

LinkClaim.propTypes = {
    linkingTo: PropTypes.string,
    linkingAs: PropTypes.oneOf(['PARENT', 'CHILD'])
}

export default observer(LinkClaim)