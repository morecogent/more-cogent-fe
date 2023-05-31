import React from 'react'
import { observer } from 'mobx-react'
import Ctrl from './ConceptsPage.ctrl'
import { Wrapper } from './ConceptsPage.styles'
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'

function ConceptsPage({ ctrl }) {
    return (
        <Wrapper>
            <Table striped bordered hover>
                <thead className="thead-dark">
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Type</th>
                    <th scope="col">Actions</th>
                </tr>
                </thead>
                <tbody>
                {
                    ctrl.items.map(item => (
                        <tr>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.type.toLowerCase()}</td>
                            <td>
                                <Button variant="danger"
                                        onClick={() => ctrl.onDelete(item)}>Delete</Button>
                            </td>
                        </tr>
                    ))
                }
                </tbody>
            </Table>
        </Wrapper>
    )
}

const ConceptsPageWithMobx = observer(ConceptsPage)

function ConceptsPageWrapper() {
    const ctrl = new Ctrl()

    return (
        <ConceptsPageWithMobx ctrl={ctrl}/>
    )
}

export default ConceptsPageWrapper