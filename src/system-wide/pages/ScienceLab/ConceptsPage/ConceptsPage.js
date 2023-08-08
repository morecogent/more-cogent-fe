import React from 'react'
import { observer } from 'mobx-react'
import ctrl from './ConceptsPage.ctrl'
import ConceptsList from '../../../../domains/Concepts/components/ConceptsList/ConceptsList'

function ConceptsPage() {
    return (
        <ConceptsList actions={[{
            variant: 'danger',
            label: 'Delete',
            function: ctrl.onDelete
        }]}/>
    )
}

export default observer(ConceptsPage)