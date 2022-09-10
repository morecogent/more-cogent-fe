import React, { useState } from 'react'
import Ctrl from './ctrl'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { observer } from 'mobx-react'
import PropTypes from 'prop-types'

const AddClaim = ({ onFinish, linkingTo, linkingAs, isCounter }) => {
    const [ctrl] = useState(new Ctrl({linkingTo, linkingAs, isCounter}))

    return (
        <Form>
            <Form.Group className="mb-3">
                <Form.Label>Your claim</Form.Label>
                <Form.Control type="text"
                              as="textarea"
                              placeholder="Your claim"
                              value={ctrl.newClaim.name}
                              onChange={e => ctrl.changeName(e.target.value)}/>
            </Form.Group>
            <Button onClick={() => ctrl.addClaim(onFinish)}>Add a claim</Button>
        </Form>
    )
}

AddClaim.propTypes = {
    onFinish: PropTypes.func,
    linkingTo: PropTypes.string,
    linkingAs: PropTypes.oneOf(['CONCLUSION', 'PREMISE']),
    isCounter: PropTypes.bool
}

export default observer(AddClaim)