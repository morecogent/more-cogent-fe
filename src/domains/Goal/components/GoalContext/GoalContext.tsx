import React from "react";
import ConceptAdd from "../../../Concepts/components/ConceptAdd/ConceptAdd";
import ConceptsList from "../../../Concepts/components/ConceptsList/ConceptsList";
import Ctrl from "./GoalContext.ctrl";
import {observer} from 'mobx-react'
import ClaimsList from "../../../Claims/components/ClaimsList/ClaimsList";
import AddClaim from "../../../../system-wide/entities/Claim/components/AddClaim";
import {Tabs, Tab} from "react-bootstrap";
import GoalsList from "../GoalsList/GoalsList";
import ConceptEditName from "../../../Concepts/components/ConceptEditName/ConceptEditName";

const GoalContext = observer(({ctrl}) => {
    return (
        <div>
            <Tabs
                defaultActiveKey="overview"
                className="mb-3"
            >
                <Tab eventKey="overview" title="Overview">
                    <h5>Goal overview</h5>
                    <ConceptEditName name={ctrl.goal.concept.name} onChange={ctrl.changeConceptName.bind(ctrl)} />
                </Tab>
                <Tab eventKey="justifications" title="Justifications">
                    <h5>Existing Justifications</h5>
                    <ClaimsList
                        items={ctrl.goal.justifications}
                        actions={[{
                            variant: 'danger',
                            label: 'Remove',
                            fn: (claim) => ctrl.removeJustification(claim.id)
                        }]}/>

                    <hr/>
                    <h5>Add a Justification</h5>
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
                            <AddClaim onAdd={ctrl.justify.bind(ctrl)}/>
                        </Tab>
                    </Tabs>

                </Tab>
                <Tab eventKey="children" title="Children">

                    <h5>Existing children</h5>
                    <GoalsList
                        items={ctrl.children}
                        actions={[{
                            variant: 'danger',
                            label: 'Remove',
                            fn: ctrl.removeGoal.bind(ctrl)
                        }]}/>

                    <hr/>
                    <h5>Add a child</h5>
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