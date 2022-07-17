import React from 'react'
import {observer} from 'mobx-react'
import { Wrapper } from './index.styles'

const List = ({items, Component, onClick}) => (
    <Wrapper>
        {
            items.map(item => (
                <Component key={item.id} {...item} onClick={onClick} />
            ))
        }
    </Wrapper>
)

export default observer(List)