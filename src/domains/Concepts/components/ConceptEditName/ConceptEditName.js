import React from 'react'
import Form from 'react-bootstrap/Form'
import PropTypes from 'prop-types'

const ConceptEditName = ({ name, onChange }) => {
    return (
        <Form>
            <Form.Group className="mb-3">
                <Form.Label>Concept name</Form.Label>
                <Form.Control type="text"
                              as="textarea"
                              placeholder="name"
                              value={name}
                              onChange={e => onChange(e.target.value)}/>
            </Form.Group>
        </Form>
    )
}

ConceptEditName.propTypes = {
    name: PropTypes.string,
    onChange: PropTypes.func
}

export default ConceptEditName