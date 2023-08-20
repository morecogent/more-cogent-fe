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
import ActivityAdd from "../../../Activities/components/ActivityAdd/ActivityAdd";

const GoalContext = observer(({ctrl}) => {
    return (
        <div>
            <Tabs
                defaultActiveKey="overview"
                className="mb-3"
            >
                <Tab eventKey="overview" title="Overview">
                    <h5>Goal overview</h5>
                    <ConceptEditName name={ctrl.name} onChange={ctrl.changeName.bind(ctrl)}/>
                </Tab>
                <Tab eventKey="justifications" title="Justifications">
                    <h5>Existing Justifications</h5>
                    <ClaimsList
                        items={ctrl.item.justifications}
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
                            fn: ctrl.removeItem.bind(ctrl)
                        }]}/>

                    <hr/>
                    <h5>Add a child</h5>

                    <Tabs
                        defaultActiveKey={ctrl.isGoal ? 'existingConcept' : 'newActivity'}
                        className="mb-3"
                    >
                        {
                            !!ctrl.isGoal && <Tab eventKey="existingConcept" title="Add existing Concepts">
                                <ConceptsList
                                    items={ctrl.concepts}
                                    actions={[{
                                        variant: 'primary',
                                        label: 'Add',
                                        fn: ctrl.attachGoal.bind(ctrl)
                                    }]}/>
                            </Tab>
                        }
                        {
                            !!ctrl.isGoal && <Tab eventKey="newClaim" title="Add a Concept">
                                <ConceptAdd onFinish={ctrl.createSubGoal.bind(ctrl)}/>
                            </Tab>
                        }
                        <Tab eventKey="newActivity" title="Add an Activity">
                            <ActivityAdd onFinish={ctrl.createActivity.bind(ctrl)}/>
                        </Tab>
                    </Tabs>
                </Tab>
            </Tabs>
        </div>
    )
})

function Wrapper({item, design, children}) {
    const ctrl = new Ctrl(item, design, children)

    return <GoalContext ctrl={ctrl}/>
}

export default observer(Wrapper)