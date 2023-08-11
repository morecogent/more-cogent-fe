import React from 'react'
import { observer } from 'mobx-react'
import Ctrl from './DesignPage.ctrl'
import { Actions, Concept, Wrapper } from './DesignPage.styles'
import { useParams } from 'react-router-dom'
import { Tree, TreeNode } from 'react-organizational-chart'
import Button from 'react-bootstrap/Button'
import ConceptsList from '../../../domains/Concepts/components/ConceptsList/ConceptsList'
import ClaimsList from '../../../domains/Claims/components/ClaimsList/ClaimsList'
import ContextWindow from '../../../system-wide/components/ContextWindow/ContextWindow'

function Node({ goal, root, ctrl, isDuringLinking, decision }) {
    const Component = root ? Tree : TreeNode
    const justifications = decision?.justifications || []

    return (
        <Component label={
            <Concept active={isDuringLinking} unjustified={justifications.length === 0}>
                <p>{goal.name}</p>
                <Actions>
                    <Button onClick={() => ctrl.showPossibleSubGoals(goal)}>+</Button>
                    <Button onClick={() => ctrl.showClaims(decision)}>justify</Button>
                </Actions>
                <i>Justifications: {justifications.length}</i>
                <p>{JSON.stringify(justifications)}</p>
            </Concept>
        }>
            {
                goal.children.map((decision) => {
                    const { child } = decision
                    return <Node key={child.id} goal={child} ctrl={ctrl}
                                 decision={decision}
                                 isDuringLinking={child === ctrl.goalDuringLinking}/>
                })
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
            <ContextWindow active={!!ctrl.conceptsContextOpen}
                           onClose={ctrl.closeConceptsContext.bind(ctrl)}>
                <ConceptsList actions={[{
                    variant: 'primary',
                    label: 'Add',
                    fn: ctrl.attachConcept.bind(ctrl)
                }]}/>
            </ContextWindow>

            <ContextWindow active={!!ctrl.claimsContextOpen}
                           onClose={ctrl.closeClaimsContext.bind(ctrl)}>
                <ClaimsList
                    items={ctrl.claims}
                    actions={[{
                        variant: 'primary',
                        label: 'Add',
                        fn: ctrl.attachClaim.bind(ctrl)
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