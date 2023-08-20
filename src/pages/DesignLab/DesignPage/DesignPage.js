import React from 'react'
import { observer } from 'mobx-react'
import Ctrl from './DesignPage.ctrl'
import { Concept, Wrapper } from './DesignPage.styles'
import { useParams } from 'react-router-dom'
import { Tree, TreeNode } from 'react-organizational-chart'
import ContextWindow from '../../../system-wide/components/ContextWindow/ContextWindow'
import GoalContext from '../../../domains/Goal/components/GoalContext/GoalContext'

const Node = observer(({ childrenHashTable, item, ctrl }) => {
    const Component = !item.parentId ? Tree : TreeNode
    const children = childrenHashTable.get(item.id) || []

    const Label = (
        <Concept active={item === ctrl.selectedGoal}
                 unjustified={!item.isJustified}
                 onClick={() => ctrl.showPossibleSubGoals(item)}
        >
            <p>{item.name}</p>
        </Concept>
    )

    return (
        <Component label={Label}>
            {
                children.map((item) => {
                    return <Node key={item.id}
                                 childrenHashTable={childrenHashTable}
                                 item={item}
                                 ctrl={ctrl}/>
                })
            }
        </Component>
    )
})

function DesignPage({ ctrl }) {

    const childrenHashTable = ctrl.design.mainTree.asHashTable
    const rootItem = childrenHashTable.get('_')

    return (
        <Wrapper>
            <h3>Title: {ctrl.design?.name}</h3>
            <Node childrenHashTable={childrenHashTable}
                  item={rootItem}
                  ctrl={ctrl}
            />

            {/* ContextWindows */}

            {
                ctrl.selectedGoal &&
                <ContextWindow active={!!ctrl.conceptsContextOpen}
                               onClose={ctrl.closeConceptsContext.bind(ctrl)}>
                    <GoalContext item={ctrl.selectedGoal}
                                 children={childrenHashTable.get(ctrl.selectedGoal.id)}
                                 design={ctrl.design}
                    />
                </ContextWindow>
            }

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