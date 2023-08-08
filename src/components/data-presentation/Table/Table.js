import React, {useState} from 'react'
import { observer } from 'mobx-react'
import Ctrl from './Table.ctrl.ts'
import { Wrapper } from './Table.styles'
import BootstrapTable from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'

function Table({schema, data, actions = []}) {
    const [ctrl, _] = useState(new Ctrl(data, schema))

    return (
        <Wrapper>
            <BootstrapTable striped bordered hover>
                <thead className="thead-dark">
                <tr>
                    {
                        ctrl.labels.map(label => (
                            <th scope="col">{label}</th>
                        ))
                    }
                </tr>
                </thead>
                <tbody>
                {
                    ctrl.items.map(item => (
                        <tr key={item.id}>
                            {
                                ctrl.valueKeys.map(valueKey => (
                                    <td key={valueKey}>{item[valueKey]}</td>
                                ))
                            }
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
            </BootstrapTable>
        </Wrapper>
    )
}

export default observer(Table)