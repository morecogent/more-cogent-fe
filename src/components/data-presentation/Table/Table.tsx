import React, {useState} from 'react'
import {observer} from 'mobx-react'
import Ctrl from './Table.ctrl'
import {Wrapper} from './Table.styles'
import BootstrapTable from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
import {Action, Attribute, ITableProps} from './Table.types'


function Table({schema, data, actions = []}: ITableProps) {
    const [ctrl] = useState(new Ctrl(data, schema))

    return (
        <Wrapper>
            <BootstrapTable striped bordered hover>
                <thead className="thead-dark">
                <tr>
                    {
                        schema.map((attribute: Attribute) => (
                            <th scope="col">{attribute.label}</th>
                        ))
                    }
                </tr>
                </thead>
                <tbody>
                {
                    ctrl.items.map(item => (
                        <tr key={item.id}>
                            {
                                schema.map(({valueKey, fn}: Attribute) => (
                                    <td key={valueKey}>
                                        {fn ? fn(item[valueKey]) : item[valueKey]}
                                    </td>
                                ))
                            }
                            <td>
                                {
                                    actions.map((action: Action) => (
                                        <Button variant={action.variant}
                                                onClick={() => action.function(item)}>{action.label}</Button>
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