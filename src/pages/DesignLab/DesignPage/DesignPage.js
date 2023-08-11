import React from 'react'
import { observer } from 'mobx-react'
import Ctrl from './DesignPage.ctrl'
import { Concept, Wrapper } from './DesignPage.styles'
import { useParams } from 'react-router-dom'
import { Tree, TreeNode } from 'react-organizational-chart'
import Button from 'react-bootstrap/Button'
import ConceptsList from '../../../domains/Concepts/components/ConceptsList/ConceptsList'
import ContextWindow from '../../../system-wide/components/ContextWindow/ContextWindow'

function Node({ goal, root, ctrl, isDuringLinking, justifications = [] }) {
    const Component = root ? Tree : TreeNode

    return (
        <Component label={
            <Concept active={isDuringLinking} unjustified={justifications.length === 0}>
                {goal.name}
                Justifications: {justifications.length}
                <Button onClick={() => ctrl.showPossibleSubGoals(goal)}>+</Button>
            </Concept>
        }>
            {
                goal.children.map(({child, justifications}) => (
                    <Node key={child.id} goal={child} ctrl={ctrl}
                          justifications={justifications}
                          isDuringLinking={child === ctrl.goalDuringLinking}/>
                ))
            }
        </Component>
    )
}

function DesignPage({ ctrl }) {

    return (
        <Wrapper>
            <h3>Title: {ctrl.design?.name}</h3>
            <Node goal={ctrl.design.mainTree} root ctrl={ctrl}
                  isDuringLinking={ctrl.design.mainTree === ctrl.goalDuringLinking}
            />
            <ContextWindow active={!!ctrl.claimsContextOpen}
                           onClose={ctrl.closeContextWindow.bind(ctrl)}>
                <ConceptsList actions={[{
                    variant: 'primary',
                    label: 'Add',
                    fn: ctrl.attachConcept.bind(ctrl)
                }]}/>
            </ContextWindow>
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