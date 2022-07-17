import React, { useState } from 'react'
import Ctrl from './ctrl'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import {observer} from 'mobx-react'

const AddClaim = () => {
    const [ctrl] = useState(new Ctrl())

    return (
        <Form>
            <Form.Group className="mb-3">
                <Form.Label>Your claim</Form.Label>
                <Form.Control type="text"
                              placeholder="Your claim"
                              value={ctrl.newClaim.name}
                              onChange={e => ctrl.changeName(e.target.value)}/>
            </Form.Group>
            <Button onClick={ctrl.addClaim}>Add a claim</Button>
        </Form>
    )
}

export default observer(AddClaim)