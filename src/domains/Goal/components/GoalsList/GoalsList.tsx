import React from 'react'
import {observer} from 'mobx-react'
import Table from "../../../../system-wide/components/data-presentation/Table/Table"
import Goal from "../../../../system-wide/entities/Design/Goal.model";
import {Action} from "../../../../system-wide/components/data-presentation/Table/Table.types";
import Activity from "../../../Activities/models/Activity.model";

type GoalsListParams = {
    items: Goal[] | Activity[]
    actions: Action[]
}

function GoalsList({items, actions = []}: GoalsListParams) {
    const tableSchema = [
        {
            label: 'Name',
            propertyTransform: item => {
                if(item instanceof Goal){
                    return item.concept.name
                } else {
                    return item.name
                }
            }
        },
        {
            label: 'Type',
            propertyTransform: item => {
                if(item instanceof Goal){
                    return 'Goal'
                } else {
                    return 'Activity'
                }
            }
        },
    ]

    if (!items.length) {
        return <p>There are no Goals in this table</p>
    }

    return (
        <Table schema={tableSchema} data={items} actions={actions}/>
    )
}

export default observer(GoalsList)