import React from 'react'
import {observer} from 'mobx-react'
import {Wrapper} from './Table.styles'
import BootstrapTable from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
import {Action, Attribute, ITableProps} from './Table.types'


function Table({schema, data, actions = []}: ITableProps) {
    return (
        <Wrapper>
            <BootstrapTable striped bordered hover>
                <thead className="thead-dark">
                <tr>
                    {
                        schema.map((attribute: Attribute) => (
                            <th key={attribute.label} scope="col">{attribute.label}</th>
                        ))
                    }
                </tr>
                </thead>
                <tbody>
                {
                    data.map(item => (
                        <tr key={item.id}>
                            {
                                schema.map(({label, propertyTransform, fn}: Attribute) => {
                                    const property = propertyTransform(item)
                                    return (
                                        <td key={label}>
                                            {fn ? fn(property) : property}
                                        </td>
                                    )
                                })
                            }
                            <td>
                                {
                                    actions.map((action: Action) => (
                                        <Button key={action.label}
                                                variant={action.variant}
                                                onClick={() => action.fn(item)}>{action.label}</Button>
                                    ))
                                }
                            </td>
                        </tr>
                    ))
                }
                </tbody>
            </BootstrapTable>
        </Wrapper>
    )
}

export default observer(Table)