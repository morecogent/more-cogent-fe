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
import AddClaim from "../../../system-wide/entities/Claim/components/AddClaim";
import ConceptAdd from '../../../domains/Concepts/components/ConceptAdd/ConceptAdd'

function Node({ goalsTree, root, ctrl, isDuringLinking }) {
    const Component = root ? Tree : TreeNode
    const justifications = []
    // const justifications = decision?.justifications || []

    return (
        <Component label={
            <Concept active={isDuringLinking} unjustified={justifications.length === 0}>
                <p>{goalsTree.item.name}</p>
                <Actions>
                    <Button onClick={() => ctrl.showPossibleSubGoals(goalsTree.item)}>+</Button>
                    {/*{*/}
                    {/*    !root && <Button onClick={() => ctrl.showClaims(goalsTree.item)}>justifications: {justifications.length}</Button>*/}
                    {/*}*/}
                </Actions>
            </Concept>
        }>
            {
                goalsTree.children.map((goalsTree) => {
                    return <Node key={goalsTree.item.id} goalsTree={goalsTree} ctrl={ctrl}
                                 isDuringLinking={goalsTree.item === ctrl.goalDuringLinking}/>
                })
            }
        </Component>
    )
}

function DesignPage({ ctrl }) {

    const goalsTree = ctrl.design.mainTree.asTree

    return (
        <Wrapper>
            <h3>Title: {ctrl.design?.name}</h3>
            <Node goalsTree={goalsTree} root ctrl={ctrl}
                  isDuringLinking={goalsTree.item === ctrl.goalDuringLinking}
            />

            {/* ContextWindows */}

            <ContextWindow active={!!ctrl.conceptsContextOpen}
                           onClose={ctrl.closeConceptsContext.bind(ctrl)}>
                <h3>Add a concept</h3>
                <ConceptAdd onFinish={ctrl.createGoal.bind(ctrl)} />

                <ConceptsList actions={[{
                    variant: 'primary',
                    label: 'Add',
                    fn: ctrl.attachConcept.bind(ctrl)
                }]}/>
            </ContextWindow>

            <ContextWindow active={!!ctrl.claimsContextOpen}
                           onClose={ctrl.closeJustificationsContext.bind(ctrl)}>

                <h3>Justifications</h3>
                <ClaimsList
                    items={ctrl.justificationsForSelectedDecision}
                    actions={[{
                        variant: 'danger',
                        label: 'Remove',
                        fn: (claim) => ctrl.removeJustification(claim.id)
                    }]}/>

                <h3>Add claim</h3>
                <AddClaim />

                <h3>Unrelated claims</h3>
                <ClaimsList
                    items={ctrl.claims}
                    actions={[{
                        variant: 'primary',
                        label: 'Add',
                        fn: ctrl.justify.bind(ctrl)
                    }]}/>
            </ContextWindow>

            {/* END: ContextWindows */}
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