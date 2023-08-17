import React from 'react'
import { observer } from 'mobx-react'
import Ctrl from './DesignPage.ctrl'
import { Concept, Wrapper } from './DesignPage.styles'
import { useParams } from 'react-router-dom'
import { Tree, TreeNode } from 'react-organizational-chart'
import ContextWindow from '../../../system-wide/components/ContextWindow/ContextWindow'
import GoalContext from '../../../domains/Goal/components/GoalContext/GoalContext'

const Node = observer(({ goalsTree, goal, ctrl }) => {
    const Component = !goal.parentId ? Tree : TreeNode
    const children = goalsTree.get(goal.id) || []

    const Label = (
        <Concept active={goal === ctrl.selectedGoal}
                 unjustified={!goal.isJustified}
                 onClick={() => ctrl.showPossibleSubGoals(goal)}
        >
            <p>{goal.name}</p>
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
})

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
                <GoalContext goal={ctrl.selectedGoal}
                             design={ctrl.design}
                />
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