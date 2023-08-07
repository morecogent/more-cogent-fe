import React from 'react'
import { observer } from 'mobx-react'
import Ctrl from './DesignPage.ctrl'
import { Concept, Wrapper } from './DesignPage.styles'
import { useParams } from 'react-router-dom'
import { Tree, TreeNode } from 'react-organizational-chart'

function Node({ designConcept, root }) {
    const Component = root ? Tree : TreeNode

    return (
        <Component label={<Concept>{designConcept.name}</Concept>}>
            {
                designConcept.children.map(child => (
                    <Node designConcept={child}/>
                ))
            }
        </Component>
    )
}

function DesignPage({ ctrl }) {

    return (
        <Wrapper>
            <h3>Title: {ctrl.design?.name}</h3>
            <Node designConcept={ctrl.design.initialConcept} root/>
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