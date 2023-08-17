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
import AddClaim from "../../../system-wide/entities/Claim/components/AddClaim"
import ConceptAdd from '../../../domains/Concepts/components/ConceptAdd/ConceptAdd'

function Node({ goalsTree, goal, ctrl }) {
    const Component = !goal.id ? Tree : TreeNode
    const children = goalsTree.get(goal.id) || []

    const Label = (
        <Concept active={goal === ctrl.selectedGoal}
                 unjustified={!goal.isJustified}>
            <p>{goal.name}</p>
            <Actions>
                <Button onClick={() => ctrl.showPossibleSubGoals(goal)}>+</Button>
                {
                    !!goal.id && <Button
                        onClick={() => ctrl.showClaims(goal)}>
                        justifications: {goal.justificationsSize}
                    </Button>
                }
            </Actions>
        </Concept>
    )

    return (
        <Component label={Label}>
            {
                children.map((goal) => {
                    return <Node key={goal.id}
                                 goalsTree={goalsTree}
                                 goal={goal}
                                 ctrl={ctrl}/>
                })
            }
        </Component>
    )
}

function DesignPage({ ctrl }) {

    const goalsTree = ctrl.design.mainTree.asTree
    const rootGoal = goalsTree.get('_')

    return (
        <Wrapper>
            <h3>Title: {ctrl.design?.name}</h3>
            <Node goalsTree={goalsTree}
                  goal={rootGoal}
                  ctrl={ctrl}
            />

            {/* ContextWindows */}

            <ContextWindow active={!!ctrl.conceptsContextOpen}
                           onClose={ctrl.closeConceptsContext.bind(ctrl)}>
                <h3>Add a concept</h3>
                <ConceptAdd onFinish={ctrl.createGoal.bind(ctrl)}/>

                <ConceptsList actions={[{
                    variant: 'primary',
                    label: 'Add',
                    fn: ctrl.attachGoal.bind(ctrl)
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
                <AddClaim/>

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