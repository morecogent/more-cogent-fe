import React from 'react'
import { observer } from 'mobx-react'
import ctrl from './ConceptsList.ctrl'
import Table from "../../../../system-wide/components/data-presentation/Table/Table"

function ConceptsList({actions = []}) {
    const tableSchema = [
        { label: 'Name', valueKey: 'name' },
        { label: 'Type', valueKey: 'type', fn: el => el.toLowerCase() }
    ]

    return (
        <Table schema={tableSchema} data={ctrl.items} actions={actions}/>
    )
}

export default observer(ConceptsList)