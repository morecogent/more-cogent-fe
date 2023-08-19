import React from 'react'
import { observer } from 'mobx-react'
import Table from "../../../../system-wide/components/data-presentation/Table/Table"

function ConceptsList({items, actions = []}) {
    const tableSchema = [
        { label: 'Name', propertyTransform: item => item.name },
        { label: 'Type', propertyTransform: item => item.type, fn: el => el.toLowerCase() }
    ]

    return (
        <Table schema={tableSchema} data={items} actions={actions}/>
    )
}

export default observer(ConceptsList)