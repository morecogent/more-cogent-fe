import React from 'react'
import { observer } from 'mobx-react'
import Ctrl from './DesignPage.ctrl'
import { Concept, Wrapper } from './DesignPage.styles'
import { useParams } from 'react-router-dom'
import { Tree, TreeNode } from 'react-organizational-chart'
import Button from 'react-bootstrap/Button'
import ConceptsList from '../../../domains/Concepts/components/ConceptsList/ConceptsList'
import appCtrl from '../../../system-wide/controllers/App.ctrl'

function AddingConceptModal({ addGoal }) {
    return (
        <ConceptsList actions={[{
            variant: 'primary',
            label: 'Add',
            function: addGoal
        }]}/>
    )
}

function Node({ goal, root, ctrl }) {
    const Component = root ? Tree : TreeNode

    return (
        <Component label={<Concept>
            {goal.name}
            <Button onClick={() => appCtrl.openModal(AddingConceptModal)}>Add child</Button>
        </Concept>}>
            {
                goal.children.map(child => (
                    <Node goal={child} ctrl={ctrl}/>
                ))
            }
        </Component>
    )
}

function DesignPage({ ctrl }) {

    return (
        <Wrapper>
            <h3>Title: {ctrl.design?.name}</h3>
            <Node goal={ctrl.design.mainTree} root ctrl={ctrl}/>
        </Wrapper>
    )
}

const ClaimPageWithMobx = observer(DesignPage)

function DesignPageWrapper() {
    const { id } = useParams()
    const ctrl = new Ctrl(id)

    return (
        <ClaimPageWithMobx ctrl={ctrl}/>
    )
}

export default DesignPageWrapper