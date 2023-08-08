import React from 'react'
import { observer } from 'mobx-react'
import ctrl from './ConceptsList.ctrl'
import { Wrapper } from './ConceptsList.styles'
// import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
import Table from "../../../../components/data-presentation/Table/Table";

function ConceptsList({actions = []}) {
    return (
        <Table schema={[
            {
                label: 'Name',
                valueKey: 'name'
            }, {
                label: 'Type',
                valueKey: 'type'
            }
        ]} data={ctrl.items} actions={actions}/>
    )

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
                                {
                                    actions.map(action => (
                                        <Button variant={action.variant}
                                                onClick={() => action.function(item)}>{action.label}</Button>
                                    ))
                                }
                            </td>
                        </tr>
                    ))
                }
                </tbody>
            </Table>
        </Wrapper>
    )
}

export default observer(ConceptsList)