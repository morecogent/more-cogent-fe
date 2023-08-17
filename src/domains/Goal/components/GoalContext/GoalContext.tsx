import React from "react";
import ConceptAdd from "../../../Concepts/components/ConceptAdd/ConceptAdd";
import ConceptsList from "../../../Concepts/components/ConceptsList/ConceptsList";
import Ctrl from "./GoalContext.ctrl";
import { observer } from 'mobx-react'
import ClaimsList from "../../../Claims/components/ClaimsList/ClaimsList";
import AddClaim from "../../../../system-wide/entities/Claim/components/AddClaim";

const GoalContext = observer(({ctrl}) => {
    return (
        <div>
            <h3>Add a concept</h3>
            <ConceptAdd onFinish={ctrl.createSubGoal.bind(ctrl)}/>

            <ConceptsList actions={[{
                variant: 'primary',
                label: 'Add',
                fn: ctrl.attachGoal.bind(ctrl)
            }]}/>

            <h3>Justifications</h3>
            <ClaimsList
                items={ctrl.goal.justifications}
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
        </div>
    )
})

function Wrapper({goal, design}){
    const ctrl = new Ctrl(goal, design)

    return <GoalContext ctrl={ctrl} />
}

export default observer(Wrapper)