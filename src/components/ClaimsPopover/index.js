import React, { useState } from 'react'
import { Item, Wrapper } from './index.styles'
import Ctrl from './ctrl'
import { observer } from 'mobx-react'

const ClaimsPopover = ({filter, onSelect}) => {
    const ctrl = new Ctrl(filter)

    return (
        <Wrapper>
            {/*<input type="text" value={search} onChange={(e) => ctrl.setFilter(e.target.value)}/>*/}
            {
                ctrl.items.map(item => (
                    <Item onClick={() => onSelect(item.id)}>
                        {item.name}
                    </Item>
                ))
            }
        </Wrapper>
    )
}

export default observer(ClaimsPopover)