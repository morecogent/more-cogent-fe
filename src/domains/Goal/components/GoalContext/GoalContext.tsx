import React from "react";
import ConceptAdd from "../../../Concepts/components/ConceptAdd/ConceptAdd";
import ConceptsList from "../../../Concepts/components/ConceptsList/ConceptsList";
import Ctrl from "./GoalContext.ctrl";
import {observer} from 'mobx-react'
import ClaimsList from "../../../Claims/components/ClaimsList/ClaimsList";
import AddClaim from "../../../../system-wide/entities/Claim/components/AddClaim";
import {Tabs, Tab} from "react-bootstrap";
import GoalsList from "../GoalsList/GoalsList";

const GoalContext = observer(({ctrl}) => {
    return (
        <div>
            <Tabs
                defaultActiveKey="justifications"
                className="mb-3"
            >
                <Tab eventKey="justifications" title="Justifications">
                    <h4>Existing Justifications</h4>
                    <ClaimsList
                        items={ctrl.goal.justifications}
                        actions={[{
                            variant: 'danger',
                            label: 'Remove',
                            fn: (claim) => ctrl.removeJustification(claim.id)
                        }]}/>

                    <h4>Add a Justification</h4>
                    <Tabs
                        defaultActiveKey="existingClaim"
                        className="mb-3"
                    >
                        <Tab eventKey="existingClaim" title="Add from existing Claims">
                            <ClaimsList
                                items={ctrl.claims}
                                actions={[{
                                    variant: 'primary',
                                    label: 'Add',
                                    fn: ctrl.justify.bind(ctrl)
                                }]}/>
                        </Tab>
                        <Tab eventKey="newClaim" title="Add as a new Claim">
                            <AddClaim/>
                        </Tab>
                    </Tabs>

                </Tab>
                <Tab eventKey="children" title="Children">

                    <h4>Existing children</h4>
                    <GoalsList
                        items={ctrl.children}
                        actions={[{
                            variant: 'danger',
                            label: 'Remove',
                            fn: ctrl.removeGoal.bind(ctrl)
                        }]}/>

                    <h4>Add a child</h4>
                    <Tabs
                        defaultActiveKey="existingConcept"
                        className="mb-3"
                    >
                        <Tab eventKey="existingConcept" title="Add existing Concepts">
                            <ConceptsList
                                items={ctrl.concepts}
                                actions={[{
                                    variant: 'primary',
                                    label: 'Add',
                                    fn: ctrl.attachGoal.bind(ctrl)
                                }]}/>
                        </Tab>
                        <Tab eventKey="newClaim" title="Add a new Concept">
                            <ConceptAdd onFinish={ctrl.createSubGoal.bind(ctrl)}/>
                        </Tab>
                    </Tabs>
                </Tab>
            </Tabs>
        </div>
    )
})

function Wrapper({goal, design, children}) {
    const ctrl = new Ctrl(goal, design, children)

    return <GoalContext ctrl={ctrl}/>
}

export default observer(Wrapper)