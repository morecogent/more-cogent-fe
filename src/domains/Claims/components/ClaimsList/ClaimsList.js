import React from 'react'
import { observer } from 'mobx-react'
import Table from "../../../../system-wide/components/data-presentation/Table/Table"

function ClaimsList({items, actions = []}) {
    const tableSchema = [
        { label: 'Name', valueKey: 'name' },
    ]

    return (
        <Table schema={tableSchema} data={items} actions={actions}/>
    )
}

export default observer(ClaimsList)