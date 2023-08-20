import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import PropTypes from 'prop-types'

const ActivityAdd = ({ onFinish }) => {
    const [name, changeName] = useState('')

    return (
        <Form>
            <Form.Group className="mb-3">
                <Form.Label>New Activity</Form.Label>
                <Form.Control type="text"
                              as="textarea"
                              placeholder="Your concept"
                              value={name}
                              onChange={e => changeName(e.target.value)}/>
            </Form.Group>
            <Button onClick={() => onFinish(name)}>Add an activity</Button>
        </Form>
    )
}

ActivityAdd.propTypes = {
    onFinish: PropTypes.func
}

export default ActivityAdd